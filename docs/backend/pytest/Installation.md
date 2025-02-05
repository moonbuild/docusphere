---
title: Installation
displayed-sidebar : backend
sidebar_position: 2
---
## **Installation of the pytest : A Comprehensive Guide**

pytest is a framework that makes building simple and scalable tests easy. Tests are expressive and readable no boilerplate code required. Get started in minutes with a small unit test or complex functional test for your application or library.

---


### **1. Prerequisites**
Before installing pytest, ensure that your environment meets the following requirements:

- **Python Version**: pytest requires Python 3.6 or higher. Verify your Python version by running:
  ```bash
  python --version
  ```
  If you're using Python 2.x or an older version of Python 3, consider upgrading to a supported version.

- **pip**: Ensure that `pip` (Python's package manager) is installed and up-to-date. Update `pip` using:
  ```bash
  pip install --upgrade pip
  ```

---

### **2. Basic Installation**
To install Pytest, use `pip`, the Python package manager:
```bash
pip install pytest
```

This command installs the latest stable version of Pytest.

### **3. Installing Additional Plugins**
Depending on your project requirements, you may need additional plugins:
- **Async Testing**: Install `pytest-asyncio` for testing asynchronous code.
  ```bash
  pip install pytest-asyncio
  ```
- **Mocking**: Install `pytest-mock` for mocking objects during tests.
  ```bash
  pip install pytest-mock
  ```
- **Coverage Reporting**: Install `pytest-cov` to measure test coverage.
  ```bash
  pip install pytest-cov
  ```

### **4. Verifying Installation**
After installation, verify that Pytest is installed correctly by checking its version:
```bash
pytest --version
```
This command should display the installed version of Pytest.

---