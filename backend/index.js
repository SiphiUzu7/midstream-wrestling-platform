const express = require("express");
const app = express();
const port = 4000;

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
