import html from "html-literal";

let price = 0;
let bath = 0;
let bed = 0;
export default (st) => html`



<div id = "filtereds">



<div class="filterOne">

${st.homePrice.map((firstFilterPrice)=>{
    price = firstFilter
    
})
.join("")

}
</div>
<div class="filterFour">

${st.homeBed.map((firstFilterBed)=>{
    bed = firstFilterBed;
}).join("")
}</div>

<div class="filterSeven">

${st.homeBath.map((firstFilter)=>{
    return firstHome(price, bed, firstFilter);
}).join("")

}

</div>


</div>
`;


 function firstHome(price, bed, firstFilter){
    return `
   
<div class="contain">
<div class="gal">
   <div class="gal-item">
   <img class="gal-image" src="${firstFilter.pic}" width="400" alt="">
   <div id="home-item">
            <h2>Price:${price}</h2>
            <h3>Bed:${bed}</h3>
            <h3>Bath:${firstFilter}</h3>
            
            </div>
            </div>
            </div>
            
        </div>
        
       
       
        `;
       

}



