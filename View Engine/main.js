import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";

const port = 3000;
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

function today(req, res, next) {
  var today = new Date();
  req.date = today.getDate();
  req.day = today.getDay();

  // or if you want the day's name:
  const dates = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  };

  req.dayName = dates[req.day];

  next();
}

app.listen(port, () => {
  console.log(`Server is turned on : ${port}`);
});

// Now you can reuse those values in your route:
app.get("/motivate", today, (req, res) => {
  if (req.day >= 1 && req.day <= 5) {
    res.render("index.ejs", { day: req.dayName });
  } else {
    res.render("no.ejs", { day: req.dayName });
  }
});
