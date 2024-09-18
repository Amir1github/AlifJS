var errorMessage = function (str){
  if(str == 'error'){
    return "Не известная ошибка";
  }
}
var pendingMessage = function (str){
  if(str == 'pending'){
    return "Транзакция в ожидании";
  }
}
var sucessMessage = function (str){
  if(str == 'sucess'){
    return "Транзакция прошла успешно";
  }
}
var feildMessage = function (str){
  if(str == 'feild'){
    return  "Транзакция не прошла успешно";
  }
}
var otherMessage = function (str){
  if(str == 'other'){
    return "Неизвестный статус";
  }
}
console.log(`${errorMessage('error')}, 
${pendingMessage('pending')}, 
${sucessMessage('sucess')}, 
${feildMessage('feild')}, 
${otherMessage('other')}`);
