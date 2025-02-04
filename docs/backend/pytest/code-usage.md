---
title: Code Syntax
displayed-sidebar : backend
sidebar_position: 3

---


# **Pytest Syntax and Best Practices**

This guide explains the core concepts and syntax for writing tests using Pytest, from basic tests to testing class-based structures and asynchronous code. Pytest simplifies the process of writing and organizing tests for Python applications.

---

## **1. Basic Test Syntax**
To define a test function, use the `test_` prefix for the function name. This ensures that Pytest recognizes it as a test.

#### **Example:**
```python
def test_addition():
    assert 1 + 1 == 2
```

- **Function Name:** Must begin with `test_`.
- **Assertion:** The `assert` statement checks if the condition is true. If it fails, Pytest reports an error.

---

## **2. Using Fixtures for Setup and Teardown**
Fixtures are reusable pieces of setup code that can be shared across multiple tests. They are defined using the `@pytest.fixture` decorator.

#### **Basic Example:**
```python
import pytest

@pytest.fixture
def setup_data():
    data = {"name": "John", "age": 30}
    return data

def test_user_name(setup_data):
    assert setup_data["name"] == "John"
```

- **Fixture Declaration:** Use the `@pytest.fixture` decorator.
- **Injecting Fixtures:** Fixtures are passed into test functions by name.

---

## **3. Parameterized Testing**
Parameterized testing allows you to run the same test with different sets of inputs, reducing redundancy.

#### **Example:**
```python
import pytest

@pytest.mark.parametrize("input1, input2, expected", [
    (1, 1, 2),
    (2, 2, 4),
    (3, 3, 6)
])
def test_addition(input1, input2, expected):
    assert input1 + input2 == expected
```

- **Parameterization:** Use `@pytest.mark.parametrize` to specify parameters for the test function.

---

## **4. Assertions**
Assertions are crucial for verifying that the code behaves as expected. Pytest provides detailed output when assertions fail.

#### **Common Assertions:**
```python
def test_example():
    assert 1 == 1                 # Equality assertion
    assert 1 != 2                 # Inequality assertion
    assert [1, 2, 3] == [1, 2, 3]  # List equality
    assert "apple" in "pineapple"  # Containment assertion
    assert not isinstance(123, str)  # Type assertion
```

- **Types of Assertions:**
  - Equality: `assert a == b`
  - Inequality: `assert a != b`
  - Containment: `assert item in collection`
  - Type Checking: `assert isinstance(obj, type)`

---

## **5. Running Tests**
To execute tests, use the following command:
```bash
pytest
```

You can also specify a file or directory:
```bash
pytest test_example.py  # Run tests in a specific file
pytest tests/           # Run tests in a directory
```

#### **Command-Line Options:**
- `-v`: Verbose output.
- `-k <expression>`: Run tests matching a specific pattern.
- `--maxfail=<num>`: Stop after a specific number of failures.

---

## **6. Working with Asynchronous Tests**
For testing asynchronous code, use the `pytest-asyncio` plugin.

#### **Example:**
```python
import pytest
import asyncio

@pytest.mark.asyncio
async def test_async_addition():
    await asyncio.sleep(1)
    assert 2 + 2 == 4
```

- **Decorator:** `@pytest.mark.asyncio` allows testing of asynchronous functions.

---

## **7. Organizing and Discovering Tests**
Pytest automatically discovers tests in files prefixed with `test_` or suffixed with `_test.py`. You can organize tests in directories.

#### **Test Structure Example:**
```
tests/
    test_basic.py
    test_advanced.py
    subdir/
        test_submodule.py
```

---

## **8. Capturing Output**
Pytest can capture output during tests, such as printed statements.

#### **Example:**
```python
import pytest

def test_print_output(capfd):
    print("Hello, world!")
    captured = capfd.readouterr()  # Capture printed output
    assert captured.out == "Hello, world!\n"
```

- **Fixture:** `capfd` captures standard output and error.

---

## **9. Skipping Tests and Expected Failures**
You can skip tests or mark them as expected failures using decorators.

#### **Skipping a Test:**
```python
import pytest

@pytest.mark.skip(reason="This test is not yet implemented.")
def test_not_implemented():
    assert False
```

#### **Expected Failure:**
```python
@pytest.mark.xfail
def test_expected_failure():
    assert 1 == 2  # This will be marked as an expected failure
```

---

## **10. Testing Class-Based OOP Structures**
Pytest supports testing classes and their methods effectively.

### **10.1 Testing Classes and Methods**
You can test classes and their methods by creating instances within your tests and verifying their behavior.

#### **Example:**
```python
# person.py
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        return f"Hello, my name is {self.name} and I am {self.age} years old."

    def is_adult(self):
        return self.age >= 18
```

#### **Test:**
```python
from person import Person

def test_person_greet():
    person = Person("Alice", 30)
    assert person.greet() == "Hello, my name is Alice and I am 30 years old."

def test_person_is_adult():
    adult = Person("Bob", 25)
    child = Person("Charlie", 10)
    assert adult.is_adult() is True
    assert child.is_adult() is False
```

---

### **10.2 Using Fixtures with Classes**
Fixtures can create and manage instances of classes for reuse across multiple tests.

#### **Example:**
```python
import pytest
from person import Person

@pytest.fixture
def person_instance():
    return Person("Diana", 22)

def test_person_greet_with_fixture(person_instance):
    assert person_instance.greet() == "Hello, my name is Diana and I am 22 years old."
```

---

### **10.3 Testing Inheritance**
Test whether subclasses correctly extend or override the behavior of parent classes.

#### **Example:**
```python
# employee.py
class Employee(Person):  # Inherits from Person
    def __init__(self, name, age, employee_id):
        super().__init__(name, age)
        self.employee_id = employee_id

    def greet(self):
        return f"{super().greet()} My employee ID is {self.employee_id}."
```

#### **Test:**
```python
from employee import Employee

def test_employee_greet():
    employee = Employee("Eve", 28, "E12345")
    expected_greeting = "Hello, my name is Eve and I am 28 years old. My employee ID is E12345."
    assert employee.greet() == expected_greeting
```

---

### **10.4 Mocking Dependencies in Classes**
Mock external dependencies, such as database connections or APIs, when testing class behavior.

#### **Example:**
```python
from unittest.mock import MagicMock
from payment_gateway import Order, PaymentGateway

def test_order_checkout():
    mock_gateway = MagicMock()
    mock_gateway.process_payment.return_value = {"status": "success", "amount": 100}

    order = Order(mock_gateway)
    assert order.checkout(100) is True
    mock_gateway.process_payment.assert_called_once_with(100)
```

---

### **10.5 Testing Exceptions in Classes**
Verify that classes handle exceptions properly using `pytest.raises`.

#### **Example:**
```python
import pytest
from bank_account import BankAccount

def test_negative_balance_raises_exception():
    with pytest.raises(ValueError, match="Balance cannot be negative."):
        BankAccount(-100)
```

---

<!-- ## **11. Conclusion**
Pytest offers a comprehensive framework for testing Python code, from basic functions to complex class-based OOP structures. With powerful features like fixtures, parameterization, asynchronous testing, and mock support, Pytest helps ensure your code is reliable and maintainable.

---

 -->
