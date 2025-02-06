---
title: Code Workspace
displayed-sidebar : backend
sidebar_position: 3

---


## **Testing a Notes App DAO with `unittest` and `AsyncMock`**

### **Purpose**
The purpose of these tests is to validate the functionality of the **Notes App Data Access Object (DAO)** by simulating database interactions using `unittest` and `AsyncMock`. These tests cover:
- Creating a new note.
- Updating an existing note.
- Deleting a note.

Each test ensures that the DAO adheres to expected behavior, including proper handling of database operations, response data, and edge cases.

---

### **Key Components**

#### 1. **Imports**
```python
import unittest
from unittest.mock import AsyncMock, patch
from sqlalchemy.orm import Session
from models.model import Note
from dao.note_dao import NoteDAO
```

- **`unittest`**: A built-in Python testing framework for writing and running tests.
- **`unittest.mock.AsyncMock`**: Tools for mocking asynchronous and synchronous methods, respectively.
- **`sqlalchemy.orm.Session`**: Represents a database session for interacting with the database.
- **`Note`**: The database model representing a note.
- **`NoteDAO`**: The Data Access Object (DAO) responsible for interacting with the database.

---

#### 2. **Constants**
```python
TEST_TITLE = "Test Note"
TEST_BODY = "This is a test note."
TEST_USER_ID = 1
TEST_NOTE_ID = 123
```

- **`TEST_TITLE` and `TEST_BODY`**: Sample data for creating or updating a note.
- **`TEST_USER_ID`**: The ID of the user associated with the note.
- **`TEST_NOTE_ID`**: The ID of the note being tested.

---

#### 3. **Setup**
```python
class TestNoteDAO(unittest.IsolatedAsyncioTestCase):
    def setUp(self):
        """Set up a mock session and NoteDAO instance for testing."""
        self.mock_db = AsyncMock(spec=Session)
        self.note_dao = NoteDAO(db=self.mock_db)

```

- **`setUp`**: Initializes a mock database session (`self.mock_db`) and a `NoteDAO` instance (`self.note_dao`) for use in all test cases.

---



### **Code Overview**

#### **1. Creating a Note**
```python
    async def test_create_note_success(self):
        """Test creating a note successfully."""
        mock_note = AsyncMock()
        mock_note.note_id = TEST_NOTE_ID
        mock_note.title = TEST_TITLE
        mock_note.body = TEST_BODY
        mock_note.user_id = TEST_USER_ID

        self.mock_db.add.return_value = None
        self.mock_db.commit = AsyncMock()
        self.mock_db.refresh = AsyncMock()

        result = await self.note_dao.create_note(TEST_TITLE, TEST_BODY, TEST_USER_ID)

        self.mock_db.add.assert_called_once()
        self.mock_db.commit.assert_called_once()
        self.mock_db.refresh.assert_called_once()
        self.assertEqual(result.title, TEST_TITLE)
        self.assertEqual(result.body, TEST_BODY)
        self.assertEqual(result.user_id, TEST_USER_ID)
```

- **Purpose**: Validates the creation of a new note via the `create_note` method.
- **Key Steps**:
  - Mock the database session's `add`, `commit`, and `refresh` methods.
  - Call the `create_note` method with valid data.
  - Verify that the database methods were called as expected.
  - Validate the returned note's attributes.

---

#### **2. Updating a Note**
```python
    @patch("dao.note_dao.NoteDAO.get_note_by_id")
    async def test_update_note_success(self, mock_get_note_by_id):
        """Test updating a note successfully."""
        mock_note = Note(note_id=TEST_NOTE_ID, title=TEST_TITLE, body=TEST_BODY, user_id=TEST_USER_ID)
        mock_get_note_by_id.return_value = mock_note

        self.mock_db.commit = AsyncMock()
        self.mock_db.refresh = AsyncMock()

        result = await self.note_dao.update_note(TEST_NOTE_ID, "Updated Title", "Updated Body")

        mock_get_note_by_id.assert_called_once_with(TEST_NOTE_ID)
        self.mock_db.commit.assert_called_once()
        self.mock_db.refresh.assert_called_once()
        self.assertEqual(result.title, "Updated Title")
        self.assertEqual(result.body, "Updated Body")
```

- **Purpose**: Validates updating an existing note via the `update_note` method.
- **Key Steps**:
  - Mock the retrieval of the note to be updated.
  - Call the `update_note` method with updated data.
  - Verify that the database methods were called as expected.
  - Validate the updated note's attributes.

---

#### **3. Deleting a Note**
```python
    @patch("dao.note_dao.NoteDAO.get_note_by_id")
    async def test_delete_note_success(self, mock_get_note_by_id):
        """Test deleting a note successfully."""
        mock_note = Note(note_id=TEST_NOTE_ID, title=TEST_TITLE, body=TEST_BODY, user_id=TEST_USER_ID)
        mock_get_note_by_id.return_value = mock_note

        self.mock_db.delete = AsyncMock()
        self.mock_db.commit = AsyncMock()

        result = await self.note_dao.delete_note(TEST_NOTE_ID)

        mock_get_note_by_id.assert_called_once_with(TEST_NOTE_ID)
        self.mock_db.delete.assert_called_once_with(mock_note)
        self.mock_db.commit.assert_called_once()
        self.assertEqual(result.note_id, TEST_NOTE_ID)
```

- **Purpose**: Validates deleting a note via the `delete_note` method.
- **Key Steps**:
  - Mock the retrieval of the note to be deleted.
  - Call the `delete_note` method with the note's ID.
  - Verify that the database methods were called as expected.
  - Validate the deleted note's attributes.

---

### **Main Test Runner**
```python
if __name__ == "__main__":
    unittest.main(verbosity=2)
```

- Executes all test cases when the script is run directly.

---
