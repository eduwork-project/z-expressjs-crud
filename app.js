const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.sendStatus(200);
})

// endpoint for data member
app.get("/dataMember", (req, res) => {
  
})
app.post("/dataMember", (req, res) => {
  
})
app.get("/dataMember/:id", (req, res) => {
  
})
app.patch("/dataMember/:id", (req, res) => {
  
})
app.delete("/dataMember/:id", (req, res) => {
  
})

app.listen(3000, () => {
  console.log("running on port 3000...");
})