let formatString = str => {return str.trim().toUpperCase()};
console.log(formatString("   hello world   "));  // Ожидаемый вывод: "HELLO WORLD"
console.log(formatString("  JavaScript   "));    // Ожидаемый вывод: "JAVASCRIPT"
console.log(formatString("    openai  "));       // Ожидаемый вывод: "OPENAI"
