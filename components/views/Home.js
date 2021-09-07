import html from "html-literal";
import mike from "../../images/michael.jpg";
import ufo from "../../images/ufo.jpg";
import dragon from "../../images/neo.jpg";
import joker from "../../images/joker.png";


const kelvinToFahrenheit = (kelvinTemp) =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);




  export default (st) => html`
<div class="homeView">
  <div class="welcome">
    <h1>WELCOME TO AFTER EARTH</h1>
    <img src="${ufo}" class="logo"/>
  </div>




  <button id="btn">kmrkf</button>

  <h3 class="divider">Explore Mars</h3>
  <div class="wrapper">
    <div class="eachButton">
      <a href="BuyHomes"><span>Buy Homes!</span></a>
      <a href="Restaurant"><span>Restaurants!</span></a>
      <a href="Shopping"><span>Shopping</span></a>
      <a href="News"><span>Mars News</span></a>
    </div>
  </div>

  <h3 class="divider">Mars Residents Feedbacks.</h3>

  <div class="wrap">
    <div class="card">
      <img src="${mike}" width="175px"/>
      <div class= "container">
        <h2>Michael Jackson</h2>
        <p>"BEING ON MARS, YOU JUST CANT BEAT IT!</p>
      </div>
    </div>

    <div class="card">
      <img src="${joker}" width="250px"/>
      <div class="container">
        <h2>Joker</h2>
        <p>LETS TURN THIS PLACE INTO A GOTHAM!</p>
      </div>
    </div>

    <div class="card">
      <img src="${dragon}" width="270px" />
      <h2>NEO</h2>
      <p>"I THINK I LOVE THIS PLACE MORE THAN TRINITY</p>
      </div>
    </div>
    <h3 class="divider">About Mars</h3>
  </div>


</div>
</div>




`;
