---
title: Code Syntax
displayed-sidebar : backend
sidebar_position: 3

---
```python
import unittest
from fastapi.testclient import TestClient
from main import app

class TestUserAPI(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.client = TestClient(app)

    def test_create_user(self):
        response = self.client.post("/register/", json={
            "username": "testuser",
            "password": "testpassword",
            "full_name": "Test User"
        })
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {"message": "User created successfully"})

if __name__ == "__main__":
    unittest.main()
```