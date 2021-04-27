const obj = {
  sneakers: {
    nike: {
      shoesname1: "dunk SB",
      shoesname2: "air jordan",
    },
    adidas: "Yeezy",
  },
  name: "小明",
  arr:[2,4,6,8,9]
};

function defineReactive(targetObj, key, value) {
  observe(value)
  Object.defineProperty(targetObj, key, {
    get() {
      console.log(`${key}属性被读取了`);
      return value;
    },
    set(newValue) {
      if (newValue === value) {
        return;
      }
      console.log(`${key}属性被修改了`);
      observe(newValue);
      value = newValue;
    },
  });
}

function observe(value) {
  if (typeof value !== "object" || typeof value === "null") {
    return value;
  }

  var ob;
  if (value.__ob__ !== undefined) {
    ob = __ob__;
  } else {
    ob = new observer(value);
  }
  return ob;
}

class observer {
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


observe(obj)

obj.name
obj.sneakers.nike.shoesname1
obj.sneakers.nike.shoesname2 = "air force 1"
console.log(obj.sneakers.nike.shoesname2);
console.log(obj.__ob__.walk);
obj.arr[0] = 99
console.log(obj.arr[0]); 