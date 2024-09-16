function UnarOperation(num){
  let plus = +num;   //Если num не является числом оператор + приведет его к Number
  let minus = -num;  //Меняет знак num
  return `${plus}, ${minus}`;
}
function IncrimentDicriment(num){
  console.log(num++);  //В начале выводит num, а после прибавляет 1
  console.log(++num);  //В начале прибавляет 1, а после выводит num
  console.log(num--);
  console.log(--num);
  // то же самое с --
}
let num = 10;
console.log(UnarOperation(num));
IncrimentDicriment(num);
