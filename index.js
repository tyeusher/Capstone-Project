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

  document.querySelectorAll("#favButton").forEach(button => {
    button.addEventListener("click", event => {
      let pric = button.dataset.price;
      let bat = button.dataset.bath;
      let be = button.dataset.beds;
    
      state.Favorites.dispHomes = st.homes.filter(home=>{
        // console.log(home.price, pric )
        return home.price === pric && home.bath === bath && home.beds === be
        
      })
      // st.Favorites.dispHomes.push((event.target.attributes["data-id"].value));
     
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
       if(filter === 'beds'){
        st.displayedHomes = st.homes.filter(home=>{
          return home.beds >= min && home.beds <= max 
          
        })
       }

       if(filter === 'baths'){
        st.displayedHomes = st.homes.filter(home=>{
          return home.bath >= min && home.bath <= max 
          
        })
       }

      
        if(filter === 'allHomes'){
          st.displayedHomes = st.homes
        }
        console.log(st.displayedHomes)
        render(st);
      })
    })  
 

 
  

  
}else{

if(st.view === "Favorites"){
  
}else{



  
  if(st.view === "Restaurant"){
//here
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}
//this is for the remove buttton
function ready() {
  var removeCartItemButtons = document.getElementsByClassName('btn-danger')//1 renaming all btndanger and storing it ass remoi=ving cart item button
  for (var i = 0; i < removeCartItemButtons.length; i++) {//saying loop through all the buttons...because we want to loop thru to rename it all to just button
      var button = removeCartItemButtons[i]//renaming it again to everything in the aftermath of after the loop.[i] means get everything in the i..this is the after lopp var. or like after the filter is done then the new name..like tyrone to tye after filter of gods cleansing 
      button.addEventListener('click', removeCartItem)//listen for a click and then run removecart item function
      //we went from getting the id where we cant use. to renaming it button with a function when tis clicked
      //basically id can not be used. so lets convert the id to a var so itll have properrties like remove or in this case
      //we want to give it a function of add event listner once it has been clicked. now all the buttons has one function
      //w want to loop through to give all the btn danger a name of just button
      // so addevent has a event.target that auto comes with it and it is the removecartitem
  }
//listening to if quantity is change. 
  var quantityInputs = document.getElementsByClassName('cart-quantity-input')//get this id
  for (var i = 0; i < quantityInputs.length; i++) {//loop through the quantity cart
      var input = quantityInputs[i]//renaming the new array
      input.addEventListener('change', quantityChanged)//listen to anytime the input change its value and creating a function called quantity changed
  }
//add to cart button..loop through all add item to cart button and listen to which oone has been clicked
  var addToCartButtons = document.getElementsByClassName('shop-item-button')
  for (var i = 0; i < addToCartButtons.length; i++) {//loop thrugh ll the buttons of add to cart
      var button = addToCartButtons[i]//rename te new array
      button.addEventListener('click', addToCartClicked)//whenever its clicked run this function
  }

  document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
  alert('Thank you for your purchase')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  while (cartItems.hasChildNodes()) {
      cartItems.removeChild(cartItems.firstChild)
  }
  updateCartTotal()
}
//remove items from cart
function removeCartItem(event) {//what is the event. this is the remve item event from cart
  var buttonClicked = event.target//this is the target of the add event listener..addevet listener will target this..giving name to the event target so itll have properties of event target..event target hass properties with it
  buttonClicked.parentElement.parentElement.remove()//buttonclicked has powers to remove things from eventlistener.it now has its properties. parent element claims it will remove the parent of the elemetn
  updateCartTotal()//update function
  //remember we already know the id from the addevent listener section so it will target that if.we add the event listerner and the event target is l inked to it
}
//function if number is less than 1 or not a number for quantity
function quantityChanged(event) {//what we want do when quantity is changed 
  var input = event.target  //target to input which is the array of the quantity we made
  if (isNaN(input.value) || input.value <= 0) {//if anything is not a number or if inout value is less than zero return input value 1
      input.value = 1
  }
  updateCartTotal()
}

function addToCartClicked(event) {
  var button = event.target//giving properties of event target to button
  var shopItem = button.parentElement.parentElement//theb utt will target parent element of the parent element which is shop item
  var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText//display the ttle of product on cart section. it will get the inner text of the id
  var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText//display the price of the item
  var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src//display the image of product on cart section..will get the first image
  addItemToCart(title, price, imageSrc)//adds a seperate row. this will run a function
  updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
  var cartRow = document.createElement('div')//creating a div for new row that will take  title price image
  cartRow.classList.add('cart-row')//giving it a class name
  var cartItems = document.getElementsByClassName('cart-items')[0]//add row to cart items
  var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
  for (var i = 0; i < cartItemNames.length; i++) {
      if (cartItemNames[i].innerText == title) {
          alert('This item is already added to the cart')
          return
      }
  }
  //using this entire html to generate a cart row...will have image title price and quantity then remove button etc

  //pluug in blueprint for cart items once click an item
  var cartRowContents = `
      <div class="cart-item cart-column">
          <span class="cart-item-title">${title}</span>
      </div>
      <span class="cart-price cart-column">${price}</span>
      <div class="cart-quantity cart-column">
          <input class="cart-quantity-input" type="number" value="1">
          <button class="btn btn-danger" type="button">REMOVE</button>
      </div>`
  cartRow.innerHTML = cartRowContents//aligning it so cn be in lined now cart row is in lined..we use inner html instead of innertext because we are using html contents
  cartItems.append(cartRow)//add cart row end of cart items
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}
//update cart  everytime 
function updateCartTotal() {//find price of items then multiply it by the quantity
  var cartItemContainer = document.getElementsByClassName('cart-items')[0]//renaming id cart items which is wrapping everything in cart row...but cart items return an array so use [0] t get first element in container
  var cartRows = cartItemContainer.getElementsByClassName('cart-row')//want to loop over entire cart rows..s first we got cart-items to get the cart row cuz items is over row
  var total = 0//set total to zero t start with
  for (var i = 0; i < cartRows.length; i++) {//loop through the cart rows
      var cartRow = cartRows[i]//renaming the new array
      var priceElement = cartRow.getElementsByClassName('cart-price')[0]//get first eleement in the price id we want the price. first element from id is the actialspan price 
      var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]//getting whats in the quantity in the row the first element
      var price = parseFloat(priceElement.innerText.replace('$', ''))//replace all the dollar signs with nothing..we remove dollar sign so we can ddo math on the number
      var quantity = quantityElement.value//gtes the quantity by getting its value.
      total = total + (price * quantity)
  }
  total = Math.round(total * 100) / 100//round to 2 decimal places
  document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total//changing inner text to total
}

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
    .get("https://mars-after-earth.herokuapp.com/homes")//location where we want to get from
    .then(response => {//then is whatwill haooen after we get the data
      state.Buyhomes.homes = response.data;
      state.Buyhomes.displayedHomes = response.data;

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
