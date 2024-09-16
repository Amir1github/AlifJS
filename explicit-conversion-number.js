function check(a){
  if(a ===undefined || a!=''|| isNumber(a)){
    return Number(a);   //NaN
  }else if(a===null || a===false){
    return Number(a);   //0
  }else{
    return Number(a); 
    //string содежащий число преобразуется в Number, объекты, true в 1
  }
}
let a = "ab";
console.log(`Number значение переменной - ${check(a)}`);
