require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { mongoURL, db } = require('./config');
const errorHandler = require('./middlewares/errorHandler');
const router = require('./routes');

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

app.use('/', router);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("running on port 3000...");
})