const express = require("express");
const app = express();

app.get("/", function (req, res) {
  console.log(req.headers);
  res.send("Hello from Express Server");
});

app.listen(4000, () => {
  console.log("Server listen on http://localhost:4000");
});
