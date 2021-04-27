import observer from "./observer.js"

export default function observe(value) {
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