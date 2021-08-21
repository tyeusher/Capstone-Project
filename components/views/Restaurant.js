import html from "html-literal"
import lord from "../../images/lord.jpg";
import fat from "../../images/fat-man.jpg";
import rest from "../../images/rest.jpg";
import rest2 from "../../images/restt4.jpg";
import rest3 from "../../images/restt5.jpeg";
import rest4 from "../../images/restt8.jpg";
import rest5 from "../../images/rest.jpg";
import rest6 from "../../images/restt10.jpg";
import rest7 from "../../images/rest11.jpg";
import rest8 from "../../images/restt13.jpg";
export default () => html
`

<h3 class="divider">Open Restaurants</h3>

<div class="img-area">

<div class="single-img"><img src="" width="250" alt=""></div>
  <div class="single-img"><img src="" width="250" alt=""></div>
  <div class="single-img"><img src="" width="250" alt=""></div>


  </div>
</div>

<h3 class="divider">Restaurants Coming Soon</h3>


<div class="restView">
<div class="container">

  <a href="#popup1" data-lightbox="homePortfolio">
    <img src="${rest}"/>
  </a>

  <div id="popup1" class="overlay">
    <div class="popup">
      <h2>FoodAholic</h2>
      <a class="close" href="#">&times;</a>
      <div class="content">
        <div class="card" style="width: 18rem;">
          <img src="${rest}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">FoodAholic</h5>
            <p class="card-text">A restaurant serving hamburgers and Hot Dogs.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>

    </div>

  </div>

  <a href="#popup2" data-lightbox="homePortfolio" class="vertical">
    <img src="${rest2}"/>
  </a>

  <div id="popup2" class="overlay">
    <div class="popup">
      <h2>Mountain Ivory</h2>
      <a class="close" href="#">&times;</a>
      <div class="content">
        <div class="card" style="width: 18rem;">
          <img src="${rest2}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Mountain Ivory</h5>
            <p class="card-text">Italian restaurant with niv=ce views of the city.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>

    </div>

  </div>

  <a href="#popup3" data-lightbox="homePortfolio" class="horizontal">
    <img src="${rest3}"/>
  </a>

  <div id="popup3" class="overlay">
    <div class="popup">
      <h2>Leonardoe</h2>
      <a class="close" href="#">&times;</a>
      <div class="content">
        <div class="card" style="width: 18rem;">
          <img src="${rest3}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Leonardoe</h5>
            <p class="card-text">Breakfast restuarant serving waffles, pancakes and breakfast burritos.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>

    </div>

  </div>

  <a href="#popup4" data-lightbox="homePortfolio" class="big">
    <img src="${rest4}"/>
  </a>

  <div id="popup4" class="overlay">
    <div class="popup">
      <h2>Camp Crystal</h2>
      <a class="close" href="#">&times;</a>
      <div class="content">
        <div class="card" style="width: 18rem;">
          <img src="${rest4}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Camp Crystal</h5>
            <p class="card-text">Buffet Restaurant serving a variety of dishes..</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>

    </div>

  </div>

  <a href="#popup5" data-lightbox="homePortfolio">
    <img src="${rest5}"/>
  </a>
  <div id="popup5" class="overlay">
    <div class="popup">
      <h2>Lovery</h2>
      <a class="close" href="#">&times;</a>
      <div class="content">
        <div class="card" style="width: 18rem;">
          <img src="${rest5}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Lovery</h5>
            <p class="card-text">A Belizean restaurant serving belizean dishes.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>

    </div>

  </div>

  <a href="#popup6" data-lightbox="homePortfolio" class="vertical">
    <img src="${rest6}"/>
  </a>
  <div id="popup6" class="overlay">
    <div class="popup">
      <h2>Mi Amore</h2>
      <a class="close" href="#">&times;</a>
      <div class="content">
        <div class="card" style="width: 18rem;">
          <img src="${rest6}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Mi Amore</h5>
            <p class="card-text">A Mexican restaurant serving  all mexxican dishes.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>

    </div>

  </div>

  <a href="" data-lightbox="homePortfolio">
    <img src="${rest7}"/>
  </a>
  <a href="" data-lightbox="homePortfolio">
    <img src="C:\Users\Tye\Desktop\tester2.jpg"/>
  </a>

  <a href="#popup7" data-lightbox="homePortfolio" class="horizontal">
    <img src=""/>
  </a>

  <div id="popup7" class="overlay">
    <div class="popup">
      <h2>Here i am</h2>
      <a class="close" href="#">&times;</a>
      <div class="content">
        <div class="card" style="width: 18rem;">
          <img src="${rest7}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div id="Arrows">
        <img id="prev" src=""/>
        <img id="next" src=""/>

      </div>
    </div>

  </div>

  <a href="#popup44" data-lightbox="homePortfolio" class="vertical">
    <img src="${rest8}"/>
  </a>

  <div id="popup44" class="overlay">
    <div class="popup">
      <h2>Here i am</h2>
      <a class="close" href="#">&times;</a>
      <div class="content">
        <div class="card" style="width: 18rem;">
          <img src="${rest8}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div id="Arrows">
        <img id="prev" src="https://img.icons8.com/ios-glyphs/30/000000/chevron-left.png"/>
        <img id="next" src="https://img.icons8.com/ios-glyphs/30/000000/chevron-right.png"/>

      </div>
    </div>

  </div>

  <a href="" data-lightbox="homePortfolio">
    <img src="${rest5}"/>
  </a>


  <a href="#popup8" data-lightbox="homePortfolio" class="big">
    <${rest5}"/>
  </a>

  <div id="popup8" class="overlay">
    <div class="popup">
      <h2>Here i am</h2>
      <a class="close" href="#">&times;</a>
      <div class="content">
        <div class="card" style="width: 18rem;">
          <img src="${rest5}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div id="Arrows">
        <img id="prev" src=""/>
        <img id="next" src=""/>

      </div>
    </div>

  </div>

  <a href="#popup9" data-lightbox="homePortfolio" class="big">
    <img src="${rest4}"/>
  </a>

  <div id="popup9" class="overlay">
    <div class="popup">
      <h2>Here i am</h2>
      <a class="close" href="#">&times;</a>
      <div class="content">
        <div class="card" style="width: 18rem;">
          <img src="${rest4}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div id="Arrows">
        <img id="prev" src=""/>
        <img id="next" src=""/>

      </div>
    </div>

  </div>

  <a href="#popup10" data-lightbox="homePortfolio" class="big">
    <img src="${rest3}"/>
  </a>

  <div id="popup10" class="overlay">
    <div class="popup">
      <h2>Here i am</h2>
      <a class="close" href="#">&times;</a>
      <div class="content">
        <div class="card" style="width: 18rem;">
          <img src="${rest3}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div id="Arrows">
        <img id="prev" src=""/>
        <img id="next" src=""/>

      </div>
    </div>

  </div>

  <a href="#popup11" data-lightbox="homePortfolio" class="horizontal">
    <img src="${rest5}"/>
  </a>

  <div id="popup11" class="overlay">
    <div class="popup">
      <h2>Here i am</h2>
      <a class="close" href="#">&times;</a>
      <div class="content">
        <div class="card" style="width: 18rem;">
          <img src="${rest5}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div id="Arrows">
        <img id="prev" src=""/>
        <img id="next" src=""/>

      </div>
    </div>

  </div>

  <a href="#popup12" data-lightbox="homePortfolio" class="vertical">
    <img src=""/>
  </a>

  <div id="popup12" class="overlay">
    <div class="popup">
      <h2>Here i am</h2>
      <a class="close" href="#">&times;</a>
      <div class="content">
        <div class="card" style="width: 18rem;">
          <img src="" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div id="Arrows">
        <img id="prev" src=""/>
        <img id="next" src=""/>

      </div>
    </div>

  </div>




</div>

<h3 class="divider">About Mars</h3>
<div class="about-mars">
  <p>What is Lorem Ipsum?
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

      Why do we use it?
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

      </p>

</div>

</div>

`;
