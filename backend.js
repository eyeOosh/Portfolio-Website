const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve files from the root directory
app.use(express.static(__dirname));

// Optional: API route
app.get("/api/projects", (req, res) => {
  res.json([
    { id: 1, name: "Portfolio Site" },
    { id: 2, name: "Blog" }
  ]);
});

// Optional: make "/" explicitly serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
