const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const port = 8000;

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});

const translations = {
    fr: { 
        message: "Bonjour ! Ça va ?", 
        flag: "http://restcountries.eu/data/fra.svg"
    },
    en: { 
        message: "Hello! How are you?", 
        flag: "http://restcountries.eu/data/gbr.svg"
    },
    es: { 
        message: "Hola! Como estas?", 
        flag: "http://restcountries.eu/data/esp.svg"
    },
    ge: { 
        message: "Guten Tag ! Wie bist Du ?", 
        flag: "http://restcountries.eu/data/deu.svg"
    }
};

app.get("/:lang?", (req, res) => {
    res.render("home", {
        lang: translations[req.params.lang ? req.params.lang : "fr"],
        languages: Object.keys(translations)
    })

    // if (req.params.lang) {
    //     res.render("home", { lang: translations[req.params.lang] })
    // } else {
    //     res.render("home", { lang: translations["fr"] })
    // }
});