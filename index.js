import { Header, Nav, Main, Footer } from "./components"; //import this from components

//where we want to render the info
function render() {
  document.querySelector("#root").innerHTML = `
    ${Header()}
    ${Nav()}
    ${Main()}
    ${Footer()}
    `;
}

render();
