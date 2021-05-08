import defineReactive from "./defineReactive.js"
import arrayMethods from "./array.js"
import {def} from "./utils"
import observe from "./observe.js"

export default class observer {
  constructor(value) {
    //为observe的对象添加key为__ob__、value为observer实例的属性。
    def(value,"__ob__",this,false)
    
    if (value instanceof Array) {
      Object.setPrototypeOf(value, arrayMethods)
      //改变数组对象的原型，使value.__proto__===arrayMethods,而arrayMethods.__proto__===Array.prototype
      //arrayMethods对象中含有已改写的七种数组方法。当value调用七种数组方法时，会调用arrayMethods对象中的方法；
      //当value调用非七种数组方法时，会通过原型链访问Array.prototype中的数组方法。
      this.arrayWalk(value)
    }
    else {
      this.walk(value)
    }
  }

  walk(targetObj) {
    for (let key in targetObj) {
      defineReactive(targetObj,key,targetObj[key])
    }
  }

  arrayWalk(targetArray) {
    for (let i = 0; i < targetArray.length; i++){
      observe(targetArray[i])
    }
  }
}