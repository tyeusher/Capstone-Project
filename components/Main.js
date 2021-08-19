import html from "html-literal";
import * as views from "./views";

export default st => html`
<!-- //we are exporting state -->
  ${views[st.view](st)}
`;
