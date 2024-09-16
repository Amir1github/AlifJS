function check(a){
  if(a ===false || a===0n || a===-0 || a===0|| a===''||a===null||a===undefined || isNaN(a)){
    return Boolean(a);   //false
  }else{
    return Boolean(a);   //true
    //Выводится true в случае непустой строки, любого числа кроме 0; -0, объекта и булевого значения true
  }
}
let a = 0;
console.log(`Булевое значение переменной - ${check(a)}`);
