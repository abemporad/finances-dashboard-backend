const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const PORT = 3000;

// Routes
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});
