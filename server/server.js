const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const modelUrl = "https://openrouter.ai/api/v1/chat/completions";

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const response = await axios.post(
      modelUrl,
      {
        model: "deepseek/deepseek-r1:free", // مدل مورد نظر
        messages: [
          {
            role: "user",
            content: message,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://your-domain.com", // دامنه‌ی خودت رو اینجا بزار
          "X-Title": "Your App Name", // نام اپلیکیشن خودت رو اینجا بزار
        },
        timeout: 30000, // تایم اوت ۳۰ ثانیه‌ای
      }
    );

    if (
      response.data &&
      response.data.choices &&
      response.data.choices[0].message
    ) {
      res.json({ reply: response.data.choices[0].message.content });
    } else {
      res.status(500).json({ error: "پاسخی دریافت نشد!" });
    }
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      console.error("خطا از OpenRouter:", error.response.data.error);
      res.status(500).json({ error: error.response.data.error });
    } else {
      console.error("خطا در ارتباط با OpenRouter:", error);
      res.status(500).json({ error: "مشکلی پیش آمده!" });
    }
  }
});

const PORT = 5010;
app.listen(PORT, () => {
  console.log(`✅ سرور در حال اجرا روی پورت ${PORT}`);
});
