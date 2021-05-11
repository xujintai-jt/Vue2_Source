export default function nextTokens(tokens) {
  let resTokens = [];
  //栈结构、存放"#"的token
  let stack = [];
  //当前收集器
  let collector = resTokens

  tokens.forEach((token, index) => {
    switch (token[0]) {
      case "#":
        //创建下标为2的数组，进行收集tokens
        stack.push(token);
        collector.push(token)
        collector = token[2] = []
        break;
      
      case "/":
        stack.pop();
        //"#"弹出，根据stack内容判断收集器
        collector = stack.length > 0
        ? stack[stack.length - 1][2]
        : resTokens
        break;
      
      default:
        collector.push(token);
    }
  });








  // let resTokens2 = [];
  // tokens.forEach((token, index) => {
  //   switch (token[0]) {
  //     case "#":
  //       //创建下标为2的数组，进行收集tokens
  //       token[2] = [];
  //       stack.push(token);
  //       break;
  //     case "/":
  //       let res = stack.pop();
  //       //将弹出的项加入结果数组中
  //       stack.length > 0
  //         ? stack[stack.length - 1][2].push(res)
  //         : resTokens2.push(res);
  //       break;
  //     default:
  //       stack.length > 0
  //         ? stack[stack.length - 1][2].push(token)
  //         : resTokens2.push(token);
  //   }
  // });


  return resTokens;
}
