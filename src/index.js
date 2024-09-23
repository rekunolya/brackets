module.exports = function check(str, bracketsConfig) {

  // your solution
  let openBrackets = [];
  let closeBrackets = [];
  let openCloseBrackets = [];
  let brackets = [];
  let indexOpen;
  let indexClose;
  for(let i = 0; i < bracketsConfig.length; i++){
    if(bracketsConfig[i][0] === bracketsConfig[i][1]){
      openCloseBrackets.push(bracketsConfig[i][0]);
    } else {
    openBrackets.push(bracketsConfig[i][0]);
    closeBrackets.push(bracketsConfig[i][1]);
    }
  } 

  let string = str.split('');

  for(let i = 0; i < string.length; i++){
    if(openBrackets.includes(string[i]) || openCloseBrackets.includes(string[i])){
      if(brackets.includes(string[i]) && openCloseBrackets.includes(string[i])){
        brackets.pop();
        continue;
      } else {
        brackets.push(string[i]);
        continue;
      }     
    } 

    if(closeBrackets.includes(string[i])){
      indexClose = closeBrackets.indexOf(string[i]);
    }
    indexOpen = openBrackets.indexOf(brackets[brackets.length-1]);
   
    if(indexClose === indexOpen){
      brackets.pop();
    } else {
      return false;
    }
  }
  if(brackets.length === 0){
    return true;
  } else {
    return false;
  }
}
