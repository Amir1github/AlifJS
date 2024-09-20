account = {
  owner: "Alice",
  balance: 1000,
  deposit: function(num){
    this.balance+=num;
    return `Депозит: ${num}. Текущий баланс: ${this.balance}`;
  },
  withdraw: function(num){
    if(num < this.balance){
      this.balance-=num;
      return `Снято: ${num}. Текущий баланс: ${this.balance}`;
    }else{
      return `Недостаточно средств для снятия: ${num}`;
    }
  },
  getBalance: function(){
     return this.balance;
  }, 
  getOwner: function(){
      return this.owner;
  }
};
console.log(`Владелец аккаунта: ${account.getOwner()}`); // Ожидаемый вывод: Владелец аккаунта: Alice

console.log(account.deposit(500));      // Ожидаемый вывод: Депозит: 500. Текущий баланс: 1500
console.log(account.withdraw(200));     // Ожидаемый вывод: Снято: 200. Текущий баланс: 1300
console.log(account.withdraw(2000));    // Ожидаемый вывод: Недостаточно средств для снятия: 2000
console.log(account.getBalance()); // Ожидаемый вывод: 1300
