import html from "html-literal";

export default (links) => html`
<!-- passed in link -->
<!-- we are mapping over the links in the links .js and putting each title and text -->

<nav>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      ${links.map(
        link =>
          `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
      )}
    </ul>
  </nav>

`;

//we have a restaurant on our views for our original html and now we have a store to link it..view is what it will be link to
