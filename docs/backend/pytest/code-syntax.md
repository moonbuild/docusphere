---
title: Code Syntax
displayed-sidebar : backend
sidebar_position: 2

---

#### 1. Basic Test Syntax

In Pytest, tests are defined as standard Python functions. To ensure that Pytest recognizes a function as a test, the function name must start with `test_`. 

**Example:**
```python
def test_addition():
    assert 1 + 1 == 2
```
- **Function Name:** Must begin with `test_`.
- **Assertion:** The `assert` statement checks if the condition is true. If it fails, Pytest will report an error.

#### 2. Using Fixtures for Setup and Teardown

Fixtures in Pytest are used to manage setup and teardown logic for tests. They can be reused across multiple test functions.

**Basic Fixture Example:**
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
- **Injecting Fixtures:** Fixtures are passed to the test function by name.

#### 3. Parameterized Testing

Parameterized testing allows you to run the same test with different sets of data, reducing redundancy.

**Example:**
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

#### 4. Assertions

Assertions are crucial for verifying that the code behaves as expected. Pytest provides detailed output when assertions fail.

**Common Assertions:**
```python
def test_example():
    assert 1 == 1               # Equality assertion
    assert 1 != 2               # Inequality assertion
    assert [1, 2, 3] == [1, 2, 3]  # List equality
    assert "apple" in "pineapple"  # Containment assertion
    assert not isinstance(123, str)  # Type assertion
```
- **Types of Assertions:**
  - Equality: `assert a == b`
  - Inequality: `assert a != b`
  - Containment: `assert item in collection`
  - Type Checking: `assert isinstance(obj, type)`

#### 5. Running Tests

To run tests, execute the following command in your terminal:
```bash
$ pytest
```
You can also specify a file or directory:
```bash
$ pytest test_example.py  # Run tests in a specific file
$ pytest tests/           # Run tests in a directory
```
**Command-Line Options:**
- `-v`: Verbose output.
- `-k <expression>`: Run tests matching a specific pattern.
- `--maxfail=<num>`: Stop after a specific number of failures.

#### 6. Working with Asynchronous Tests

For asynchronous code, use the `pytest-asyncio` plugin.

**Example:**
```python
import pytest
import asyncio

@pytest.mark.asyncio
async def test_async_addition():
    await asyncio.sleep(1)
    assert 2 + 2 == 4
```
- **Decorator:** `@pytest.mark.asyncio` allows testing of asynchronous functions.

#### 7. Test Discovery and Organization

Pytest automatically discovers tests in files prefixed with `test_` or suffixed with `_test.py`. You can organize tests in subdirectories.

**Test Structure:**
```
tests/
    test_basic.py
    test_advanced.py
    subdir/
        test_submodule.py
```

#### 8. Using Pytest with Custom Assertions

You can create custom assertions using helper functions.

**Example of a Custom Assertion:**
```python
def test_is_even():
    def is_even(num):
        assert num % 2 == 0, f"{num} is not even"
        
    is_even(2)  # Passes
    is_even(3)  # Fails with a custom message
```

#### 9. Capturing Output

Pytest can capture output during tests, such as printed statements.

**Example:**
```python
import pytest

def test_print_output(capfd):
    print("Hello, world!")
    captured = capfd.readouterr()  # Capture printed output
    assert captured.out == "Hello, world!\n"
```
- **Fixture:** `capfd` captures standard output and error.

#### 10. Skipping Tests and Expected Failures

You can skip tests or mark them as expected failures using decorators.

**Example of Skipping a Test:**
```python
import pytest

@pytest.mark.skip(reason="This test is not yet implemented.")
def test_not_implemented():
    assert False
```

**Example of Marking a Test as Expected Failure:**
```python
@pytest.mark.xfail
def test_expected_failure():
    assert 1 == 2  # This will be marked as an expected failure
```

#### Conclusion

Pytest provides a robust framework for writing tests in Python, with a clear syntax and powerful features like fixtures, parameterization, and async support. Whether you're writing simple unit tests or complex integration tests, Pytest streamlines the testing process, making it an essential tool for Python developers.