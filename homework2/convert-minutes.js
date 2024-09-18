function convertMinutes(num){
  let hours= floor(num/60);
  let minutes = num - 60*hours;
  return `"${hours} часов ${minutes} минут"`
}
console.log(convertMinutes(130)); // Ожидаемый вывод: "2 часов 10 минут"
