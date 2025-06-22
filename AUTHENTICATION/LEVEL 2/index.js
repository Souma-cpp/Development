import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";

const app = express();
const port = 3000;

const salRound = 10;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "123",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const checkResult = await db.query("SELECT * FROM users WHERE username = $1", [
      email,
    ]);

    if (checkResult.rows.length > 0) {
      res.send("Email already exists. Try logging in.");
    } else {
      bcrypt.hash(password, salRound, async (err, newpassword) => {
        if (err) {
          console.log("error occured", err);
        } else {
          const result = await db.query(
            "INSERT INTO users (username, password) VALUES ($1, $2)",
            [email, newpassword]
          );
          console.log(result);
          res.render("secrets.ejs");
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const userpassword = req.body.password;

  try {
    const result = await db.query("SELECT * FROM users WHERE username = $1", [
      email,
    ]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const hashedpassowrd = user.password;
      bcrypt.compare(userpassword, hashedpassowrd, (err, result) => {
        if (err) {
          console.log("error occured");
        } else {
          if (result == true) {
            res.render("secrets.ejs");
          } else {
            res.send("User not found");
          }
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
