
let testArr=[{name:'小明',age:18},{name:'小红',age:20},{name:'小强',age:22}]



let res = ""

function template(item:object) {
  let {name,age}=item
  return [
    "<div>",
       "<span>"+name, 
       "</span>",
       "<span>"+age, 
       "</span>",
    "</div>",
  ].join("")
}

testArr.forEach(item => {
  res+=template(item)
})

document.querySelector("div").innerHTML = res
