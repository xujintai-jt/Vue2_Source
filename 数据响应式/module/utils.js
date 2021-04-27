function def(obj,key,value,enumerable) {
  Object.defineProperty(obj, key, {
    value,
    configurable: true,
    enumerable
  })
}

export {def}