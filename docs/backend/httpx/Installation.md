---
title: Installation
displayed-sidebar : backend
sidebar_position: 2

---

## **Installation of HTTPX: A Comprehensive Guide**

HTTPX is a modern and versatile HTTP client for Python that supports both synchronous and asynchronous requests. Installing HTTPX is straightforward, but understanding the various installation options ensures you set up your environment correctly for your specific use case. Below is an in-depth guide to installing HTTPX, including prerequisites, optional dependencies, and troubleshooting tips.

---

### **1. Prerequisites**
Before installing HTTPX, ensure that your environment meets the following requirements:

- **Python Version**: HTTPX requires Python 3.7 or higher. Verify your Python version by running:
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
To install HTTPX, use `pip`, the Python package manager. Run the following command to install the latest stable version of HTTPX:

```bash
pip install httpx
```

This command installs HTTPX with its core functionality, which includes support for both synchronous and asynchronous HTTP requests.

---

### **3. Optional Dependencies**
HTTPX provides several optional features that require additional dependencies. Depending on your use case, you may need to install these extras:

#### **a. HTTP/2 Support**
HTTPX supports HTTP/2, but this feature requires the `h2` library. To enable HTTP/2, install HTTPX with the `http2` extra:

```bash
pip install httpx[http2]
```

This installs the necessary dependencies for HTTP/2 protocol support, allowing you to communicate with servers that use HTTP/2.

#### **b. Broader HTTP Protocol Support**
If you need broader HTTP protocol support (e.g., SOCKS proxies), install HTTPX with the `socks` extra:

```bash
pip install httpx[socks]
```

This installs the `socksio` library, enabling support for SOCKS proxies.

#### **c. All Optional Features**
To install all optional dependencies at once, use the `all` extra:

```bash
pip install httpx[all]
```

This installs HTTPX along with all optional dependencies, including HTTP/2 and SOCKS proxy support.

---

### **4. Verifying Installation**
After installation, verify that HTTPX is installed correctly by checking its version:

```bash
python -c "import httpx; print(httpx.__version__)"
```

This command should output the installed version of HTTPX. If no errors occur, the installation was successful.


---


