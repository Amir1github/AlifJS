function check(a){
switch(a){
  case false:
    return Boolean(false);         // false
    break;
  case undefined:
    return Boolean(undefined);     // false
    break;
  case null:
    Boolean(null);          // false
    break;
  case '':
    return Boolean('');            // false
    break;
  case NaN:
    return Boolean(NaN);           // false
    break;
  case 0:
    return Boolean(0);             // false
    break;
  case -0:
    return Boolean(-0);            // false
    break;
  case 0n:
    return Boolean(0n);            // false
    break;
  default:
    return true; 
    //Выводится true в случае непустой строки, любого числа кроме 0; -0, объекта и булевого значения true
}
}
let a = 0;
console.log(`Булевое значение переменной - ${check(a)}`);
