const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.sendStatus(200);
})

// endpoint for data member
// findall
app.get("/dataMember", (req, res) => {
  const list = [];
  res.send(list);
})
// create
app.post("/dataMember", (req, res) => {
  res.sendStatus(200);
})
// find one
app.get("/dataMember/:id", (req, res) => {
  const id = req.params.id;
  res.send(id);
})
// update one
app.patch("/dataMember/:id", (req, res) => {
  const id = req.params.id;
  res.send(id);
})
// delete one
app.delete("/dataMember/:id", (req, res) => {
  const id = req.params.id;
  res.send(id);
})

app.listen(3000, () => {
  console.log("running on port 3000...");
})