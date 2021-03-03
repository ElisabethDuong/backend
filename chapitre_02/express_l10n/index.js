const express = require("express");
const exphbs = require("express-handlebars");
const port = 8000;

const app = express();
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});

app.get("/", (req, res) => {
    res.render("home")
});