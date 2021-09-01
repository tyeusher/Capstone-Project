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
  addEventListeners(st);

  router.updatePageLinks();
}

function addEventListeners(st) {
  // add menu toggle to bars icon in nav bar
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    )};
// data()

// function data(){
// fetch("https://afterearth-capstone.herokuapp.com/status").then(response => response.json)
//   .then(data=>console.log(data))}


// if(st.view === "Buyhomes"){
//   document.querySelector("form").addEventListener("submit", (event) => {

//     let homes = state.Buyhomes.homes;
//     homes.filter((home)=>{
//       if(home.price ===1 || home.price ===2 || home.price ===3){
//         home.price = state.Buyhomes.homesFiltered.price;
//         home.bed = state.Buyhomes.homesFiltered.bed;
//         // ro.innerHTML=`<h1>${home.id},${home.price}</h1>`
//         // console.log(home.picture)

//       }
//     })
//     event.preventDefault();
//   })
// }

router.hooks({
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

        case "Buyhomes":
          axios
          .get("https://mars-after-earth.herokuapp.com/homes"
          )
          .then((response)=>{
            console.log(response);
          
            done();
          })
          .catch((err) => console.log(err));
          break;

      default:
        done();
    }
  },
});



router
  .on({
    "/": () => render(state.Home),
    ":page": (params) => render(state[capitalize(params.page)]),
  })
  .resolve();
