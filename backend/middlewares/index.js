import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

//middleware defination
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, (req, res) => {
  console.log("server started");
});

app.get("/", (req, res) => {
  res.send("this is the root page");
  console.log(req.body);
  console.log("_____________");
});

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
  console.log(req.body);
  console.log("_____________");
});

app.post("/register", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});
