import observe from "./observe.js"

export default function defineReactive(targetObj, key, value) {
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