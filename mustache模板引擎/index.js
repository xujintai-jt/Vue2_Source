import parseTemplateToToken from "./parseTemplateToToken";
import renderTemplate from "./renderTemplate"


window.TemplateEngine = {
  render(template, data) {
    let tokens = parseTemplateToToken(template)
    let resDOM = renderTemplate(tokens,data)
    console.log(tokens);
    // console.log(resDOM);
  }
}
