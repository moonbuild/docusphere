---
title: Code Syntax
displayed-sidebar : backend
sidebar_position: 2

---
# HTTPX: Detailed Syntax Guide

**HTTPX** is a modern HTTP client for Python that supports both synchronous and asynchronous workflows. Below is a detailed guide to its syntax, covering common use cases and advanced features.

---

## 1. **Basic Requests**

### Synchronous Requests
HTTPX provides a simple interface for making synchronous HTTP requests. The syntax closely resembles the `requests` library, making it easy to adopt.

```python
import httpx

# GET Request
response = httpx.get("https://api.example.com/data")
print(response.status_code)  # e.g., 200
print(response.text)         # Response body as text
print(response.json())       # Parse response body as JSON

# POST Request
response = httpx.post("https://api.example.com/data", json={"key": "value"})
print(response.status_code)
print(response.json())
```

### Asynchronous Requests
For asynchronous workflows, HTTPX uses `AsyncClient`. Use `async`/`await` to handle non-blocking I/O operations.

```python
import asyncio
import httpx

async def fetch_data():
    async with httpx.AsyncClient() as client:
        # GET Request
        response = await client.get("https://api.example.com/data")
        print(response.status_code)
        print(response.json())

        # POST Request
        response = await client.post("https://api.example.com/data", json={"key": "value"})
        print(response.status_code)
        print(response.json())

# Run the async function
asyncio.run(fetch_data())
```

---

## 2. **Session Management**

HTTPX allows you to reuse configurations (e.g., base URL, headers, authentication) across multiple requests using a session.

### Synchronous Session
Use `httpx.Client` to create a session.

```python
with httpx.Client(base_url="https://api.example.com", headers={"Authorization": "Bearer token"}) as client:
    # GET Request
    response = client.get("/endpoint1")
    print(response.json())

    # POST Request
    response = client.post("/endpoint2", json={"key": "value"})
    print(response.json())
```

### Asynchronous Session
Use `httpx.AsyncClient` for asynchronous sessions.

```python
async def use_session():
    async with httpx.AsyncClient(base_url="https://api.example.com", headers={"Authorization": "Bearer token"}) as client:
        # GET Request
        response = await client.get("/endpoint1")
        print(response.json())

        # POST Request
        response = await client.post("/endpoint2", json={"key": "value"})
        print(response.json())

asyncio.run(use_session())
```

---

## 3. **Advanced Request Options**

### Query Parameters
Pass query parameters using the `params` argument.

```python
response = httpx.get("https://api.example.com/search", params={"q": "python", "page": 2})
print(response.url)  # https://api.example.com/search?q=python&page=2
```

### Custom Headers
Set custom headers using the `headers` argument.

```python
headers = {"User-Agent": "MyApp/1.0", "Authorization": "Bearer token"}
response = httpx.get("https://api.example.com/data", headers=headers)
print(response.text)
```

### File Uploads
Upload files using the `files` argument.

```python
files = {"file": ("example.txt", open("example.txt", "rb"), "text/plain")}
response = httpx.post("https://api.example.com/upload", files=files)
print(response.json())
```

### Timeout Configuration
Set a timeout for requests to avoid hanging indefinitely.

```python
try:
    response = httpx.get("https://api.example.com/data", timeout=5.0)  # Timeout after 5 seconds
    print(response.text)
except httpx.TimeoutException:
    print("Request timed out")
```

---

## 4. **Streaming Responses**

For large responses, use streaming to process data incrementally.

### Synchronous Streaming
```python
with httpx.stream("GET", "https://api.example.com/large-file") as response:
    for chunk in response.iter_bytes():
        process_chunk(chunk)
```

### Asynchronous Streaming
```python
async def stream_data():
    async with httpx.AsyncClient() as client:
        async with client.stream("GET", "https://api.example.com/large-file") as response:
            async for chunk in response.aiter_bytes():
                process_chunk(chunk)

asyncio.run(stream_data())
```

---

## 5. **Error Handling**

HTTPX raises exceptions for HTTP errors and network issues. Use `try`/`except` blocks to handle them gracefully.

```python
try:
    response = httpx.get("https://api.example.com/data")
    response.raise_for_status()  # Raises an exception for 4xx/5xx status codes
    print(response.json())
except httpx.HTTPStatusError as e:
    print(f"HTTP error occurred: {e.response.status_code}")
except httpx.RequestError as e:
    print(f"Network error occurred: {e}")
```

---

## 6. **Mocking with Respx**

To mock API responses during testing, use the `respx` library.

```python
import respx
import httpx

@respx.mock
def test_mocked_api():
    # Mock a GET request
    respx.get("https://api.example.com/data").mock(return_value=httpx.Response(200, json={"key": "value"}))

    # Make the request
    response = httpx.get("https://api.example.com/data")
    assert response.status_code == 200
    assert response.json() == {"key": "value"}
```

---

## 7. **Authentication**

HTTPX supports various authentication mechanisms.

### Basic Authentication
```python
auth = httpx.BasicAuth(username="user", password="pass")
response = httpx.get("https://api.example.com/data", auth=auth)
print(response.text)
```

### Bearer Token Authentication
```python
headers = {"Authorization": "Bearer token"}
response = httpx.get("https://api.example.com/data", headers=headers)
print(response.text)
```

### Custom Authentication
Implement custom authentication by subclassing `httpx.Auth`.

```python
class CustomAuth(httpx.Auth):
    def __init__(self, token):
        self.token = token

    def auth_flow(self, request):
        request.headers["Authorization"] = f"Bearer {self.token}"
        yield request

response = httpx.get("https://api.example.com/data", auth=CustomAuth("my-token"))
print(response.text)
```

---

## 8. **Timeouts and Retries**

### Configure Timeouts
Set timeouts globally or per request.

```python
# Global timeout
client = httpx.Client(timeout=10.0)

# Per-request timeout
response = httpx.get("https://api.example.com/data", timeout=5.0)
```

### Implement Retries
Use libraries like `tenacity` for retry logic.

```python
from tenacity import retry, stop_after_attempt, wait_fixed
import httpx

@retry(stop=stop_after_attempt(3), wait=wait_fixed(2))
def fetch_with_retries():
    response = httpx.get("https://api.example.com/data")
    response.raise_for_status()
    return response.json()

data = fetch_with_retries()
print(data)
```

---

## 9. **Custom Transports**

For advanced use cases, customize the transport layer.

```python
from httpx import AsyncClient, ASGITransport
from myapp.asgi import app  # Your ASGI application

async def test_asgi_app():
    async with AsyncClient(transport=ASGITransport(app=app)) as client:
        response = await client.get("http://testserver/")
        print(response.text)

asyncio.run(test_asgi_app())
```

---

## Conclusion

This guide covers the essential syntax and features of **HTTPX**, from basic requests to advanced configurations like streaming, mocking, and custom transports. With its support for both synchronous and asynchronous workflows, HTTPX is a versatile tool for interacting with HTTP services in Python.

For more details, refer to the official [HTTPX documentation](https://www.python-httpx.org/).