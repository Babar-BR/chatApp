# 💬 Chat App

A modern, responsive chat interface built with **React** and **Vite**. Type a message, send it, and it appears as a chat bubble from a random user with a colorful letter avatar. Every message can be liked.

## ✨ Features

- Send messages with the **Send** button
- Each message is posted by a random user (Alan, Bob, Carol, Dean or Elin)
- Circular avatar showing the first letter of each username
- 👍 Like button with a live like counter on every message
- Empty messages are ignored
- Dark glassmorphism design with a custom background image
- Smooth hover and focus animations
- Responsive layout for desktop and mobile

## 🛠️ Tech Stack

- React (functional components and hooks, `useState`)
- Vite
- Plain CSS (CSS variables, flexbox, backdrop blur)

## 📁 Project Structure

```
chat-app/
├── src/
│   ├── assets/               # Background image and other images
│   ├── components/
│   │   ├── ChatInput/        # Message input and Send button
│   │   ├── ChatList/         # Scrollable list of messages
│   │   └── ChatMessage/      # Single message, avatar and like button
│   ├── App.jsx               # Main component, holds the messages state
│   ├── App.css
│   ├── index.css             # Global styles and theme variables
│   └── main.jsx              # App entry point
├── package.json
└── README.md
```

## 🚀 Getting Started

1. Clone the repository

   ```bash
   git clone https://github.com/Babar-BR/chatApp.git
   cd chatApp
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the development server

   ```bash
   npm run dev
   ```

4. Open the local URL shown in the terminal (usually `http://localhost:5173`).

## 🧠 How It Works

- `App.jsx` stores all messages in state and defines `addMessage` and `likeMessage`.
- `ChatInput` collects the text and calls `addMessage`.
- `ChatList` loops over the messages and renders a `ChatMessage` for each one.
- `ChatMessage` shows the avatar, username, text and the like button.

## 📸 Screenshot

Add a screenshot of the app here:

```
![Chat App Screenshot](./screenshot.png)
```

## 👨‍💻 Author

**Babar**

- GitHub: [Babar-BR](https://github.com/Babar-BR)
- LinkedIn: [sk-babar](https://www.linkedin.com/in/sk-babar-44145427b/)

⭐ If you like this project, give it a star!
