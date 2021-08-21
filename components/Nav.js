import html from "html-literal";

export default (links) => html`
<!-- passed in link -->
<!-- we are mapping over the links in the links .js and putting each title and text -->
<div class="top-nav">
    <div class="title"><h1>after earth</h1></div>
  <ul>

  ${links.map(
        (link) =>
          `<li><a href="/${link.title}"title="${link.title}" data-navigo><span>${link.text}</span></a></li>`
      )}

  </ul>
  </div>

<!-- <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1"
        >AFTER <span class="earth">EARTH</span></span>
       <ul>
       ${links.map(
        (link) =>
          `<a href="/${link.title}" title="${link.title}" data-navigo><span>${link.text}</span></a>`
      )}
       </ul>
    </div>
  </nav> -->
`;

//we have a restaurant on our views for our original html and now we have a store to link it..view is what it will be link to
