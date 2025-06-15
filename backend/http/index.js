import express from "express";
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
app.get("/", (req, res) => {
  res.send("hello this is the root route");
  console.log(req);
});
app.get("/register", (req, res) => {
  res.sendStatus(201);
});
app.get("/user/soum", (req, res) => {
  res.sendStatus(301);
});
