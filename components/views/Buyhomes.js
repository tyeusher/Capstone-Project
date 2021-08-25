import html from "html-literal";

import home1 from "../../images/he.jpg";
import home2 from "../../images/he2.jpg";
import home3 from "../../images/he4.jpg";
import home4 from "../../images/he4.jpg";
import home5 from "../../images/he5.jpg";
import home6 from "../../images/he6.jpg";
import home7 from "../../images/marsHome3.jpg";

export default () => html`
<div class="filtered-search">

</div>
<div class="buy-home">
<div class="container">

<h1 class="heading">Image Gallery with CSS Grid <span>& Flexbox Fallback</span></h1>

<div class="gallery">

    <div class="gallery-item">
        <img class="gallery-image" src="${home1}" alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer">
    </div>

    <div class="gallery-item">
        <img class="gallery-image" src="${home2}" alt="sunset behind San Francisco city skyline">
    </div>

    <div class="gallery-item">
        <img class="gallery-image" src="${home3}" alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan">
    </div>

    <div class="gallery-item">
        <img class="gallery-image" src="${home4}" alt="car interior from central back seat position showing driver and blurred view through windscreen of a busy road at night">
    </div>

    <div class="gallery-item">
        <img class="gallery-image" src="${home5}" alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA">
    </div>

    <div class="gallery-item">
        <img class="gallery-image" src="${home6}" alt="man wearing a black jacket, white shirt, blue jeans, and brown boots, playing a white electric guitar while sitting on an amp">
    </div>

</div>

</div>

</div>
`;
