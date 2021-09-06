import html from "html-literal"
import logo from "../../images/vintage.jpg";
import art from "../../images/art2.jpg";
import food1 from "../../images/locust.jpg";
import food2 from "../../images/break.jpg";
import back from "../../images/lord.jpg";
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
<br>
<h2>Happy Hours</h2>
<br>
<br>
<h3>Mon - Fri 9AM - 12PM</h3>
</div>
<div class="spacer">

</div>
</div>

<div class="first-pic">
  <img src="${food1}" width="400" height="500">
  <div class="dee">
  <p class="detail-title">WATER INTO WINE</p>
  <p class="detail-price">20 SHECKELS</p>
  <button id="button-one" data-wine="20"><span>Hover Me</span></button>
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
<h2>Happy Hours</h2>
<br>
<br>
<h3>Mon - Fri 9AM - 12PM</h3>
</div>
<div class="spacer">

</div>
</div>

<div class="second-pic">
  <div class="dee2">
  <button id="button-two" data-judah="35"><span>Hover Me</span></button>
  <p class="detail-title">Judas's Special</p>
  <p class="detail-price">35 SHECKELS</p>
</div>
<img src="${food2}" width="400" height="500">
</div>


<div class="this">
<div class="tit">
<h1>Suppers Ready</h1>
<br>

<h2>Location: 4638 Easter Driver</h2>
<br>

<h3>Hours</h3>
<h3>Mon - Sun 8am - 10pm</h3>
</div>

</div>













<div class="wrapper">
<div class="row my-row">
  <div class="col-xs-4 my-col">
<img src="man.jpg" class="image--cover">
<div class="details">
  <p>James Joner</p>
  <h6>"Yummy in my Tummy"</h6>
</div>
</div>


<div class="col-xs-4 my-col">
<img src="man2.jpg" alt="" class="image--cover" />
<div class="details">
  <p>Alexander Coder</p>
  <h6>"Good food befor my Voyage"</h6>
</div>
</div>


<div class="col-xs-4 my-col">
<img src="man3.png" alt="" class="image--cover" />
<div class="details">
  <p>Manifo Jame</p>
  <h6>"Wow. Just Wow"</h6>
</div>
</div>

<div class="col-xs-4 my-col">
<img src="man4.jpg" alt="" class="image--cover" />
<div class="details">
  <p>Jose Dias</p>
  <h6>"Ill be Back. Sure Thing."</h6>
</div>
</div>
</div>


</div>

<div>
${st.finalPrice.map((firstFilter)=>{
   console.log(firstFilter)
}).join("")



} 
</div>


`;

