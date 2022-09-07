require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { mongoURL, db } = require('./config');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const connectionURL = mongoURL + "/" + db;
console.log(`connecting to db url: ${connectionURL}...`);
mongoose.connect(connectionURL, {useNewUrlParser:true})
    .then(connection => {
        console.log('database connected');
    })
    .catch(err => {
        console.log('database not connected');
    })

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