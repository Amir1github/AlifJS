function maxmin(arr){
  return `Макс.число - ${Math.max.apply(null, arr)}, Мин.число - ${Math.min.apply(null, arr)}`;
}
function roundnum(a){
    return `Ближайшее целое - ${Math.round(a)}, Округление вверх-${Math.ceil(a)}, Округление вниз - ${Math.floor(a)}`;
}
function Sqrt(a) {
    return `Квадратный корень - ${Math.sqrt(a)}`;
}
function RandomNum(range) {
    return `Генератор числа - ${Math.floor(Math.random() * range)});
}
let arr = {1, 2, 3, 4, 5};
console.log(maxmin(arr));
console.log(roundnum(3.4));
console.log(Sqrt(16));
console.log(RandomNum(10));
