import defineReactive from "./defineReactive.js"

export default class observer {
  constructor(value) {
    //为observe的对象添加key为__ob__、value为observer实例的属性。
    Object.defineProperty(value, "__ob__", {
      value: this,
      configurable: false,
      enumerable:false
    })
    this.walk(value)
  }

  walk(targetObj) {
    for (let key in targetObj) {
      defineReactive(targetObj,key,targetObj[key])
    }
  }
}