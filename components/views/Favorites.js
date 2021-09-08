import html from "html-literal";

export default (st) => html`





<div class="filterOne">

${st.dispHomes.map((firstFilterr)=>{
    
    return firstHome(firstFilterr);
    
})
.join("")

}
</div>



`;


 function firstHome(firstFilterr){
    return `
   
<div class="contain">
<div class="gal">
   <div class="gal-item">
   <img class="gal-image" src="${firstFilterr.pic}" width="400" alt="">
   <div id="home-item">
            <h2>Price:${firstFilterr.price}</h2>
            <h3>Bed:${firstFilterr.beds}</h3>
            <h3>Bath:${firstFilterr.bath}</h3>
            
            </div>
            </div>
            </div>
            
        </div>
        
       
       
        `;
       

}



