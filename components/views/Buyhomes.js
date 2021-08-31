import html from "html-literal";

import home1 from "../../images/he.jpg";
import home2 from "../../images/he2.jpg";
import home3 from "../../images/he3.jpg";
import home4 from "../../images/he4.jpg";
import home5 from "../../images/he5.jpg";
import home6 from "../../images/he6.jpg";
import home7 from "../../images/marsHome3.jpg";

export default () => html`
<div class="filtered-search">

</div>



<div class="home-holder">
    <div class="buy-home-title">
<h1 class="heading">BUY HOMES<span></span></h1>
</div>

<div id="homes-filter">

</div>
<div class="home-buttons">
                <div class="homes-price">
                <a href="#"><button id="oneThreePrice" class="round"  data-minprice="1" data-maxprice="3" purchase>100k - 300k</button></a>
                <a href="#"><button id="fiveSevenPrice" class="round"  data-minprice="5" data-maxprice="7" purchase>$400k - 600k</button></a>
                <a href="#"><button id="eightTenPrice" class="round"  data-minprice="8" data-maxprice="9" purchase>$90.00</button></a>
                <a href="#"><button id="Price" class="round" purchase>$90.00</button></a>
                </div>

                <div class="homes-bed">
                <a href="#"><button id="Price" class="round"  purchase>1 - 2</button></a>
                <a href="#"><button id="Price" class="round" purchase>3 -4</button></a>
                <a href="#"><button id="Price" class="round" purchase>$90.00</button></a>
                <a href="#"><button id="Price" class="round" purchase>$90.00</button></a>
                </div>

                <div class="homes-bath">
                <a href="#"><button class="round" purchase>1 - 2</button></a>
                <a href="#"><button class="round" purchase>3 -4</button></a>
                <a href="#"><button class="round" purchase>$90.00</button></a>
                <a href="#"><button class="round" purchase>$90.00</button></a>
                </div>

                </div>
                </div>

<div class="buy-home">
<div class="container">





<div class="gallery">

    <div class="gallery-item">
        <img class="gallery-image gallery-image-one"  src="${home1}" data-minprice="1" data-maxprice="3" alt="">
    </div>

    <div class="gallery-item">
        <img class="gallery-image" src="${home2}" alt="e">
    </div>

    <div class="gallery-item">
        <img class="gallery-image" src="${home3}" alt="">
    </div>

    <div class="gallery-item">
        <img class="gallery-image" src="${home4}" alt="">
    </div>

    <div class="gallery-item">
        <img class="gallery-image" src="${home5}" alt="">
    </div>

    <div class="gallery-item">
        <img class="gallery-image" src="${home6}" alt="man wearing a black jacket, white shirt, blue jeans, and brown boots, playing a white electric guitar while sitting on an amp">
    </div>

</div>

</div>

</div>
</div>
`;
