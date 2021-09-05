import html from "html-literal";

import home1 from "/images/he.jpg";
import home2 from "/images/he2.jpg";
import home3 from "/images/he3.jpg";
import home4 from "/images/he4.jpg";
import home5 from "/images/he5.jpg";
import home6 from "/images/he6.jpg";
import home7 from "/images/marsHome3.jpg";


export default (st) => html`


<input id="submitButtonOne" type="button" value="buttonOne">
<input id="submitButtonFour" type="button" value="buttonFour">
<input id="submitButtonSeven" type="button" value="buttonSeven">

<input id="ButtonBedOne" type="button" value="BedOne">
<input id="ButtonBedFour" type="button" value="BedFour">
<input id="ButtonBedSeven" type="button" value="BedSeven">

<input id="ButtonBathOne" type="button" value="BathOne">
<input id="ButtonBathThree" type="button" value="BathThree">




<div id = "filtereds">

<div class="filterOne">
${st.filterOne.map((firstFilter)=>{
    return firstHome(firstFilter)
})
.join("")

}
</div>
<div class="filterFour">

${st.filterFour.map((firstFilter)=>{
    return firstHome(firstFilter);
}).join("")
}</div>

<div class="filterSeven">

${st.filterSeven.map((firstFilter)=>{
    return firstHome(firstFilter);
}).join("")



}

</div>


</section>
`;


 function firstHome(firstFilter){
    return `
    <div class="buy-homes">
<div class="containers">
<div class="galleries">
   <div class="gallery-item">
   <img class="gallery-image" src="${firstFilter.pic} class="w-100" alt="">
            <h2>Price:${firstFilter.price}</h2>
            <h3>Bed:${firstFilter.beds}</h3>
            <h3>Bath:${firstFilter.bath}</h3>
            </div>
            </div>
            </div>
        </div>`;

}
//<img class="gallery-image" src="${home.picture}" alt="">























 
// <div class="home-buttons">
//                 <form class="homes-price">

//                 <input type="submit" name="submit" value="1 - 3" />
//                 <input type="submit" name="submit" value="4 - 6" />
//                 <input type="submit" name="submit" value="7 - 8" />
//                 </form>

//                 <div class="homes-bed">
//                 <a href="#"><button id="Price" class="round"  purchase>1 - 2</button></a>
//                 <a href="#"><button id="Price" class="round" purchase>3 -4</button></a>
//                 <a href="#"><button id="Price" class="round" purchase>$90.00</button></a>
//                 <a href="#"><button id="Price" class="round" purchase>$90.00</button></a>
//                 </div>

//                 <div class="homes-bath">
//                 <a href="#"><button class="round" purchase>1 - 2</button></a>
//                 <a href="#"><button class="round" purchase>3 -4</button></a>
//                 <a href="#"><button class="round" purchase>$90.00</button></a>
//                 <a href="#"><button class="round" purchase>$90.00</button></a>
//                 </div>

//                 </div>


// <div class="buy-home">
// <div class="container">
// <div class="gallery">

//     <div class="gallery-item">
//         <img class="gallery-image gallery-image-one"  src="${home1}" data-minprice="1" data-maxprice="3" alt="">
//     </div>

//     <div class="gallery-item">
//         <img class="gallery-image" src="${home2}" alt="e">
//     </div>

//     <div class="gallery-item">
//         <img class="gallery-image" src="${home3}" alt="">
//     </div>

//     <div class="gallery-item">
//         <img class="gallery-image" src="${home4}" alt="">
//     </div>

//     <div class="gallery-item">
//         <img class="gallery-image" src="${home5}" alt="">
//     </div>

//     <div class="gallery-item">
//         <img class="gallery-image" src="${home6}" alt="man wearing a black jacket, white shirt, blue jeans, and brown boots, playing a white electric guitar while sitting on an amp">
//     </div>
// </div>
// </div>
// </div>
// `;
