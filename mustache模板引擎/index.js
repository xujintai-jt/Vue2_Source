import Scanner from "./Scaner";
window.TemplateEngine = {
  render(template, data) {
    let arr = [];
    let start = "{{";
    let end = "}}";
    let scanner = new Scanner(template);

    while (scanner.pos !== scanner.templateStr.length) {
      //存在"{{"和"}}"，则scan一套"{{"和"}}"
      const text = scanner.scanUtil(start);
      //如果不是空字符串，则添加
      if (text) {
        arr.push(["text", text]);
        scanner.scan(start);
      }

      const name = scanner.scanUtil(end);
      if (name) {
        arr.push(["name", name]);
        scanner.scan(end);
      }
    }

    console.log(arr);
  },
};
