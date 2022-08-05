const connectToMongo = require("./db");
const express = require("express");
let cors = require('cors');
const bodyParser = require("body-parser");
require('dotenv').config()



connectToMongo();
const app = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());




// app.use('/shoes',require('./routes/shoes'));
app.use("/shoe", require('./routes/shoes'));
app.use('/api/auth', require('./routes/users'))

app.use('/api', require('./routes/cart'))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});