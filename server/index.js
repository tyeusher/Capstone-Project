const express = require("express");
const app = express();




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


let homes =[
    {
        id: 8,
        price: 1,
        beds: 4,
        bath: 2
    },
    {
        id: 2,
        price: 5,
        beds: 7,
        bath: 2
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