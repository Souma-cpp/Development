import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";
import axios from "axios";
const port = 3000;
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("root.ejs");
});

app.get("/fun", async (req, res) => {
  const response = await axios.get("https://bored-api.appbrewery.com/random");
  const data = {
    activity: response.data.activity,
    participants: response.data.participants,
    type: response.data.type,
  };
  res.render("index.ejs", { data: data });
});

app.listen(port, () => {
  console.log("server started");
});
