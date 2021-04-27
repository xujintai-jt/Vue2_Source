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

  //改写数组方法
  def(
    arrayMethods,
    item,
    function () {
      originalMethods.apply(this, arguments);
      console.log("我是被改写的数组方法");
    },
    false
  );
});
console.log(arrayMethods);

export default arrayMethods;
