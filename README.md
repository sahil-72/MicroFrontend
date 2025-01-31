# 🚀 Microfrontend Application

This is a **Microfrontend Architecture** project that consists of multiple microfrontends within a monorepo. Each microfrontend is responsible for a separate functionality and can be deployed independently.

## 📌 **Table of Contents**

- [About the Project](#about-the-project)
- [Tools & Frameworks Used](#tools-and-frameworks-used)
- [Folder Structure](#folder-structure)
- [Installation & Setup](#installation-and-setup-guide)
- [Running the Application](#running-the-application)

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

### Microfrontend directory 

- ├── chat/         # Chat module
- ├── email/        # Email module
- ├── host/         # Authentication module
- ├── shared/       # Shared libraries or utilities
- ├── .gitignore    # Git ignore file
- ├── README.md     # Project Documentation



---


## ⚡ **Installation & Setup Guide**

### 1️⃣ Clone the Repository
To begin, clone the repository to your local machine:
```sh
git clone https://github.com/sahil-72/MicroFrontend.git
cd MicroFrontend
```

### 2️⃣ Install Dependencies

Each microfrontend has its own dependencies, which must be installed individually.
```sh
Using Yarn Workspaces:

Navigate to the microfrontend directory (e.g., email), then install dependencies:

cd email  # Navigate to the 'email' microfrontend
yarn install

OR Using npm:

Alternatively, you can use npm to install dependencies:

cd email  # Navigate to the 'email' microfrontend
npm install
```

---


## 🚀 **Running the Application**

Each microfrontend must be started individually.
To Start a Specific Microfrontend
```sh
Using Yarn:

Navigate to the desired microfrontend directory (e.g., chat), then start the microfrontend:

cd chat  # Navigate to the 'chat' microfrontend
yarn start

OR Using npm:

Alternatively, you can use npm to start the microfrontend:

cd chat  # Navigate to the 'chat' microfrontend
npm start
```