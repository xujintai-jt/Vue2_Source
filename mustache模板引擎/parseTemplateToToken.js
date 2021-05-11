import Scanner from "./Scanner";
import nextTokens from "./nextTokens"

export default function parseTemplateToToken(template) {
  let tokens = [];
  //创建收集器
  let scanner = new Scanner(template);

  while (scanner.pos !== scanner.templateStr.length) {
    //存在"{{"和"}}"，则scan一套"{{"和"}}"
    const text = scanner.scanUtil("{{");
    //如果不是空字符串，则添加
    if (text) {
      tokens.push(["text", text]);
    }
    //跨过"{{"大括号
    scanner.scan("{{");

    const name = scanner.scanUtil("}}");
    if (name) {
      if (name[0] === "#") {
        tokens.push(["#", name.substring(1)]);
      } else if (name[0] === "/") {
        tokens.push(["/", name.substring(1)]);
      } else {
        tokens.push(["name", name]);
      }
    }
    //跨过"}}"大括号
    scanner.scan("}}");
  }
  
  //返回折叠处理的tokens
  return nextTokens(tokens);
}
