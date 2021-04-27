//使arrayMethods对象的__proto__指向Array.prototype
const arrayMethods= Object.setPrototypeOf({}, Array.prototype);
const ChangeMethods=["push","pop","unshift","shift","sort","splice","reverse"]
console.log(1);
ChangeMethods.forEach(item => {
  arrayMethods[item] = function () {
    console.log("我是被改写的数组方法");
  }
})
console.log(arrayMethods);

export default  arrayMethods 