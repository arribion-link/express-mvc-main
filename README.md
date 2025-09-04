## 🛡️ Authentication Module

This module provides basic user registration and login functionality using Node.js, Express, MongoDB, and bcrypt for password hashing.

---

### 📦 Dependencies

- `express` – Web framework
- `mongoose` – MongoDB ODM
- `bcrypt` – Password hashing
- `authSchema.js` – Mongoose schema for user model

---

### 📁 File: `authController.js`

Handles user registration and login.

---

### 🔐 `POST /register`

Registers a new user.

#### ✅ Request Body

```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

#### 🔄 Logic

- Validates that all fields are provided
- Checks if the user already exists by email
- Hashes the password using bcrypt
- Saves the new user to the database

#### 📤 Response

- `200 OK` – User registered successfully
- `400 Bad Request` – Missing fields or user already exists
- `200 OK` (error case) – Registration failed (should ideally be `500`)

---

### 🔓 `POST /login`

Authenticates an existing user.

#### ✅ Request Body

```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

#### 🔄 Logic

- Validates that all fields are provided
- Checks if the user exists by email
- Compares the provided password with the hashed password
- Returns success if credentials match

#### 📤 Response

- `200 OK` – Login successful
- `400 Bad Request` – Missing fields, user not found, or incorrect password
- `500 Internal Server Error` – Login failure

---

### 🧠 Notes

- Passwords are hashed with a salt factor of 10
- Consider adding JWT authentication for session management
- Error handling could be improved with more specific status codes
