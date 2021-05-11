export default function nextTokens(tokens) {
  let resTokens = [];
  //栈结构、存放"#"的token
  let stack = [];

  tokens.forEach((token, index) => {
    switch (token[0]) {
      case "#":
        //创建下标为2的数组，进行收集tokens
        token[2] = [];
        stack.push(token);
        break;
      case "/":
        let res = stack.pop();
        //将弹出的项加入结果数组中
        stack.length > 0
          ? stack[stack.length - 1][2].push(res)
          : resTokens.push(res);
        break;
      default:
        stack.length > 0
          ? stack[stack.length - 1][2].push(token)
          : resTokens.push(token);
    }
  });

  return resTokens;
}
