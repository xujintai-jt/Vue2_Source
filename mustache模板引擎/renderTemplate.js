import lookup from './lookup'

export default function renderTemplate(tokens, data) {
  let resStr = "";
  tokens.forEach((item, index) => {
    if (item[0] === "text") {
      resStr += item[1];
    } else if (item[0] === "name") {
      resStr +=  lookup(data,item[1])
    } else if (item[0] === "#") {
      //item[1]：数组名，student:[{1},{2}...];
      //item[2]: 子tokens
      data[item[1]].forEach((itemObj) => {
        //itemObj:数组项，student:[{1},{2}...]中的{1},{2}...
        resStr += renderTemplate(item[2], itemObj);
      });
    }
  });

  console.log(resStr);
  return resStr;
}
