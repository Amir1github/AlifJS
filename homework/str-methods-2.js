function findstr(str){
  return str.indexOf("soccer"); //осуществляет поиск подстроки в строк
}
console.log(findstr("Lets play soccer"));
function subs(str){
   let sub = str.substr(0, 3);  //возвращает подстроку из строки
   return sub;
}
console.log(subs("Teacher"));

function check(str){
  if(str.includes("the")){
    return true;
  }else{
    return false;
  }
}
console.log(check("the watermelon"));
