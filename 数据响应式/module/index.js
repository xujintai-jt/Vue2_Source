import observe from "./observe.js"

const obj = {
  sneakers: {
    nike: {
      shoesname1: "dunk SB",
      shoesname2: "air jordan",
    },
    adidas: "Yeezy",
  },
  name: "小明",
  arr:[1,2,3]
};



observe(obj)

obj.name
obj.sneakers.nike.shoesname1
obj.sneakers.nike.shoesname2 = "air force 1"
console.log(obj.sneakers.nike.shoesname2);
console.log(obj.__ob__.walk);
console.log(obj);
obj.arr[0]=100
obj.arr.push()
console.log(obj.arr);