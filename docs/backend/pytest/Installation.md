---
title: Installation
displayed-sidebar : backend
sidebar_position: 2
---
## **2. Installation**

### **Basic Installation**
To install Pytest, use `pip`, the Python package manager:
```bash
pip install pytest
```
This command installs the latest stable version of Pytest.

### **Installing Additional Plugins**
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

### **Verifying Installation**
After installation, verify that Pytest is installed correctly by checking its version:
```bash
pytest --version
```
This command should display the installed version of Pytest.

---