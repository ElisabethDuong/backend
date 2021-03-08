const express = require("express");
const expressHandlebars = require("express-handlebars");

const app = express();
const port = 8000;

app.engine("handlebars", expressHandlebars());
app.set("view engine", "handlebars");
app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});

app.get("/", (req, res) => {
    res.render("home")
});

app.get("/team", (req, res) => {
    res.render("team")
});

app.get("/", (req, res) => {
    res.render("home")
});

app.get("/", (req, res) => {
    res.render("home")
});

app.get("/", (req, res) => {
    res.render("home")
});
