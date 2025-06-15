import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var password = "pointBreak";
var verified = false;

//middleware defination
app.use(bodyParser.urlencoded({ extended: true }));
function authenticate(req, res, next) {
  var p = req.body["password"];
  if (p === password) {
    verified = true;
  } else {
    verified = false;
  }
  next();
}

app.listen(port, () => {
  console.log("server is running");
});

app.get("/check", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", authenticate, (req, res) => {
  if (verified == true) {
    res.sendFile(__dirname + "/public/secrets.html");
    console.log("welcome agent");
  } else {
    res.sendFile(__dirname + "/public/error.html");
    console.log("You're not the agent , detected !!");
  }
});
