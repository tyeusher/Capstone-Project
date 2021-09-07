import html from "html-literal";

import home1 from "/images/he.jpg";
import home2 from "/images/he2.jpg";
import home3 from "/images/he3.jpg";
import home4 from "/images/he4.jpg";
import home5 from "/images/he5.jpg";
import home6 from "/images/he6.jpg";
import home7 from "/images/marsHome3.jpg";


export default (st) => html`
<div class="buy-home">
<div class="home-grid">
<div class="price-grid"> 
<input id="submitButtonOne" class="budden" type="button" value="PRICE: 100K - 300K">
<input id="submitButtonFour" class="budden" type="button" value="PRICE: 400K - 600K">
<input id="submitButtonSeven" class="budden" type="button" value="PRICE: 700K AND UP">
</div>
<div class="beds-grid">
<input id="ButtonBedOne" class="budden" type="button" value="BEDS: 1 - 3">
<input id="ButtonBedFour" class="budden" type="button" value="BEDS: 4 - 6">
<input id="ButtonBedSeven" class="budden" type="button" value="BEDS: 7 AND UP">
</div>
<div class="baths-grid">
<input id="ButtonBathOne" class="budden" type="button" value="BATH: 1 - 2">
<input id="ButtonBathThree" class="budden" type="button" value="BATH: 3 AND UP">
</div>

</div>

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


</div>
`;


 function firstHome(firstFilter){
    return `
   
<div class="contain">
<div class="gal">
   <div class="gal-item">
   <img class="gal-image" src="${firstFilter.pic}" width="400" alt="">
   <div id="home-item">
            <h2>Price:${firstFilter.price}</h2>
            <h3>Bed:${firstFilter.beds}</h3>
            <h3>Bath:${firstFilter.bath}</h3>
            <input id="favButton" type="button" value ="ADD TO FAVORITE" 
            data-price="${firstFilter.price}" data-bed="${firstFilter.beds}" data-bath="${firstFilter.bath}">
            </div>
            </div>
            </div>
            
        </div>
        
       
       
        `;
       

}
























 
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
