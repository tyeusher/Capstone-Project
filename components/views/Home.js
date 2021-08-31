import html from "html-literal";
import mike from "../../images/mikejack.jpg";
import ufo from "../../images/ufo.jpg";
import dragon from "../../images/dragonfly.jpg";
import joker from "../../images/realjoker.jpg";


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
      <a href="Home"><span>Buy Homes!</span></a>
      <a href="Restaurant"><span>Restaurants!</span></a>
      <a href="Shopping"><span>Shopping</span></a>
      <a href="News"><span>Mars News</span></a>
    </div>
  </div>

  <h3 class="divider">Mars Residents Feedbacks.</h3>

  <div class="wrap">
    <div class="card">
      <img src="${mike}" width="250px"/>
      <div class= "container">
        <h2>Michael Jackson</h2>
        <p>"Being on Mars, you just cant BEAT IT!</p>
      </div>
    </div>

    <div class="card">
      <img src="${joker}" width="250px"/>
      <div class="container">
        <h2>Joker</h2>
        <p>Lets turn this place into a Gotham!</p>
      </div>
    </div>

    <div class="card">
      <img src="${dragon}" width="250px" />
      <h2>"Dragon Fly Jones</h2>
      <p>" I love it here so far at mars, its nothing but SILENCE!SILENCE!!.</p>
      </div>
    </div>
    <h3 class="divider">About Mars</h3>
  </div>


</div>
</div>

<h3 id="weather">
  Temperature in ${st.weather.city} is
  ${kelvinToFahrenheit(st.weather.temp)}F, feels like
  ${kelvinToFahrenheit(st.weather.feelsLike)}F. Humidity is at
  ${st.weather.humidity}%, and the weather is ... ${st.weather.description}
</h3>


`;
