const express = require("express");
const app = express();
const mongoose = require("mongoose");//
const dotenv = require("dotenv")
const bodyParser = require('body-parser');
const { response } = require("express");
const { request } = require("http");
// const homez = require ("./routers/homez")

dotenv.config()//


mongoose.connect(process.env.MONGODB);//
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));//
db.once('open', console.log.bind(console, 'Successfully opened connection to Mongo!'));//

const logging = (request, response, next) => {//
  console.log(`${request.method} ${request.url} ${Date.now()}`);//
  next();//
};//

// CORS Middleware
// ==============do this=====================8.2, 8.3 then host herpku
const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};
// ===================do this=========================
app.use(cors);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(express.json());
app.use(logging);
// app.use(homez);
// =====================stop===========================







app
  .route("/")
  .get((request, response) => {
    response.send(JSON.stringify({message: "No 4gGETfwf routeszc available on root URI." }), 404);
  })
// .catch(err => console.log(err));
const port = process.env.PORT || 4040;
app.listen(port, () => console.log(`Listening on port ${port}`));

app.route("/").get((request, response) => {
  response.send("HELLO WORLD");
});

app.route("/homes").get((request, response)=>{
    response.send(JSON.stringify(homes))
})

app.route("/shopping").get((request, response)=>{
  response.send(JSON.stringify(shoppingItems))
})


let homes= [
  {
      id: 8,
      price: 1,
      beds: 4,
      bath: 2,
      pic: "https://m.media-amazon.com/images/I/91ergFzlDBL._SL1500_.jpg"
  },
  {
      id: 2,
      price: 5,
      beds: 7,
      bath: 2,
      pic: "https://www.portrait-gift.com/wp-content/uploads/2018/06/sweet-home-pencil-sketch.jpg"
  },
{
      id: 3,

      price: 4,
      beds: 6,
      bath: 2,
      pic: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/louisiana-house-portrait-sketch-hanne-lore-koehler.jpg"
  },

  {
      id: 4,
      price: 4,
      beds: 3,
      bath: 1,
      pic: "https://live.staticflickr.com/7254/6861904140_e670023b06.jpg"
  },

  {
      id: 5,
      price: 7,
      beds: 6,
      bath: 3,
      pic: "https://i.pinimg.com/originals/2d/57/c3/2d57c3d87d137914115582a15c4e9be6.jpg"
  },

  {
      id: 6,
      price: 4,
      beds: 3,
      bath: 2,
      pic: "https://i.etsystatic.com/6620142/r/il/ec583b/346222713/il_570xN.346222713.jpg"
  }
]

let shoppingItems =[
{
  id: 1,
  price: 30
},
{
id: 1,
price: 20
}

]