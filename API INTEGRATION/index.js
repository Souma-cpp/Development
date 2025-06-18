import express from "express";
import axios from "axios";
import ejs from "ejs";

const port = 3000;
const app = express();

//middlewares
app.set("view engine", "ejs");
app.use(express.static("public"));

app.listen(port, () => {
  console.log("server is started");
});

app.get("/", async (req, res) => {
  var response = await axios.get("https://aot-api.vercel.app/quote");
  console.log(response.data.quote);
  console.log(response.data.author);
  var sent = {
    quote: response.data.quote,
    author: response.data.author,
  };
  res.render("index.ejs", { data : sent });
});
