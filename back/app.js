const translate = require("translate");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/translate", (req, res) => {
  translate(req.query.text, { to: req.query.to }).then((text) => {
    res.send(text);
  });
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
