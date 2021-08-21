import html from "html-literal";

import home1 from "../../images/he.jpg";
import home2 from "../../images/he2.jpg";
import home3 from "../../images/he3.jpg";
import home4 from "../../images/he4.jpg";
import home5 from "../../images/he5.jpg";
import home6 from "../../images/he6.jpg";

export default () => html`
<div class="filtered-search">

</div>
<div class="buy-home">
  <h3 class="divider">Explore Homes</h3>
  <div class="filterlist">
    <div class="filter-price">
    <span class="price-title">Price</span>
    <button type="button">100,000 - 400,000</button>
    <button type="button">500,000 - 700,000</button>
    <button type="button">800,000, 100,000</button>
</div>
<div class="filter-bedroom">
    <span class="bedroomTitle">Bedrooms</span>

    <button type="button">1 - 3 </button>
    <button type="button">4 - 5</button>
    <button type="button">6 - 8</button>

</div>
<div class="filter-baths">
    <span class="bathTitle">Baths</span>
    <button type="button"  twoToFour oneTwoBath()">1 - 2</button>
    <button type="button"  threeFourBath()">3 - 4/button>
</div>
</div>






  <div class="container">
    <hr>

    <div class="row">
        <!-- Product  -->
        <div class="col-md-4 product-grid">
            <div class="image">
                <a href="#">
                    <img src="${home1}" class="w-100" >
                    <div class="overlay">
                        <div class="detail">Planet Neptune<br>4 Bedrooms<br>2 Baths<br>Backyard</div>
                    </div>
                </a>
            </div>

            <h5 class="text-center">Price: $800,000</h5>

        </div>
        <!-- ./Product -->

        <!-- Product  -->
        <div class="col-md-4 product-grid">
            <div class="image">
                <a href="#">
                    <img src="=${home2}" class="w-100">
                    <div class="overlay">
                        <div class="detail">Planet Mars<br>7 Bedrooms<br>2 Baths<br>Backyard</div>
                    </div>
                </a>
            </div>
            <h5 class="text-center">Price: $500,000</h5>

        </div>
        <!-- ./Product -->

        <!-- Product  -->
        <div class="col-md-4 product-grid">
            <div class="image">
                <a href="#">
                    <img src="${home3}" class="w-100">
                    <div class="overlay">
                        <div class="detail">Planet Pluto<br>6 Bedrooms<br>3 Baths<br>Backyard</div>
                    </div>
                </a>
            </div>

            <h5 class="text-center">Price: $400,000.00</h5>

        </div>
        <!-- ./Product -->

        <!-- Product  -->
        <div class="col-md-4 product-grid">
            <div class="image">
                <a href="#">
                    <img src="${home4}" class="w-100">
                    <div class="overlay">
                        <div class="detail">Planet Neptune<br>3 Bedrooms<br>1 Baths<br>Backyard</div>
                    </div>
                </a>
            </div>
            <h5 class="text-center">Price: $400,000</h5>

        </div>
        <!-- ./Product -->

        <!-- Product  -->
        <div class="col-md-4 product-grid">
            <div class="image">
                <a href="#">
                    <img src="${home5}" class="w-100">
                    <div class="overlay">
                        <div class="detail">Planet Mars<br>6 Bedrooms<br>3 Baths<br>Backyard</div>
                    </div>
                </a>
            </div>
            <h5 class="text-center">Price: $700,000</h5>

        </div>
        <!-- ./Product -->

        <!-- Product  -->
        <div class="col-md-4 product-grid">
            <div class="image">
                <a href="#">
                    <img src="${home6}" class="w-100">
                    <div class="overlay">
                        <div class="detail">Planet Venus<br>3 Bedrooms<br>2 Baths<br>Backyard</div>
                    </div>
                </a>
            </div>
            <h5 class="text-center">Price: $400,000</h5>

        </div>
        <!-- ./Product -->

    </div>

</div>
</div>
</div>
`;
