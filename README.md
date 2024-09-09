# Cripto Management

Manage your criptos

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Conclusion](#conclusion)

## Introduction



## Technologies Used

### Frontend

- **Vite**: A build tool that boasts a faster and leaner development experience for modern web projects.
- **React**: A JavaScript library for building user interfaces. It allows us to create reusable UI components.
- **TypeScript**: A superset of JavaScript, offering static type-checking and the latest ECMAScript features.
- **TailwindCSS**: A utility-first CSS framework packed with classes like `flex`, `pt-4`, `text-center` and more to style your websites without leaving your HTML.
- **CoinMarketCap API**: API providing real-time cryptocurrency market data, including prices, volume, and market capitalization.
- **Next js**: React framework with server-side rendering, static generation, and optimized routing for building efficient web apps.

### Backend

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- **TypeScript**: Brings static typing to JavaScript, ensuring a more predictable runtime behavior.
- **PostgreSQL**: A powerful, open-source object-relational database system.
- **Nodemon**: A utility that monitors for any changes in your source and automatically restarts your server.
- **Prisma**: An ORM for Node.js and TypeScript, simplifying database access with an intuitive API and type safety.

## Installation

Before you start, ensure you have `node` and `npm` installed on your machine. 

1. **Clone the repository**:
   
   ```bash
   git clone https://github.com/gabrielkrapp/full-stack-template.git
   ```

2. **Navigate to the repository**:

   ```bash
   cd full-stack-template
   ```

3. **Install the dependencies**:

   - For Frontend:
   
     ```bash
     cd frontend && npm install
     ```

   - For Backend:

     ```bash
     cd backend && npm install
     ```

## Running the Application

- **To run the frontend**:

  ```bash
  npm run start-frontend
  ```

  This starts the React application on `http://localhost:5173` (or another available port).

- **To run the backend**:

  ```bash
  npm run start-backend
  ```

  This initializes the Express server, typically on `http://localhost:3000`.

- **To run both simultaneously**:

  ```bash
  npm run start
  ```

  This will invoke `concurrently` to start both the front and back ends.

Ensure that the frontend and backend are configured to run on separate ports to avoid conflicts.

## Conclusion



---

If you find any bugs or have a feature request, please open an issue on [GitHub](https://github.com/gabrielkrapp/full-stack-template/issues).

**Made with ❤️ by [Mario Mota](https://github.com/yuribodo)**.
