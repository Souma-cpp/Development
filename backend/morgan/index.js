import express from "express";
const app = express();
const port = 3000;
import morgan from "morgan";

// app.use(morgan("short"));
app.use((req, res, next) => {
  console.log(`The request was : ${req.method}`);
  next();
});

app.listen(port, function f() {
  console.log("server started");
});

app.get("/", (req, res) => {
  console.log("root route hit");
  res.send(req.body.json);
});

app.get("/hello", (req, res) => {
  console.log("hello route hit");
});
