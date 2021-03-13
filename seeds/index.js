const mongoose = require('mongoose');
const Campground = require('../models/campground');
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/yelp-camp';
const wonders = require('./wonders')

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});



// const seedDB = async () => {
//     await Campground.deleteMany({});
//     for (let i = 0; i < 50; i++) {
//         const price = Math.floor(Math.random() * 20) + 10;
//         const camp = new Campground({
//             //YOUR USER ID
//             author: '603857fce5b64309fc07fa1e',
//             location: `${wonders[i].location}`,
//             title: `${wonders[i].name}`,
//             description: `${wonders[i].about}`,
//             price,
//             geometry: {
//                 type: "Point",
//                 coordinates: [
//                     wonders[i].longitude,
//                     wonders[i].latitude,
//                 ]
//             },
//             images: [
//                 {
//                     url: `${wonders[i].image}`,
//                     // filename: 'YelpCamp/ncjxioatxg93hp0jlnka'
//                 },

//             ]
//         })
//         await camp.save();
//     }
// }

// seedDB()
//     .then(() => {
//         mongoose.connection.close();
//     })

// module.exports = { seedDB }
