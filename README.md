# Web Application with Firebase Authentication
## Overview

This web application offers a comprehensive authentication system using Firebase. It supports the following authentication methods:

Sign in with email and password
Sign up with email and password
Sign in with Twitter, Google, and GitHub

## Features

- State Management: Utilizes Context API for efficient state management across the application.
- Local Storage: Stores non-sensitive user information in localStorage to persist data across page reloads.
- Routing: Implements both private and public routes. Users can access private routes only when authenticated, ensuring route protection.

## Technologies Used

Frontend:
    - HTML, Tailwindcss, Typescript
    - React with Typescript
    - Context API for state management

Backend:
    - Firebase Authentication

Storage:
    - LocalStorage for maintaining user state across sessions
