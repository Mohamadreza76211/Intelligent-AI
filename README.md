# **Intelligent AI Chat Application**

Welcome to the **Intelligent AI Chat Application** — a user-friendly chat interface that leverages AI for dynamic conversations. This project consists of a React frontend (client) and an Express backend (server) to facilitate real-time AI interactions.

---

## **Table of Contents**
- **Installation**
- **Running the Application**
- **Folder Structure**
- **Environment Variables**
- **Technologies Used**
- **Features**
- **License**

---

## **Installation**
### **1. Clone the Repository:**
```bash
git clone https://github.com/YourUsername/Intelligent-AI-Chat.git
cd Intelligent-AI-Chat
```

### **2. Install Dependencies:**
- **Client:**
```bash
cd client
npm install
```
- **Server:**
```bash
cd ../server
npm install
```

### **3. Environment Variables:**
Create a `.env` file in the `server` folder and add your OpenRouter API key:
```env
OPENROUTER_API_KEY=your-api-key
```

---

## **Running the Application**
- **Client:**
```bash
cd client
npm start
```
- **Server:**
```bash
cd server
node app.js
```

Server runs on port **5010** and the client on **3000**.

---

## **Folder Structure**
```
/Intelligent-AI-Chat
│── client
│   └── src
│       └── components
│           └── ChatAgent.jsx
│── server
│   └── app.js
│   └── .env
```

---

## **Technologies Used**
- **Frontend:** React.js, Material-UI, FontAwesome
- **Backend:** Express.js, Axios
- **AI Service:** OpenRouter API

---

## **Features**
- Real-time AI chat communication.
- Dynamic message rendering.
- Error handling for failed responses.
- Styled with Material-UI for a clean interface.

---

## **License**
This project is licensed under the MIT License.

