let calculateDiscount = function(price, discount){
  let sum =price -  price / 100 * discount;
  return sum;
}
let price=1000;
let discountPercentage = 15;
console.log(calculateDiscount(price, discountPercentage));

