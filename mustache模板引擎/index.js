import Scanner from "./Scaner";
window.TemplateEngine = {
  render(template, data) {
    let arr = [];
    let start = "{{";
    let end = "}}";
    let scanner = new Scanner(template);

    while (scanner.tail !== "") {
      //若tail中不存在"{{"和"}}"，则scanUtil()
      const flag = scanner.tail.indexOf(start) < 0 && scanner.tail.indexOf(end) < 0;
      if (flag) {
        const text = scanner.scanUtil();
        arr.push(["text", text]);
        continue;
      }
     //存在"{{"和"}}"，则scan一套"{{"和"}}"
      const text = scanner.scanUtil(start);
      arr.push(["text", text]);
      scanner.scan(start);
      const name = scanner.scanUtil(end);
      arr.push(["name", name]);
      scanner.scan(end);
    }

    console.log(arr);
  },
};
