import parseTemplateToToken from "./parseTemplateToToken";


window.TemplateEngine = {
  render(template, data) {
    let tokens = parseTemplateToToken(template)
    console.log(tokens);
  }
}
