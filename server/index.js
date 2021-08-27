const express = require("express");
const app = express();





// const greetings = require("./routers/greetings");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv")
// const pizzas = require("./routers/pizzas");









// dotenv.config()
// mongoose.connect(process.env.MONGODB);
// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'Connection error:'));
// db.once('open', console.log.bind(console, 'Successfully opened connection to Mongo!'));

// const logging = (request, response, next) => {
//   console.log(`${request.method} ${request.url} ${Date.now()}`);
//   next();
// };

// // CORS Middleware
// const cors = (req, res, next) => {
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "X-Requested-With,content-type, Accept,Authorization,Origin"
//   );
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );
//   res.setHeader("Access-Control-Allow-Credentials", true);
//   next();
// };

// app.use(cors);
// app.use(express.json());
// app.use(logging);

// app.use(greetings)
// app.use(pizzas);//this is where we had use pizas in pizzas.js
// app.get("/status", (request, response) => {
//   response.send(JSON.stringify({ message: "Service healthy" }));
// });
//creating app and route, the slash means local host or root area on url..if it is get or post then itll respond these messages
app
  .route("/")
  .get((request, response) => {
    response.send(JSON.stringify({ message: "No GET routes available on root URI." }), 404);
  })
  .post((request, response) => {
    response.send(JSON.stringify({ message: "No POST routes available on root URI." }), 404);
  });
const port = process.env.PORT || 4040;
app.listen(port, () => console.log(`Listening on port ${port}`));

