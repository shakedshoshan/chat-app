# Live Chat Web App

This repository contains the source code for a live chat web application built with Node.js, React and MongoDB. It provides real-time communication capabilities for users within a web interface.

![image](https://github.com/user-attachments/assets/4c07ff8c-b433-4f17-a4e0-d1328f919cd8)

![image](https://github.com/user-attachments/assets/2694ff4d-f801-461a-a570-76ffda9d3c25)

![image](https://github.com/user-attachments/assets/a4ce4374-4862-47e4-8ef8-9d83a2d6cb18)


## Technologies

Backend:
Node.js: JavaScript runtime environment for server-side execution.
Express: Web framework for building robust APIs.
Mongoose: Object Data Modeling (ODM) library for MongoDB interaction.
Socket.IO: Enables real-time, bidirectional communication between the server and clients.
Other dependencies: bcryptjs, cookie-parser, dotenv, jsonwebtoken
Frontend:
React: JavaScript library for building user interfaces.
React Router DOM: Routing library for navigation within the React application.
Socket.IO Client: Enables real-time communication from the client (browser) to the server.
Zustand: State management library for managing application state.
Vite: Modern build tool for rapid development and efficient bundling.
Tailwind CSS: Utility-first CSS framework for rapid styling.
DaisyUI: Comprehensive UI component library built on Tailwind CSS.
Other dependencies: react-hot-toast, react-icons, eslint, autoprefixer, postcss
## Getting Started

Prerequisites:

Node.js and npm installed on your system.
A code editor or IDE of your choice.
Clone the repository

Bash
git clone https://github.com/<your-username>/live-chat-app.git


Install dependencies

Navigate to the project root directory and run:

Bash
npm install

also in /frontend 


Start the development server

Bash
npm run dev:backend
npm run dev:frontend


## Build for Production

To create an optimized production build:

Bash
npm run build 

npm run start
