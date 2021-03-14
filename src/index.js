module.exports = function check(str, bracketsConfig) {
  //let brackets = "[]{}()<>"
  //let brackets = bracketsConfig.reduce( (a,b) => String(a) + String(b) ).replaceAll(',','');
  let brackets = '';
  for (let i in bracketsConfig) {
  	for (let j in bracketsConfig[i]) {
    	brackets += bracketsConfig[i][j];
    }
  }
  let stack = [];

  for (let bracket of str) {
    let bracketsIndex = brackets.indexOf(bracket);

    if (bracketsIndex % 2 === 0 ) {
        stack.push(bracketsIndex + 1);
    } else {
      if(stack.pop() !== bracketsIndex) {
        return false;
      }
    }
  }
  console.log(stack);
  return stack.length === 0;
}
