const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDb = require("./config/config");

// dotenv config
dotenv.config();

// Check if MONGO_URI is loaded correctly
console.log(`MongoDB URI: ${process.env.MONGO_URI}`); // This should print the URI if loaded correctly

// db config
connectDb();

// rest object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

// routes
app.get('/', (req, res) => {
  res.send('<h1>POS BACKEND</h1>');
});

// port
const PORT = process.env.PORT || 8080;

// listen
app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`.bgCyan);
});
