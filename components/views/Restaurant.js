import html from "html-literal"
// import logo from "../../images/vintage.jpg";
// import art from "../../images/art2.jpg";
// import food1 from "../../images/locust.jpg";
// import food2 from "../../images/break.jpg";
// import back from "../../images/lord.jpg";
// import man1 from "../../images/man2.jpg";
// import man2 from "../../images/man3.png";
// import man3 from "../../images/man.jpg";

export default (st) => html`
<div class="rest-view">

<div class="jus">
<div class="title">SUPPERS READY</div>
<div class="front">
<img src="${logo}" class="image--cover">
</div>
</div>

<div class="page">
<div class="theTitle">Todays Specials</div>
<!-- Section starts: Appetizers -->

<style>
.page{
    background-image: url('${art}');
}
</style>

<div class="menu-section">
    <!-- Item starts -->
    <div class="menu-item">
        <div class="menu-item-name">
        WATER INTO WINE
        </div>
        <div class="menu-item-price">
            20 SHECKELS
        </div>
        <div class="menu-item-description">
            We start with a generous portion of our golden hash browns and sautéed onions topped with split buttermilk biscuit, two country sausage patties, smothered with our delicious sausage gravy, finally topped with two eggs and cheddar cheese
        </div>
    </div>
    <!-- Item ends -->

    <!-- Item starts -->
    <div class="menu-item">
        <div class="menu-item-name">
        JUDAS'S SPECIAL
        </div>
        <div class="menu-item-price">
            35 CHECKELS
        </div>
        <div class="menu-item-description">
            Our golden English muffin split, topped with Virginia Carvemaster ham, 2 eggs poached and covered with hollandaise sauce. Served with hash browns, creamy grits, sliced tomatoes or a cup of fresh fruit.
        </div>
    </div>
    <!-- Item ends -->

    <!-- Item starts -->
    <div class="menu-item">
        <div class="menu-item-name">
    MANNA FROM ABOVE
        </div>
        <div class="menu-item-price">
            15 SHECKELS
        </div>
        <div class="menu-item-description">
        Sliced beef steak, grilled Portobello mushrooms, green peppers, Swiss cheese
        </div>
    </div>
    <!-- Item ends -->



</div>


</div> <!-- page -->



<div class="wrap">
<div class="tit">
<h1>Taste and See</h1>
<br>
<h2>Happy Hours 10am - 3pm</h2>
<br>
<h3>Mon - Fri 9AM - 12PM</h3>
</div>
<div class="spacer">

</div>
</div>


<div class="container">
    <div class="shop-items">
        
        <div class="shop-item">
            <span class="shop-item-title">Judas's Special</span>
            <img class="shop-item-image one" src="${food2}" width="300" ">
            <div class="shop-item-details">
                <span class="shop-item-price">$12.99</span>
                <br>
                <button class="shop-item-button" type="button">ORDER</button>
            </div>
            

</div>

<div class="shop-item">
            <span class="shop-item-title">Water into Wine</span>
            <img class="shop-item-image rs" src="${food1}" width="300">
            <div class="shop-item-details">
                <span class="shop-item-price">$14.99</span>
                <br>
                <button class="shop-item-button"type="button">ORDER</button>
           
        </div>
    </div>



</div>

<style>
  .wraps{
      background-image: url(${back});
  }
</style>

<div class="wraps">

<div class="tit">
<h1>Taste and See</h1>
<br>

<br>
<h3>Mon - Fri 9AM - 12PM</h3>
</div>
<div class="spacer">

</div>
</div>


<div class="food-order">
    <h1 class="hOne">Orders</h1>
<div class="dropdown">
  
  <div class="dropdown-content">
    <div class="cart-items">
        
        
    </div>
    <div class="dropdown-content">
      <div class="cart-items">
          
          
      </div>

      <div class="cart-total">
        <strong class="cart-total-title">Total</strong>
        <span class="cart-total-price">
        </span>
    </div>
    

    </div>




<div class="this">
<div class="tit">
<h1>Suppers Ready</h1>
<br>

<h2>Location: 4638 Easter Driver</h2>
<br>

</div>

</div>

<div class="wrapper-review">
<div class="gridz">
  <div class="client-review">
<img src="${man1}" class="imagez one">
<div class="details">
  <p>James Joner</p>
  <h2>"Yummy in my Tummy"</h2>
</div>
</div>


<div class="client-review">
<img src="${man2}" alt="" class="imagez" />
<div class="details">
  <p>Alexander Coder</p>
  <h2>"Good food befor my Voyage"</h2>
</div>
</div>


<div class="client-review">
<img src="${man3}" alt="" class="imagez" />
<div class="details">
  <p>Manifo Jame</p>
  <h2>"Wow. Just Wow, so good"</h2>
</div>

</div>

</div>

<!-- <div>
${st.finalPrice.map((firstFilter)=>{
   console.log(firstFilter)
}).join("")



} 
</div> -->


`;

