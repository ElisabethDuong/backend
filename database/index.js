const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://localhost:27017/garage",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("Database Connected");
    }
);

const carsSchema = new mongoose.Schema({
    // _id: ID,
    brand: String,
    model: String,
    year: Number,
    // created: Date // chercher la date de création de l'élément dans la bas de données
});

const carsModel = mongoose.model("cars", carsSchema);

// carsModel.deleteMany({}).then(() => {
//     carsModel.create([
//         {
//             brand: "Renault",
//             model: "Espace",
//             year: 1999
//         },
//         {
//             brand: "Renault",
//             model: "Scenic",
//             year: 2004
//         },
//         {
//             brand: "Peugeot",
//             model: "308",
//             year: 2017
//         }
//     ]);
// });

// carsModel.findById({
//     _id: "6046343290d7c7266e9e1e60"
// }).then((response) => console.log(response));

// carsModel.update(
//     {
//         model: "Espace"
//     },
//     {
//         year: 2000
//     }
// ).then((response) => console.log(response));

// carsModel.deleteMany({
//     brand: "Renault"
// }).then((response) => console.log(response));

// carsModel.insertMany([
//     {
//         brand: "Aston Martin",
//         model: "DB9",
//         year: 2010
//     },
//     {
//         brand: "Range Rover",
//         model: "Discovery Sport",
//         year: 2017
//     }
// ]);

// carsModel.find({
//     year: {
//         $gt: 2015
//     }
// }
// ).then((response) => {
//     return console.log(response);
// });

// carsModel.find({
//     model: /o/g
// }
// ).then((response) => console.log(response));

