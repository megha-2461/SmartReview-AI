const express = require("express");
const aiRoutes = require("./routes/ai.routes");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "*",  
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json()); // ✅ Parse JSON body

app.get("/", (req, res) => {
  res.send("Hello Megha!");
});

app.use("/ai", aiRoutes);

module.exports = app;
