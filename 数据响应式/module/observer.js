import defineReactive from "./defineReactive.js"
import arrayMethods from "./array.js"
import {def} from "./utils"

export default class observer {
  constructor(value) {
    //为observe的对象添加key为__ob__、value为observer实例的属性。
    def(value,"__ob__",this,false)
    
    if (value instanceof Array) {
      Object.setPrototypeOf(value,arrayMethods)
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
}