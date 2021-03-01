// 00 - Server

const express = require("express");

const app = express();
const port = 8000;

app.listen(port, () => {
    console.log("Server started on port: " + port);
});

app.get("/", (req, res) => {
    res.send("Authors API");
});


// 01 - Authors + // 03 - Error


const authors = ["Lawrence Nowell, UK", "William Shakespeare, UK", "Charles Dickens, US", "Oscar Wilde, UK"];

app.get("/authors/:id", (req, res) => {
    // console.log("ID:", req.params.id)
    if (authors[req.params.id] === undefined) {
        res.send(`The author with the ID ${req.params.id} does not exist`)
    } else {
        res.send(authors[req.params.id - 1])
    }
});

// app.get("*", (req, res) => {
//     res.send("Error")
// });


// 02 - Books

const books = ["Beowulf", "Hamlet, Othello, Romeo and Juliet, MacBeth", "Oliver Twist, A Christmas Carol", "The Picture of Dorian Gray, The Importance of Being Earnest"];

app.get("/authors/:id/books", (req, res) => {
    if (books[req.params.id] === undefined) {
        res.send(`The author with the ID ${req.params.id} does not exist`)
    } else {
        res.send(books[req.params.id - 1])
    }
});


// 04 - JSON 

const list = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: [
            "Beowulf"
        ]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: [
            "Hamlet",
            "Othello",
            "Romeo and Juliet",
            "MacBeth"
        ]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: [
            "Oliver Twist",
            "A Christmas Carol"
        ]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: [
            "The Picture of Dorian Gray",
            "The Importance of Being Earnest"
        ]
    }
];

app.get("/json/authors/:id", (req, res) => {
    const newAuthors = {
        name: list[req.params.id - 1].name,
        nationality: list[req.params.id - 1].nationality
    }
    res.json(newAuthors);
});

app.get("/json/authors/:id/books", (req, res) => {
    const newBooks = {
        books: list[req.params.id - 1].books,
    }
    res.json(newBooks);
});