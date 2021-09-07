import html from "html-literal";

export default (st) => html`


<div id = "filtereds">

<div class="filterOne">
${st.homePrice.map((firstFilter)=>{
    return firstHome(firstFilter)
})
.join("")

}
</div>
<div class="filterFour">

${st.homeBed.map((firstFilter)=>{
    return firstHome(firstFilter);
}).join("")
}</div>

<div class="filterSeven">

${st.homeBath.map((firstFilter)=>{
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



