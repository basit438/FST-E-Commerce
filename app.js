const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const db = require("./config/mongoose-connection");
const path = require("path");

const sellersRouter = require("./routes/sellersRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");
app.use(express.static(path.join(__dirname, "public")));
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.set("view engine", "ejs");

app.use("/sellers" , sellersRouter);
app.use("/users" , usersRouter);
app.use("/products" , productsRouter);


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
