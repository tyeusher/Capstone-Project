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
      pic: "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
  },
  {
      id: 2,
      price: 5,
      beds: 7,
      bath: 2,
      pic: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
  },
{
      id: 3,

      price: 4,
      beds: 6,
      bath: 2
  },

  {
      id: 4,
      price: 4,
      beds: 3,
      bath: 1
  },

  {
      id: 5,
      price: 7,
      beds: 6,
      bath: 3
  },

  {
      id: 6,
      price: 4,
      beds: 3,
      bath: 2
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