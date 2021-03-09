const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://localhost:27017/garage",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("Database Connected");
    }
);

const carSchema = new mongoose.Schema({
    // _id: ID,
    brand: String,
    model: String,
    year: Number,
    created: {
        type: Date,
        default: new Date()
        // soit on attribue une date, soit ça donne une date par défaut
    }
});

const carModel = mongoose.model("cars", carSchema);


/*

// CREATE

// on met des accolades vides {} en paramètre de deleteMany() pour dire qu'on veut TOUT supprimer
// ce qui se trouve entre les {} désigne le(s) critère(s) qu'on veut supprimer, chercher

carModel.deleteMany({}).then(() => {
    carModel.create([
        {
            brand: "Renault",
            model: "Espace",
            year: 1999,
        },
        {
            brand: "Renault",
            model: "Scenic",
            year: 2004,
        },
        {
            brand: "Peugeot",
            model: "308",
            year: 2017,
        }
    ]);
});


// FIND

carModel.findById("6046343290d7c7266e9e1e60").then((response) => {
    console.log(response)
});

// OU

// on met ce que l'on veut chercher dans l'accolade {}

carModel.find({
    _id: "6046343290d7c7266e9e1e60"
}).then((response) => {
    console.log(response)
});


// UPDATE

carModel.updateOne(
    {
        model: "Espace"
    },
    {
        year: 2000
    }
).then((response) => {
    console.log(response)
});


// DELETE

carModel.deleteMany({
    brand: "Renault"
}).then((response) => {
    console.log(response)
});


// INSERT

// 
carModel.insertMany([
    {
        brand: "Aston Martin",
        model: "DB9",
        year: 2010,
    },
    {
        brand: "Range Rover",
        model: "Discovery Sport",
        year: 2017,
    }
]);


// FIND BY COMPARISON

carModel.find({
    year: {
        $gt: 2015
    }
}
).then((response) => {
    console.log(response)
});


// FIND WITH REGEX

carModel.find({
    model: /o/
}
).then((response) => {
    console.log(response)
});

*/