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
  state.Favorites.homePrice = [];
  state.Favorites.homeBed = [];
  state.Favorites.homeBath = [];
  document.querySelectorAll("#favButton").forEach(button => {
    button.addEventListener("click", event => {
      state.Favorites.homePrice.push((event.target.attributes["data-price"].value));
      state.Favorites.homeBed.push((event.target.attributes["data-bed"].value))
      state.Favorites.homeBath.push((event.target.attributes["data-bath"].value))
    });
  })
  
    document.querySelectorAll('.filterButton').forEach(button=>{
      button.addEventListener('click', (event)=>{
        let min = button.dataset.min;
        let max = button.dataset.max;
        let filter = button.dataset.filter;
        console.log(min, max, filter)
        console.log(st)
        if(filter === 'price'){
         st.displayedHomes = st.homes.filter(home=>{
            return home.price >= min && home.price <= max 
            
          })

        }
        //if ocnditional if filter === beds then do 
     
        if(filter === 'allHomes'){
          st.displayedHomes = st.homes
        }
        console.log(st.displayedHomes)
        render(st);
      })
    })  
 

 
  

  
}else{

if(st.view === "Favorites"){
  console.log('h')
}else{







  
  if(st.view === "Restaurant"){
//here

    //here

 }

    
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

      case "News":
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.WEATHER_API_KEY}&q=st.%20louis`
          )
          .then((response) => {
            state.News.weather = {};
            // console.log(response, state.Home.weather);
            state.News.weather.city = response.data.name;
            state.News.weather.temp = response.data.main.temp;
            state.News.weather.feelsLike = response.data.main.feels_like;
            state.News.weather.humidity = response.data.main.humidity;
            state.News.weather.description =
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
      state.Buyhomes.homes = response.data;
      state.Buyhomes.displayedHomes = response.data;
      // state.Buyhomes.filterOne = state.Buyhomes.homes.filter(
      //   home => home.price <= 3
        
      // );
      // state.Buyhomes.filterFour = state.Buyhomes.homes.filter(
      //   home => home.price >= 4 && home.price <= 6
      // );
      // state.Buyhomes.filterSeven = state.Buyhomes.homes.filter(
      //   home => home.price >= 7
      // );
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
