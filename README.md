# AI Smart Email Assistant - Chrome Extension

**AI Smart Email Assistant** is a Chrome extension that integrates directly into Gmail and helps users generate AI-powered email replies with a single click. It enhances productivity by crafting professional responses using backend AI models.

---

## 🚀 Features

- Adds a custom "AI Reply" button in Gmail's reply interface
- Sends the current email content to an AI backend for smart response generation
- Instantly injects the AI-generated reply into the Gmail compose box
- Works seamlessly with Gmail UI using content scripts and DOM manipulation

---

## Tech Stack

- **Frontend**: JavaScript, Chrome Extensions (Manifest v3)
- **Backend (Required)**: Java or any AI-based REST API 
- **Host Permissions**: Gmail (`https://mail.google.com/*`), Backend (`http://localhost:8080/*`)

## 🧠 How It Works

1. Open Gmail and view an email.
2. Click the **AI Reply** button added by the extension.
3. The extension sends the email body to the AI backend.
4. Receives and inserts the smart reply into the compose box.
5. You can review/edit the reply before sending.
