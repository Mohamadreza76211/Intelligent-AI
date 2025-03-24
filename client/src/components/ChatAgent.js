import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  TextField,
  IconButton,
  Typography,
  Paper,
  Divider,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faRobot } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const ChatAgent = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages([...messages, { sender: "شما", text: input }]);
    setInput("");

    try {
      const response = await axios.post("http://localhost:5010/api/chat", {
        message: input,
      });

      setMessages([
        ...messages,
        { sender: "شما", text: input },
        { sender: "ایجنت", text: response.data.reply },
      ]);
    } catch (error) {
      console.error("خطا در دریافت پاسخ از سرور:", error);
      setMessages([...messages, { sender: "ایجنت", text: "مشکلی پیش آمده!" }]);
    }
  };

  return (
    <Paper
      elevation={3}
      style={{
        padding: "20px",
        maxWidth: "600px",
        margin: "40px auto",
        backgroundColor: "#f4f6f8",
        borderRadius: "15px",
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        style={{ textAlign: "center", marginBottom: "20px" }}
      >
        💬 Intelligent AI
      </Typography>
      <Box
        style={{
          height: "400px",
          overflowY: "auto",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          backgroundColor: "#fff",
          marginBottom: "15px",
        }}
      >
        {messages.map((msg, index) => (
          <Box
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
              justifyContent: msg.sender === "شما" ? "flex-end" : "flex-start",
            }}
          >
            <FontAwesomeIcon
              icon={msg.sender === "شما" ? faUser : faRobot}
              style={{
                marginRight: msg.sender === "شما" ? "0" : "10px",
                marginLeft: msg.sender === "شما" ? "10px" : "0",
                color: msg.sender === "شما" ? "#007bff" : "#28a745",
              }}
            />
            <Box
              style={{
                backgroundColor: msg.sender === "شما" ? "#007bff" : "#28a745",
                color: "#fff",
                padding: "8px 12px",
                borderRadius: "15px",
                maxWidth: "70%",
                wordWrap: "break-word",
                marginLeft: msg.sender === "شما" ? "10px" : "0",
                marginRight: msg.sender === "شما" ? "0" : "10px",
              }}
            >
              {msg.text}
            </Box>
          </Box>
        ))}
      </Box>
      <Divider style={{ marginBottom: "10px" }} />
      <Box style={{ display: "flex", alignItems: "center" }}>
        <TextField
          variant="outlined"
          placeholder="Please type your message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          fullWidth
          style={{ marginRight: "10px" }}
        />
        <IconButton onClick={handleSend}>
          <FontAwesomeIcon icon={faPaperPlane} />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default ChatAgent;
