import Observer from "./Observer.js"

export default function observe(value) {
  if (typeof value !== "object" || typeof value === "null") {
    return value;
  }

  var ob;
  if (typeof value.__ob__ !== 'undefined') {
    ob = __ob__;
  } else {
    ob = new Observer(value);
  }
  return ob;
}