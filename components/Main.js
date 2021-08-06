import html from "html-literal";
export default () => html`
  <div class="welcome">
    <h1>WELCOME TO AFTER EARTH</h1>
    <img class="logo" />
  </div>

  <h3 class="divider">Explore Mars</h3>
  <div class="wrapper">
    <div class="eachButton">
      <a href="buHomes.html"><span>Buy Homes!</span></a>
      <a href="#"><span>Restaurants!</span></a>
      <a href="#"><span>Shopping</span></a>
      <a href="#"><span>Shopping</span></a>
    </div>
  </div>

  <h3 class="divider">Explore Mars</h3>

  <div class="wrap">
    <div class="card">
      <img src="#" width="250" />
      <div class="container">
        <h2>Michael Jackson</h2>
        <p>"Being on Mars, you just cant BEAT IT!</p>
      </div>
    </div>

    <div class="card">
      <img src="#" width="250" />
      <div class="container">
        <h2>Joker</h2>
        <p>Lets turn this place into a Gotham!</p>
      </div>
    </div>

    <div class="card">
      <img class="container" />
      <p>" I love it here so far.</p>
      </div>
    </div>
  </div>
`;
