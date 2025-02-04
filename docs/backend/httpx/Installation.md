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

### **4. Verifying the Installation**
After installation, verify that HTTPX is installed correctly by checking its version:

```bash
python -c "import httpx; print(httpx.__version__)"
```

This command should output the installed version of HTTPX. If no errors occur, the installation was successful.


---

### **5. Installing from Source**
If you want to install the latest development version of HTTPX or contribute to its development, you can install it directly from the source code repository on GitHub.

#### **a. Clone the Repository**
```bash
git clone https://github.com/encode/httpx.git
cd httpx
```

#### **b. Install Dependencies**
Install the required dependencies using `pip`:
```bash
pip install -r requirements.txt
```

#### **c. Install HTTPX**
Install HTTPX in editable mode for development purposes:
```bash
pip install -e .
```

---

### **6. Troubleshooting Installation Issues**

#### **a. Missing Dependencies**
If you encounter errors related to missing dependencies (e.g., `h2` for HTTP/2 support), ensure that you've installed the appropriate extras. For example:
```bash
pip install httpx[http2]
```

#### **b. Compatibility Issues**
Ensure that your Python version meets the minimum requirement (Python 3.7+). If you're using an older version, upgrade Python or use a compatible version of HTTPX.

#### **c. Proxy Issues**
If you're behind a corporate proxy, configure `pip` to use the proxy:
```bash
pip install httpx --proxy http://user:password@proxy.example.com:port
```

#### **d. SSL Certificate Errors**
If you encounter SSL certificate errors, ensure that your system's CA certificates are up-to-date. On Linux, you may need to install the `certifi` package:
```bash
pip install certifi
```




