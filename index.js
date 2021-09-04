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
    
  if (st.view === "Buyhomes"){
    document.querySelectorAll("#submitButtonOne").forEach(button => {
      button.addEventListener("click", event => {
        const filterOne = [];
          for(let home of state.Buyhomes.homes){
            if(home.price <= 3){
              filterOne.push(home);
            }
          }
        //  console.log(state.Buyhomes.filterOne)
        // console.log(filterOne)
      });
    });

    document.querySelectorAll("#submitButtonFour").forEach(button => {
  
      button.addEventListener("click", event => {
       const filterFour = [];
          for(let home of state.Buyhomes.homes){
            if(home.price >= 4 && home.price <=6){
              filterFour.push(home);
            }
          }
          console.log(filterFour)
       
      });
    });

    document.querySelectorAll("#submitButtonSeven").forEach(button => {
      button.addEventListener("click", event => {
        const filterSeven= [];
          for(let home of state.Buyhomes.homes){
            if(home.price > 6){
              filterSeven.push(home);
            }
          }
      });
    });

    document.querySelectorAll("#ButtonBedOne").forEach(button => {
      button.addEventListener("click", event => {
        let bedFilterOne = [];
        for(let home of state.Buyhomes.homes){
            if(home.beds <= 3){
              bedFilterOne.push(home);
            }
          }
      });
    });

    document.querySelectorAll("#ButtonBedFour").forEach(button => {
      button.addEventListener("click", event => {
        const butbedFour = [];
          for(let home of state.Buyhomes.homes){
            if(home.beds > 3 && home.beds <= 6){
              filterHome.push(home);
            }
          }
      });
    });

    
    document.querySelectorAll("#ButtonBedSeven").forEach(button => {
      button.addEventListener("click", event => {
        const butBedSeven = [];
          for(let home of state.Buyhomes.homes){
            if(home.beds > 6){
              butBedSeven.push(home);
            }
          }
          
      });
    });

    document.querySelectorAll("#ButtonBathOne").forEach(button => {
      button.addEventListener("click", event => {
        let butBathOne = [];
        // console.log(state.Buyhomes.homes.price);
        // filterHome += state.Buyhomes.homes;
        // console.log(filterHome);
          for(let home of state.Buyhomes.homes){
            if(home.bath <= 2){
              butBathOne.push(home);
            }
          }
      });
    });

    
    // document.querySelectorAll("#buttonBathThree").forEach(button => {
    //   button.addEventListener("click", event => {
    //     let filterHome = [];
    //     // console.log(state.Buyhomes.homes.price);
    //     // filterHome += state.Buyhomes.homes;
    //     // console.log(filterHome);
    //       for(let home of state.Buyhomes.homes){
    //         if(home.bath > 2){
    //           filterHome.push(home);
    //         }
    //       }
    //       console.log(filterHome);
    //     // if (state.Buyhomes.homes.price >= 3 ){
    //     //   filterHome.push(state.Buyhomes.homes.id);
    //     // }
    //   });
    // });











    //to map
  }



    }




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
          state.Buyhomes.homes = [];
        axios
          .get("https://mars-after-earth.herokuapp.com/homes"
          )
          .then((response)=>{
            response.data.forEach((home)=>{
                state.Buyhomes.homes.push(home);
                console.log('list of homes', state.Buyhomes.homes);
            });

          
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
