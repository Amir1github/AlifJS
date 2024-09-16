function method(a, b, operator){
  if(Number.IsInteger(a) && Number.IsInteger(b)){
    switch (operator){
    case "+":
      return plus(a,b);
      break;
    case "-":
      return minus(a,b);
      break;
    case "*":
      return multiply(a,b);
      break;
    case "/":
      return divide(a,b);
      break;
     default:
       return "Арифметический оператор неверен!";
  }
  }else{
    return "Операнды не являются числами!";
  }
}
plus(a, b){
  return a+b;
}
minus(a, b){
  return a+b;
}
multiply(a, b){
  return a+b;
}
divide(a, b){
  if(isFinite(a/b){
    return a/b;
  }else{
    return "Деление на ноль невозможно!";
  }
}
let a = 6;
let b=0;
let operator = "/";
method(a, b, operator);
