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

app.get("*", (req, res) => {
    res.send("Error")
});


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

const json = [
    {
        id: 1,
        name: "Lawrence Nowell",
        nationality: "UK",
        books: [
            "Beowulf"
        ]
    },
    {
        id: 2,
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
        id: 3,
        name: "Charles Dickens",
        nationality: "US",
        books: [
            "Oliver Twist",
            "A Christmas Carol"
        ]
    },
    {
        id: 4,
        name: "Oscar Wilde",
        nationality: "UK",
        books: [
            "The Picture of Dorian Gray",
            "The Importance of Being Earnest"
        ]
    }
];

