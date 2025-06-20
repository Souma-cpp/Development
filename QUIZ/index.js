import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "<POSTGRES DATABASE>",
  password: "<POSTGRES PASSWORD>",
  port: "<POSTGRES PORT>",
});

let quiz = [
  { country: "France", capital: "Paris" },
  { country: "United Kingdom", capital: "London" },
  { country: "United States of America", capital: "Washington, D.C." },
];

let currentQuestion = {};
let totalCorrect = 0;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  totalCorrect = 0;
  await nextQuestion();
  res.render("index.ejs", { question: currentQuestion });
});

app.post("/submit", async (req, res) => {
  let answer = req.body.answer.trim();
  let isCorrect = false;

  if (currentQuestion.capital.toLowerCase() === answer.toLowerCase()) {
    totalCorrect++;
    isCorrect = true;
  } else {
    console.log("wrong answer");
  }

  await nextQuestion();
  res.render("index.ejs", {
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
  });
});

async function nextQuestion() {
  const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];
  currentQuestion = randomCountry;
}

async function startServer() {
  try {
    await db.connect(); // ✅ Only one connect
    const result = await db.query("SELECT country, capital FROM capitals");
    if (result.rows.length > 0) {
      quiz = result.rows;
    }
    app.listen(port, () => {
      console.log(`✅ Server running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error("❌ Database connection error:", error);
  }
}

startServer();
