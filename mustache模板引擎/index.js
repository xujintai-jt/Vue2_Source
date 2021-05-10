import Scanner from "./Scaner";
window.TemplateEngine = {
  render(template, data) {
    let arr = [];
    let start = "{{";
    let end = "}}";
    let scanner = new Scanner(template);


    while (scanner.tail !== "") {
      //若tail中不存在"{{"和"}}"，则scanUtil()
      if (scanner.tail.indexOf(start) === -1 && scanner.tail.indexOf(end) === -1) {
        const text = scanner.scanUtil();
        arr.push(["text", text]);
        continue
      }
        //若tail中"{{"的index小于"}}"的index,则scanUtil("{{")、scan("{{");(tail中"{{"不为-1)
        if (
          scanner.tail.indexOf(start) < scanner.tail.indexOf(end) &&
          scanner.tail.indexOf(start) !== -1
        ) {
          const text = scanner.scanUtil(start);
          arr.push(["text", text]);
          scanner.scan(start);
          continue
        } 
          //若tail中"}}"的index小于"{{"的index,则scanUtil("}}")、scan("}}")
          const name = scanner.scanUtil(end);
          arr.push(["name", name]);
          scanner.scan(end);
    }

    console.log(arr);
  },
};
