calculate = {
  num1: null,
  num2: null,
  setNumbers: function(a,b){
    this.num1 = a;
    this.num2 = b;
  },
  add: function(){
    return this.num1+this.num2;
  },
  substract: function(){
    return this.num1 - this.num2;
  },
  multiply: function(){
    return this.num1*this.num2;
  },
  divide: function(){
    return this.num1/this.num2;
  }
}
calculate.setNumbers(10, 5);
console.log(calculate.add(), calculate.substract(), calculate.multiply(), calculate.divide());
