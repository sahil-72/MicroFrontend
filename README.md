# 🚀 Microfrontend Application

This is a **Microfrontend Architecture** project that consists of multiple microfrontends within a monorepo. Each microfrontend is responsible for a separate functionality and can be deployed independently.

## 📌 **Table of Contents**

- [About the Project](#about-the-project)
- [Tools & Frameworks Used](#tools--frameworks-used)
- [Folder Structure](#folder-structure)
- [Installation & Setup](#installation--setup)
- [Running the Application](#running-the-application)
- [Contributing](#contributing)
- [License](#license)

---

## 📖 **About the Project**

This project follows a **Microfrontend Architecture**, where different parts of a frontend application are developed and deployed independently. It allows for modular development, scalability, and improved maintainability.

Each microfrontend in this monorepo serves a unique purpose:

- `chat` - Manages **chat functionality**.
- `email` - Provides an **email feature**.
- `shared` - Handles **authentication & user management**.
- `host` - Serves as the **wrapper for other standalone applications**.

---

## 🛠 **Tools & Frameworks Used**

This project is built using the following technologies:

| Tool/Framework                | Description                                  |
| ----------------------------- | -------------------------------------------- |
| **React.js**                  | Frontend library for building UI components. |
| **Webpack Module Federation** | Used for microfrontend integration.          |
| **React Router Dom**          | Handles client-side routing.                 |
| **Tailwind CSS**              | Utility-first CSS framework for styling.     |
| **Context API**               | State management for microfrontends.         |
| **Context API**               | State management for microfrontends.         |
| **React Tostify**             | Used for displaying warnings or errors.      |

---

## 📁 **Folder Structure**

# Microfrontends directory │

- ├── chat/ # Chat module │
- ├── email/ # Email module │
- ├── host/ # Authentication module │
- ├── shared/ # Shared libraries or utilities │
- ├── .gitignore # Git ignore file |
- ├── README.md |
