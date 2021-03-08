const express = require("express");
const expressHandlebars = require("express-handlebars");

const app = express();
const port = 8000;

app.engine("handlebars", expressHandlebars());
app.set("view engine", "handlebars");
app.use(express.static("public"));

let userConnected = false;

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});

app.get("/", (req, res) => {
    res.render("login", {passwordTooShort: false})
});

app.get("/home", (req, res) => {
    if (userConnected) {
        res.render("home");
    } else {
        res.redirect("/")
    }
});

app.use(express.urlencoded({ extended: true }))
app.post("/login", (req, res) => {
    console.log(req.body);
    userConnected = true;
    res.redirect("/home")
});