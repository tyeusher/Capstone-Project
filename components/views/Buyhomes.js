import html from "html-literal";

import home1 from "/images/he.jpg";
import home2 from "/images/he2.jpg";
import home3 from "/images/he3.jpg";
import home4 from "/images/he4.jpg";
import home5 from "/images/he5.jpg";
import home6 from "/images/he6.jpg";
import home7 from "/images/marsHome3.jpg";

export default (st) => html`
<div class="buy-home-title">
<h3 class="divider">BUY HOMES</h3>
</div>
  <div class="buy-home">
    <div class="home-grid">
      <div class="price-grid">
        <input
          id="submitButtonOne"
          class="budden filterButton"
          type="button"
          value="PRICE: 100K - 300K"
          data-min=1
          data-max=3
          data-filter="price"
        />
        <input
          id="submitButtonFour"
          class="budden filterButton"
          type="button"
          value="PRICE: 400K - 600K"
          data-min=4
          data-max=6
          data-filter="price"
        />
        <input
          id="submitButtonSeven"
          class="budden filterButton"
          type="button"
          value="PRICE: 700K AND UP"
          data-min=7
          data-max=999
          data-filter="price"
        />
      </div>
      <div class="beds-grid">
        <input
          id="ButtonBedOne"
          class="budden filterButton"
          type="button"
          value="BEDS: 1 - 3"
          data-min=1
          data-max=3
          data-filter="beds"
        />
        <input
          id="ButtonBedFour"
          class="budden filterButton"
          type="button"
          value="BEDS: 4 - 6"
          data-min=4
          data-max=6
          data-filter="beds"
        />
        <input
          id="ButtonBedSeven"
          class="budden filterButton"
          type="button"
          value="BEDS: 7 AND UP"
          data-min=7
          data-max=999
          data-filter="beds"
        />
      </div>
      <div class="baths-grid">
        <input
          id="ButtonBathOne"
          class="budden filterButton"
          type="button"
          value="BATHS: 1 - 2"
          data-min=1
          data-max=2
          data-filter="baths"
        />
        <input
          id="ButtonBathThree"
          class="budden filterButton"
          type="button"
          value="BATH: 3 AND UP"
          data-min=3
          data-max=999
          data-filter="baths"
        />
        <input
          id="buttonAllHomes"
          class="budden filterButton"
          type="button"
          value="ALL"
          data-min=0
          data-max=0
          data-filter="allHomes"
        />
      </div>
    </div>
    <div class="filterOne">
        ${st.displayedHomes
          .map((firstFilter) => {
            return firstHome(firstFilter);
          })
          .join("")}
      </div>
    
  </div>
`;

function firstHome(firstFilter) {
  return `
   
<div class="contain">
   <div class="gal-item">
   <img class="gal-image" src="${firstFilter.pic}" width="400" alt="">
   <div id="home-item">
            <h2>Price:${firstFilter.price}00,000</h2>
            <h3>Bed:${firstFilter.beds}</h3>
            <h3>Bath:${firstFilter.bath}</h3>
            <input id="favButton" type="button" value ="ADD TO FAVORITE" 
            data-price="${firstFilter.price}" data-bed="${firstFilter.beds}" data-bath="${firstFilter.bath}">
            </div>
            </div>
            
            
        </div>

        
        `;
}
