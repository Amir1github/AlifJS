let generateId = function(){
  let num = Math.floor(Math.random() * 9999);
  return `id-${num}`;
}
console.log(generateId());
console.log(generateId()); 
