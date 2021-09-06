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
      );


    
  // index.js
if (st.view === "Buyhomes") {
  document.querySelectorAll("#submitButtonOne").forEach(button => {
    button.addEventListener("click", () => {
    
      document.querySelector(".filterOne").classList.toggle("toggleOff");
    });
  });

  document.querySelectorAll("#submitButtonFour").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelector(".filterFour").classList.toggle("toggleOff");
      console.log("I was clicked");
    });
  });

  document.querySelectorAll("#submitButtonSeven").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelector(".filterSeven").classList.toggle("toggleOff");
      console.log("I was clicked");
    });
  });
}else{
  if(st.view === "Restaurant"){
    state.Restaurant.finalPrice = [];
    let judahPrice = document.getElementById("button-two")
    judahPrice.addEventListener("click", ()=>{
      state.Restaurant.finalPrice.push(parseInt(judahPrice.dataset.judah))
      console.log(judahPrice.dataset.judah)

      })
    //   let winePrice = document.getElementById("button-one");
    //   winePrice.addEventListener("click", ()=>{
    //     state.Restaurant.finalPrice.push(winePrice.dataset.wine)
    //     console.log(winePrice.dataset.wine)
    // });
  }
}




}




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

        //index.js inside of router.hooks
case "Buyhomes":
  state.Buyhomes.homes = [];
  state.Buyhomes.filterOne = [];
  state.Buyhomes.filterFour = [];
  state.Buyhomes.filterSeven = [];

  axios
    .get("https://mars-after-earth.herokuapp.com/homes")
    .then(response => {
      response.data.forEach(home => {
        state.Buyhomes.homes.push(home);
        // console.log("list of homes", state.Buyhomes.homes);
        // console.log(state.Buyhomes.filterFour);
      });
      state.Buyhomes.filterOne = state.Buyhomes.homes.filter(
        home => home.price <= 3
        
      );
      state.Buyhomes.filterFour = state.Buyhomes.homes.filter(
        home => home.price >= 4 && home.price <= 6
      );
      state.Buyhomes.filterSeven = state.Buyhomes.homes.filter(
        home => home.price >= 7
      );
      done();
    })
    .catch(err => console.log(err));
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
