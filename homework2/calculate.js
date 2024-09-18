function calculate(num1, num2, operator){
  switch(operator){
    case '+':
      return num1+num2;
      break;
    case '-':
      return num1-num2;
      break;
    case '*':
      return num1*num2;
      break;
    case '/':
      if(isFinite(num1/num2)){
      return num1/num2;
      }else{
        return 'Ошибка: деление на ноль';
      }
      break;
    default:
      return 'Ошибка: некорректный оператор';
  }
}

console.log(calculate(10, 5, '+')); // Ожидаемый вывод: 15
console.log(calculate(10, 5, '-')); // Ожидаемый вывод: 5
console.log(calculate(10, 5, '*')); // Ожидаемый вывод: 50
console.log(calculate(10, 5, '/')); // Ожидаемый вывод: 2
console.log(calculate(10, 0, '/')); // Ожидаемый вывод: 'Ошибка: деление на ноль'
console.log(calculate(10, 5, '%')); // Ожидаемый вывод: 'Ошибка: некорректный оператор'
