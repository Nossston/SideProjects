/********************* IMPORT PACKAGES *********************/

const express = require("express");
const _handlebars = require("handlebars");
const exphbs = require("express-handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

//This loads all our environment variables from the keys.env
require("dotenv").config();

/********************* Routes Set *********************/
const userRoutes = require("./routes/User");
const generalRoutes = require("./routes/General");
const adminRoutes = require("./routes/Admin");
const clientRoutes = require("./routes/Client");
const appRoutes = require("./routes/App");
const errRoutes = require("./routes/Error");

/********************* CREATE OBJECT *********************/

let app = express();
app.use(methodOverride("_method"));

/********************* REQUESTS *********************/

app.engine(
  "handlebars",
  exphbs({
    extname: "handlebars",
    helpers: {
      ifEquals: function (arg1, arg2, options) {
        if (arg1) {
          arg1 = arg1.toString();
        }
        if (arg2) {
          arg2 = arg2.toString();
        }
        return arg1 == arg2 ? options.fn(this) : options.inverse(this);
      },
    },
    handlebars: allowInsecurePrototypeAccess(_handlebars),
  })
);

exphbs.regi;

app.set("view engine", "handlebars");

app.use(express.static("public"));

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride("_method"));

/********************* SET ROUTES *********************/

app.use("/", generalRoutes);
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);
app.use("/apps", appRoutes);
app.use("/clients", clientRoutes);
app.use("*", errRoutes);

/*********** MONGOOSE ***********/

// Main connection
// const MONGO_DB_URL = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@crystal.zovlp.mongodb.net/${process.env.MONGO_DB_DATABASE_NAME}?retryWrites=true&w=majority`;
// Noston conection
const MONGO_DB_URL = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.tamti.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
// Yunpeng
// const MONGO_DB_URL = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.dzk76.mongodb.net/Crystal?retryWrites=true&w=majority`;

mongoose
  .connect(MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`Database is connected`);
  })
  .catch(err => {
    console.log(`Something went wrong : ${err}`);
  });

/********************* LISTEN *********************/

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Web Server is Connected to Port: ${PORT}`);
});
