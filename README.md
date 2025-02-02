# 🚀 Microfrontend Application

This is a **Microfrontend Architecture** project that consists of multiple microfrontends within a monorepo. Each microfrontend is responsible for a separate functionality and can be deployed independently.

## 📌 **Table of Contents**

- [About the Project](#about-the-project)
- [Tools & Frameworks Used](#tools-and-frameworks-used)
- [Folder Structure](#folder-structure)
- [Installation & Setup](#installation-and-setup-guide)
- [Running the Application](#running-the-application)
- [Key Architectural Decisions and Trade-offs](#Key-Architectural-Decisions-and-Trade-offs)

---

## 📖 **About the Project**

This project follows a **Microfrontend Architecture**, where different parts of a frontend application are developed and deployed independently. It allows for modular development, scalability, and improved maintainability.

Each microfrontend in this monorepo serves a unique purpose:

- `chat` - Manages **chat functionality**.
- `email` - Manages **email feature**.
- `shared` - Provide the **reusable components**.
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
| **React Tostify**             | Used for displaying warnings or errors.      |

---

## 📁 **Folder Structure**

### Microfrontend directory 

- ├── chat/         # Chat module
- ├── email/        # Email module
- ├── host/         # Wrapper module
- ├── shared/       # Shared libraries or utilities
- ├── .gitignore    # Git ignore file
- ├── README.md     # Project Documentation



---


## ⚡ **Installation & Setup Guide**

### 1️⃣ Clone the Repository
To begin, clone the repository to your local machine:
```sh
git clone https://github.com/sahil-72/MicroFrontend.git
cd <Your-Directory>
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

### Run all the microfrontends at same time to avoid errors.
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





## **Key Architectural Decisions and Trade-offs**

### 1. Micro-Frontend Framework: `Module Federation`

We used **Webpack Module Federation** to create independent micro-apps (like **Chat**, **Email**, **Shared**, and **Host**) that can be developed and deployed separately but share common resources.

**Why Module Federation?**
- **Independent deployment** allows updates without affecting others.
- **Dynamic loading** improves performance by loading only what’s needed.
- **Shared libraries** reduce duplication (e.g., React).

**Trade-offs:**
- **Complex setup** for managing shared dependencies.
- **Versioning issues** may occur with libraries like React, which we solved by syncing versions.

### 2. Design System with `Tailwind CSS`

We used **Tailwind CSS** for a consistent design across all apps. The **Host** app defines the styles, and the other apps use them.

**Why Tailwind CSS?**
- **Quick and consistent styling** with utility classes.
- **Customizable** to suit the app’s needs.

**Trade-offs:**
- The **HTML can be verbose** because of utility classes.
- **Learning curve** for those unfamiliar with it, but it speeds up development once learned.

### 3. State Management in Chat: `useContext`

We use **useContext** in the **Chat** app to manage and share chat-related state with the **Host** app.

**Why useContext?**
- It’s a **simple** way to manage shared state without extra libraries.
- Keeps the chat state **modular** and easy to handle.

**Trade-offs:**
- For larger apps, **useContext** might not scale well, so a more advanced state management tool could be needed.
- **Re-renders** can affect performance, but we kept state minimal to reduce this.

### 4. Scalability and Modularity

Each micro-app is independent, making it easy to **add new features** or apps in the future without disrupting others.

**Why Independent Apps?**
- **Scalable** by adding new apps without changing existing ones.
- **Independent deployment** allows apps to be updated individually.

**Trade-offs:**
- **Complex integration** setup at the start.
- **Managing shared resources** (like design) can be tricky as more apps are added.

---

### Conclusion

This architecture focuses on **scalability** and **modularity**, making it easy to add new features. **Module Federation** and **Tailwind CSS** ensure performance and consistency, while **useContext** is good for simple state management in the **Chat** app. This approach allows for growth and easy maintenance as the project expands.
