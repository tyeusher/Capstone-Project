import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import dotenv from "dotenv";
import axios from "axios";
const router = new Navigo(window.location.origin);







dotenv.config();



function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(st)}
    ${Nav(state.Links)}
    ${Main(st)}
    ${Footer()}
    `;


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

    if(st.view === 'Buyhomes'){

      let filt = document.getElementById("homes-filter");
      let oneThree = document.getElementById("oneThreePrice");
      let imageOne = document.getElementsByClassName('gallery-image-one');
      let imgs = document.getElementsByTagName('img');
      let imgSrcs = [];
      oneThree.addEventListener('click',(elem)=>{
        for (var i = 0; i < imgs.length; i++) {//loop through all images
          imgSrcs.push(imgs[i].src);//push a;ll images in array
      }
        // console.log(image);
        for(let i =0; i<imgSrcs.length; i++){
          console.log(imgSrcs[i])
          filt.innerHTML+=`<img src="${imgSrcs[i]}" width ="200">`
      }
      homes.filter((home)=>{
  if(home.price >= elem.target.dataset.minprice && home.price <= elem.target.dataset.maxprice){
    let bed = home.beds;
    let bath = home.bath;
    let pric = home.price
    filt.innerHTML=`

    `
  }
})

      })

    }

  router.updatePageLinks();
}



// addEventListeners(st);
//data()

// function data(){
// fetch("https://afterearth-capstone.herokuapp.com/status").then(response => response.json)
//   .then(data=>console.log(data))}


router.hooks({//
  before: (done, params) => {
    const page =
      params && params.hasOwnProperty("page")
        ? capitalize(params.page)
        : "Home";

    switch (page) {

      case "Home":
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.WEATHER_API_KEY}&q=st.%20louis`
          )
          .then((response) => {
            state.Home.weather = {};
            // console.log(response, state.Home.weather);
            state.Home.weather.city = response.data.name;
            state.Home.weather.temp = response.data.main.temp;
            state.Home.weather.feelsLike = response.data.main.feels_like;
            state.Home.weather.humidity = response.data.main.humidity;
            state.Home.weather.description =
              response.data.weather[0]["description"];
            done();
          })
          .catch((err) => console.log(err));
        break;

      default:
        done();
    }
  },
});


// function addEventListeners() {
//   // add menu toggle to bars icon in nav bar
//   document
//     .querySelector(".fa-bars")
//     .addEventListener("click", () =>
//       document.querySelector("nav > ul").classList.toggle("hidden--mobile")
//     );
// }




router
  .on({
    "/": () => render(state.Home),
    ":page": (params) => render(state[capitalize(params.page)]),
  })
  .resolve();











