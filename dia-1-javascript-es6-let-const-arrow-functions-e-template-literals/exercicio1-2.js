const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

const sortedArray = () => {
  const newArray = oddsAndEvens.sort(function(a, b) {return a - b}) // https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly - Referênciei pois não entendi 100% como funciona
  return newArray
}
console.log(`Os números ${sortedArray()} se encontram ordenados de forma crescente!`)