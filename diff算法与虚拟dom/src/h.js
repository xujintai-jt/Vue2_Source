import vnode from "./vnode";

//h("div",{},"文字")=>{sel:"div",data:{},children:undefined,text:"文字",elm:undefined}
//h("div",{},h())=>
//h("div",{},[h(),h()...])

export default function h(sel, data, c) {
  //1.此函数只考虑三个参数的情况
  if (arguments.length !== 3) throw Error("此h函数必须传入三个参数！");

  //2.判断第三个参数情况
  //2.1 第三个参数为text
  if (typeof c === "number" || typeof c === "string") {
    return vnode(sel, data, undefined, c, undefined);
  }
  //2.2 第三个参数为h(),h()的返回参数为对象
  else if (typeof c === "object" && !(c instanceof Array)) {
    return vnode(sel, data, c, undefined, undefined);
  }
  //2.3 第三个参数为数组,[h(),h()...]
  else if (c instanceof Array) {
    // 使用reduce时大部分情况下不能用push而是用concat，因为push的返回值是数组长度，而不是数组
    // const arr = c.reduce((acc, cur) => { acc.concat(cur) }, []);
    // 增加判断
    const arr=[]
    for (var i = 0; i < c.length; i++){
  
      if (typeof c[i] === "object" && c[i].hasOwnProperty("sel")) {
        arr.push(c[i])
      }
      else {    console.log(c[i]);
        throw Error(`传入数组的第${i+1}项参数类型不符合！`);
      }
    }
    return vnode(sel, data, arr, undefined, undefined);
  }

  else {
    throw Error("传入的第三个参数类型不符合！");
  }
}
