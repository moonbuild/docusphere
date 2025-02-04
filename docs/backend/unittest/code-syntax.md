---
title: Code Syntax
displayed-sidebar : backend
sidebar_position: 3

---
## Unittest Syntax and Best Practices

This guide explains the core concepts and syntax for writing tests using **unittest**, from basic tests to testing class-based structures and asynchronous code. `unittest` is a built-in Python testing framework that simplifies the process of writing and organizing tests for Python applications.

---

### 1. **Basic Test Syntax**

To define a test function, create a class that inherits from `unittest.TestCase`. Each test method must start with the prefix `test_`.

#### Example:
```python
import unittest

class TestMathOperations(unittest.TestCase):
    def test_addition(self):
        self.assertEqual(1 + 1, 2)
```

- **Class Inheritance**: The test class must inherit from `unittest.TestCase`.
- **Test Method**: Any method prefixed with `test_` is recognized as a test.
- **Assertion**: Use methods like `assertEqual`, `assertTrue`, or `assertFalse` to validate conditions.

---

### 2. **Using Fixtures for Setup and Teardown**

Fixtures in `unittest` are implemented using the `setUp()` and `tearDown()` methods. These methods run before and after each test, respectively.

#### Basic Example:
```python
import unittest

class TestDatabaseOperations(unittest.TestCase):
    def setUp(self):
        # Code to run before each test
        self.database = {"user": "admin", "password": "12345"}

    def tearDown(self):
        # Code to run after each test
        self.database.clear()

    def test_database_user(self):
        self.assertEqual(self.database["user"], "admin")
```

- **`setUp()`**: Runs before each test method.
- **`tearDown()`**: Runs after each test method.
- **Shared Resources**: Use these methods to initialize or clean up resources.

---

### 3. **Assertions**

Assertions are crucial for verifying that the code behaves as expected. `unittest` provides a variety of assertion methods.

#### Common Assertions:
```python
def test_example(self):
    self.assertEqual(1, 1)                 # Equality assertion
    self.assertNotEqual(1, 2)             # Inequality assertion
    self.assertTrue(True)                 # Boolean assertion
    self.assertFalse(False)               # Boolean assertion
    self.assertIn("apple", ["apple", "banana"])  # Containment assertion
    self.assertIsInstance(123, int)       # Type assertion
```

- **Equality**: `assertEqual(a, b)`
- **Inequality**: `assertNotEqual(a, b)`
- **Boolean**: `assertTrue(condition)` or `assertFalse(condition)`
- **Containment**: `assertIn(item, collection)`
- **Type Checking**: `assertIsInstance(obj, type)`

---

### 4. **Running Tests**

To execute tests, use the following command:

```bash
python -m unittest
```

You can also specify a file or directory:

```bash
python -m unittest test_example.py  # Run tests in a specific file
python -m unittest discover tests/  # Run tests in a directory
```

#### Command-Line Options:
- `-v`: Verbose output.
- `-k <expression>`: Run tests matching a specific pattern.
- `--failfast`: Stop after the first failure.

---

### 5. **Parameterized Testing**

`unittest` does not have built-in parameterization like `pytest`, but you can achieve similar functionality using loops or helper functions.

#### Example:
```python
import unittest

class TestAddition(unittest.TestCase):
    def test_addition(self):
        test_cases = [
            (1, 1, 2),
            (2, 2, 4),
            (3, 3, 6)
        ]
        for input1, input2, expected in test_cases:
            with self.subTest(input1=input1, input2=input2, expected=expected):
                self.assertEqual(input1 + input2, expected)
```

- **`subTest()`**: Allows multiple assertions within a single test method without stopping on failure.

---

### 6. **Working with Asynchronous Tests**

For testing asynchronous code, use the `unittest.IsolatedAsyncioTestCase` class introduced in Python 3.8+.

#### Example:
```python
import unittest
import asyncio

class TestAsyncOperations(unittest.IsolatedAsyncioTestCase):
    async def test_async_addition(self):
        await asyncio.sleep(1)
        self.assertEqual(2 + 2, 4)
```

- **`IsolatedAsyncioTestCase`**: A subclass for testing asynchronous code.
- **`async def`**: Define asynchronous test methods.

---

### 7. **Organizing and Discovering Tests**

`unittest` automatically discovers tests in files named `test_*.py` or `*_test.py`. You can organize tests into directories.

#### Test Structure Example:
```
tests/
    test_basic.py
    test_advanced.py
    subdir/
        test_submodule.py
```

---

### 8. **Capturing Output**

Use the `unittest.mock` module to capture output during tests, such as printed statements.

#### Example:
```python
import unittest
from io import StringIO
import sys

class TestPrintOutput(unittest.TestCase):
    def test_print_output(self):
        captured_output = StringIO()
        sys.stdout = captured_output
        print("Hello, world!")
        sys.stdout = sys.__stdout__
        self.assertEqual(captured_output.getvalue(), "Hello, world!\n")
```

- **`StringIO`**: Captures standard output.
- **`sys.stdout`**: Redirects output to a buffer.

---

### 9. **Skipping Tests and Expected Failures**

You can skip tests or mark them as expected failures using decorators.

#### Skipping a Test:
```python
import unittest

class TestExample(unittest.TestCase):
    @unittest.skip("This test is not yet implemented.")
    def test_not_implemented(self):
        self.fail("This should not run.")
```

#### Expected Failure:
```python
import unittest

class TestExample(unittest.TestCase):
    @unittest.expectedFailure
    def test_expected_failure(self):
        self.assertEqual(1, 2)  # This will be marked as an expected failure
```

---

### 10. **Testing Class-Based OOP Structures**

`unittest` supports testing classes and their methods effectively.

#### 10.1 Testing Classes and Methods
You can test classes and their methods by creating instances within your tests and verifying their behavior.

##### Example:
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

# test_person.py
import unittest
from person import Person

class TestPerson(unittest.TestCase):
    def test_person_greet(self):
        person = Person("Alice", 30)
        self.assertEqual(person.greet(), "Hello, my name is Alice and I am 30 years old.")

    def test_person_is_adult(self):
        adult = Person("Bob", 25)
        child = Person("Charlie", 10)
        self.assertTrue(adult.is_adult())
        self.assertFalse(child.is_adult())
```

#### 10.2 Using Fixtures with Classes
Fixtures can create and manage instances of classes for reuse across multiple tests.

##### Example:
```python
import unittest
from person import Person

class TestPerson(unittest.TestCase):
    def setUp(self):
        self.person = Person("Diana", 22)

    def test_person_greet_with_fixture(self):
        self.assertEqual(self.person.greet(), "Hello, my name is Diana and I am 22 years old.")
```

#### 10.3 Testing Inheritance
Test whether subclasses correctly extend or override the behavior of parent classes.

##### Example:
```python
# employee.py
class Employee(Person):  # Inherits from Person
    def __init__(self, name, age, employee_id):
        super().__init__(name, age)
        self.employee_id = employee_id

    def greet(self):
        return f"{super().greet()} My employee ID is {self.employee_id}."

# test_employee.py
import unittest
from employee import Employee

class TestEmployee(unittest.TestCase):
    def test_employee_greet(self):
        employee = Employee("Eve", 28, "E12345")
        expected_greeting = "Hello, my name is Eve and I am 28 years old. My employee ID is E12345."
        self.assertEqual(employee.greet(), expected_greeting)
```

#### 10.4 Mocking Dependencies in Classes
Mock external dependencies, such as database connections or APIs, when testing class behavior.

##### Example:
```python
from unittest.mock import MagicMock
from payment_gateway import Order, PaymentGateway

class TestOrder(unittest.TestCase):
    def test_order_checkout(self):
        mock_gateway = MagicMock()
        mock_gateway.process_payment.return_value = {"status": "success", "amount": 100}
        order = Order(mock_gateway)
        self.assertTrue(order.checkout(100))
        mock_gateway.process_payment.assert_called_once_with(100)
```

#### 10.5 Testing Exceptions in Classes
Verify that classes handle exceptions properly using `assertRaises`.

##### Example:
```python
import unittest
from bank_account import BankAccount

class TestBankAccount(unittest.TestCase):
    def test_negative_balance_raises_exception(self):
        with self.assertRaises(ValueError, msg="Balance cannot be negative."):
            BankAccount(-100)
```

