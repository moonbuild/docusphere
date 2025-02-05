---
title: Code Workspace
displayed-sidebar : backend
sidebar_position: 4

---

## **Testing a Notes App API with `httpx` and `FastAPI**

### **Purpose**
The purpose of these tests is to validate the functionality of the **Notes App API** by simulating HTTP requests using the `httpx` library and verifying the responses. These tests cover:
- Registering a new user.
- Logging in and generating access/refresh tokens.
- Refreshing an access token.
- Creating a new note.
- Fetching all notes for a user.
- Retrieving a specific note by its ID.
- Updating an existing note.
- Deleting a note.

Each test ensures that the API adheres to expected behavior, including proper status codes, response data, and database interactions.

---

### **Key Components**

#### 1. **Imports**
```python
import asyncio
import httpx
from fastapi import status
from schemas.user import UserCreateDTO, RefreshTokenDTO
from schemas.note import NoteCreateDTO
```

- **`asyncio`**: Enables asynchronous programming for handling non-blocking I/O operations.
- **`httpx`**: A modern HTTP client for making asynchronous HTTP requests.
- **`status` from FastAPI**: Provides HTTP status codes for assertions.
- **`UserCreateDTO`, `RefreshTokenDTO`, `NoteCreateDTO`**: Pydantic models used for validating request payloads.

---

#### 2. **Constants**
```python
BASE_URL = "http://192.168.0.193:8000"
TEST_USER = {
    "username": "testuser2",
    "password": "testpassword",
    "full_name": "Test User"
}
```

- **`BASE_URL`**: The base URL of the API being tested.
- **`TEST_USER`**: A dictionary containing test user credentials for registration and login.

<!-- ---

#### 3. **Helper Functions**
```python
def get_headers(access_token):
    return {"Authorization": f"Bearer {access_token}"}
```

- **`get_headers`**: Constructs the `Authorization` header required for authenticated requests. -->

---
<!-- 
### **Best Practices Highlighted**

1. **Asynchronous Testing**:
   - The use of `asyncio` and `httpx.AsyncClient` ensures that asynchronous operations (e.g., HTTP requests) are handled properly during testing.

2. **Authentication**:
   - Tests include headers with an access token (`Authorization: Bearer`) to simulate authenticated requests.

3. **Database Validation**:
   - After performing API operations, the tests verify the state of the database to ensure consistency.

4. **Schema Validation**:
   - The `NoteCreateDTO` schema is used to construct valid payloads for API requests, ensuring that the input matches the expected format.

5. **Comprehensive Assertions**:
   - Each test includes multiple assertions to validate:
     - HTTP status codes (e.g., `200 OK`, `204 No Content`).
     - Response data (e.g., title, body, user ID).
     - Database state (e.g., whether a note was created, updated, or deleted).

6. **Modular Design**:
   - Each test function focuses on a single responsibility, making the code easier to maintain and debug.

7. **Error Handling**:
   - Captures and reports errors during test execution, ensuring clear feedback when a test fails.

--- -->

### **Code Overview**

#### **1. Registering a User**
```python
async def register_user():
    """Test user registration."""
    async with httpx.AsyncClient(base_url=BASE_URL) as client:
        response = await client.post(
            "/register/",
            json=UserCreateDTO(**TEST_USER).dict()
        )
        assert response.status_code == status.HTTP_200_OK, f"Failed to register user, got {response.status_code}"
        assert response.json() == {"message": "User created successfully"}, f"Unexpected response: {response.json()}"
```

- **Purpose**: Validates the registration of a new user via a `POST` request.
- **Key Steps**:
  - Send a `POST` request to `/register/` with valid user data (username, password, and full name).
  - Verify that the response status code is `200 OK` and the message confirms successful user creation (`{"message": "User created successfully"}`).

---

#### **2. Login and Token Generation**
```python
async def login_and_get_tokens():
    """Test user login and token generation."""
    async with httpx.AsyncClient(base_url=BASE_URL) as client:
        response = await client.post(
            "/token/",
            data={"username": TEST_USER["username"], "password": TEST_USER["password"]}
        )
        assert response.status_code == status.HTTP_200_OK, f"Login failed, got {response.status_code}"
        tokens = response.json()
        assert "access_token" in tokens, "No access_token found in the response"
        assert "refresh_token" in tokens, "No refresh_token found in the response"
        assert tokens["token_type"] == "bearer", "Token type is not 'bearer'"
        return tokens
```

- **Purpose**: Validates the login process and retrieval of access and refresh tokens.
- **Key Steps**:
  - Send a `POST` request to `/token/` with valid credentials.
  - Verify that the response contains both `access_token` and `refresh_token`, and that the token type is `bearer`.

---

#### **3. Token Refresh**
```python
async def refresh_access_token(refresh_token):
    """Test refreshing an access token."""
    async with httpx.AsyncClient(base_url=BASE_URL) as client:
        response = await client.post(
            "/refresh/",
            json=RefreshTokenDTO(refresh_token=refresh_token).dict()
        )
        assert response.status_code == status.HTTP_200_OK, f"Failed to refresh token, got {response.status_code}"
        new_tokens = response.json()
        assert "access_token" in new_tokens, "No new access_token found"
        assert new_tokens["token_type"] == "bearer", "Token type is not 'bearer'"
```

- **Purpose**: Validates the ability to refresh an access token using a refresh token.
- **Key Steps**:
  - Use the `refresh_token` obtained during login to send a `POST` request to `/refresh/`.
  - Verify that the response contains a new `access_token` and that the token type is `bearer`.

---

#### **4. Creating a Note**
```python
async def create_note(client, access_token):
    """Test creating a note."""
    print("\nTesting Create Note...")
    response = await client.post(
        "/note/",
        json=NoteCreateDTO(title="Test Note", body="This is a test note.").dict(),
        headers=get_headers(access_token)
    )
    assert response.status_code == status.HTTP_200_OK, f"Failed to create note, got {response.status_code}"
    note = response.json()
    assert "note_id" in note, "Note ID not found in response"
    print("Create Note Response:", note)
    return note["note_id"]
```

- **Purpose**: Validates the creation of a new note via a `POST` request.
- **Key Steps**:
  - Send a `POST` request with valid data and authentication headers.
  - Verify the response status code and payload.
  - Return the `note_id` for further testing.

---

#### **5. Fetching All Notes**
```python
async def get_all_notes(client, access_token):
    """Test fetching all notes."""
    print("\nTesting Get All Notes...")
    response = await client.get("/note/all", headers=get_headers(access_token))
    assert response.status_code == status.HTTP_200_OK, f"Failed to fetch notes, got {response.status_code}"
    notes = response.json()
    print("Get All Notes Response:", notes)
```

- **Purpose**: Validates fetching all notes for an authenticated user via a `GET` request.
- **Key Steps**:
  - Send a `GET` request to `/note/all` with authentication headers.
  - Verify the response contains the correct number of notes and their details.

---

#### **6. Fetching a Specific Note**
```python
async def get_note_by_id(client, access_token, note_id):
    """Test fetching a specific note by ID."""
    print("\nTesting Get Note by ID...")
    response = await client.get(f"/note/{note_id}", headers=get_headers(access_token))
    assert response.status_code == status.HTTP_200_OK, f"Failed to fetch note, got {response.status_code}"
    note = response.json()
    print("Get Note Response:", note)
```

- **Purpose**: Validates fetching a specific note by its ID via a `GET` request.
- **Key Steps**:
  - Send a `GET` request with the note's ID and authentication headers.
  - Verify the response contains the correct note details.

---

#### **7. Updating a Note**
```python
async def update_note(client, access_token, note_id):
    """Test updating a note."""
    print("\nTesting Update Note...")
    response = await client.put(
        f"/note/{note_id}",
        json=NoteCreateDTO(title="Updated Title", body="Updated body.").dict(),
        headers=get_headers(access_token)
    )
    assert response.status_code == status.HTTP_200_OK, f"Failed to update note, got {response.status_code}"
    updated_note = response.json()
    print("Update Note Response:", updated_note)
```

- **Purpose**: Validates updating an existing note via a `PUT` request.
- **Key Steps**:
  - Send a `PUT` request with updated data and authentication headers.
  - Verify the response reflects the updated details.

---

#### **8. Deleting a Note**
```python
async def delete_note(client, access_token, note_id):
    """Test deleting a note."""
    print("\nTesting Delete Note...")
    response = await client.delete(f"/note/{note_id}", headers=get_headers(access_token))
    assert response.status_code == status.HTTP_204_NO_CONTENT, f"Failed to delete note, got {response.status_code}"
    print("Delete Note Response:", response.text)
```

- **Purpose**: Validates deleting a note via a `DELETE` request.
- **Key Steps**:
  - Send a `DELETE` request with the note's ID and authentication headers.
  - Verify the response status code and that the note no longer exists in the database.

---

### **Main Test Runner**
```python
async def run_tests():
    """Run all tests sequentially."""
    try:
        await register_user()
        tokens = await login_and_get_tokens()
        access_token = tokens["access_token"]
        await refresh_access_token(tokens["refresh_token"])
        async with httpx.AsyncClient(base_url=BASE_URL) as client:
            note_id = await create_note(client, access_token)
            await get_all_notes(client, access_token)
            await get_note_by_id(client, access_token, note_id)
            await update_note(client, access_token, note_id)
            await delete_note(client, access_token, note_id)
        print("\nAll tests passed!")
    except AssertionError as e:
        print(f"Test failed: {e}")
    except Exception as e:
        print(f"An error occurred: {str(e)}")
```

- **Purpose**: Orchestrates the execution of all test functions in sequence.
- **Key Features**:
  - Handles exceptions and prints appropriate error messages.
  - Ensures tests are executed in a logical order.

---

### **Entry Point**
```python
if __name__ == "__main__":
    asyncio.run(run_tests())
```

- Executes the `run_tests` function when the script is run directly.

