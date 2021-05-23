import vnode from "./vnode";

//h("div",{},"文字")=>{sel:"div",data:{},children:undefined,text:"文字",elm:undefined}
//h("div",{},h())=>
//h("div",{},[])

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
  } else if (c instanceof Array) {
    // const arr = c.reduce((acc, cur) => acc.push(cur), []);
    // 使用reduce时大部分情况下不能用push，因为push的返回值是数组长度，而不是数组
    const arr = c.reduce((acc, cur) => acc.concat(cur), []);
    return vnode(sel, data, arr, undefined, undefined);
  }
}
