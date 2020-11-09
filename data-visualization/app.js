const express = require("express");
const app = express();
const port = 3000;

app.use("/js", express.static(__dirname + "/js"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/server/index.html");
});

app.get("/bubble-sort", function (req, res) {
  res.sendFile(__dirname + "/server/bubble-sort.html");
});

app.get("/quick-sort", function (req, res) {
  res.sendFile(__dirname + "/server/quick-sort.html");
});

app.get("/time-complexity", function (req, res) {
  res.sendFile(__dirname + "/server/time-complexity.html");
});

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
