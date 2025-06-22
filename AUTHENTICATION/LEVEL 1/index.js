import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: 5432,
});

db.connect();

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
  const username = req.body.username;
  const password = req.body.password;
  //console.log(username, " and password ", password);
  try {
    const check_exists = await db.query(
      "SELECT * FROM users WHERE username=$1",
      [username]
    );
    if (check_exists.rows.length > 0) {
      res.send("user already exists , try to log in");
    } else {
      const user_data = await db.query(
        "INSERT INTO users (username , password) VALUES ($1 , $2)",
        [username, password]
      );
      res.render("secrets.ejs");
    }
  } catch (err) {
    res.sendStatus(400);
  }
});

app.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  //console.log(username, " and password ", password);
  try {
    const check_exists = await db.query(
      "SELECT * FROM users WHERE username=$1",
      [username]
    );
    if (check_exists.rows.length > 0) {
      const user = check_exists.rows[0];
      const stored_password = await user.password;
      if (password === stored_password) {
        res.render("secrets.ejs");
      } else {
        res.redirect("/");
      }
    } else {
      res.redirect("/register");
    }
  } catch (err) {
    res.sendStatus(400);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
