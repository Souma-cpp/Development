//const express = require("express");
import express from "express";
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`server is listening to port ${port}`);
});

app.get("/" , (req , res) => {
    console.log("request accepted");
    res.send("hello sir ");
});