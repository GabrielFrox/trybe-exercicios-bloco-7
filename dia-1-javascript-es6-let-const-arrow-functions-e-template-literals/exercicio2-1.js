// const factorial = num => num > 1 ? num * factorial(num - 1) : 1; // Seguindo a lógica do gabarito
// console.log(factorial(4));



// solução com a lógica do gabarito
const factorial = number => {
  let result = 1;

  for (let index = 2; index <= number; index += 1) {
      result *= index;
  }

  return result;
}

console.log(factorial(5));