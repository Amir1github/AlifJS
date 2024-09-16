function method(role, login){
  if(login == false){
    return false;
  }else{
    if(role != "user" && role!="admin"){
      return false;
    }else{
      return true;
    }
  }
}
let role = "user";
let login = true;
console.log(method(role, login));
