const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/objects", (req, res) => {
  res.status(200).json([
    {
      id: 1,
      username: "profound",
    },
    {
      id: 2,
      username: "windamas",
    },
    {
      id: 3,
      username: "dynamo-pro",
    },
  ]);
});

app.listen(8001, console.log("Server Running On Port 8001"));
