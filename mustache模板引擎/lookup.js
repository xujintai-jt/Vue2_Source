export default function lookup(dataObj, keyName) {
  //例:拥有obj对象，以及"a.b.c",访问obj.a.b.c;
  //若keyName不为"xxx.xxx"形式，则直接返回值
  if (keyName.indexOf(".") > 0) {
    let res = "";
    res = keyName.split(".").reduce((acc, cur) => {
      return acc[cur];
    }, dataObj);
    return res;
  }

  return dataObj[keyName];
}
