import { def } from "./utils";

//使arrayMethods对象的__proto__指向Array.prototype
const arrayMethods = Object.setPrototypeOf({}, Array.prototype);
const ChangeMethods = [
  "push",
  "pop",
  "unshift",
  "shift",
  "sort",
  "splice",
  "reverse",
];

ChangeMethods.forEach((item) => {
  //保存数组原始方法
  const originalMethods = arrayMethods[item];

  //将需要改写的数组方法定义到arrayMethods上
  def(
    arrayMethods,
    item,
    //闭包函数：引用了originalMethods
    function () {
      //执行数组之前的功能
      const result = originalMethods.apply(this, arguments);
      const ob = this.__ob__

      //定义添加的数组项
      let inserterd = [];

      //三种会添加项的数组方法
      switch (item) {
        case "push":
          inserterd = [...arguments];
          break;
        case "splice":
          //splice的格式是(index,删除目标,增加目标...)
          inserterd = [...arguments].slice(2);
          break;
        case "unshift":
          inserterd = [...arguments];
          break;
      }

      if (inserterd.length > 0) {
        //将添加的项进行observe
        ob.arrayWalk(inserterd)
      }

      console.log("我是被改写的数组方法");

      //执行数组之前的功能(返回值)
      return result;
    },
    false
  );
});
console.log(arrayMethods);

export default arrayMethods;
