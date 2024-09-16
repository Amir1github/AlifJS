function upperlower(str1, str2){
  console.log(str1.toUpperCase(), str2.toLowerCase());
}
str1 = "hello";
str2 = "HELLO";
upperlower(str1, str2);
function beplace(str){
  let a = str.replace("Hot", "Cold");  
  a = a.replaceAll(" ", '') //удаление пробелов
  console.log(a);
}
str3 = "Hot weather";
beplace(str3);
function Substract(str){
  return str.split(' ');
}
str4="Tommorow is Tuesday";
console.log(Substract(str4));
