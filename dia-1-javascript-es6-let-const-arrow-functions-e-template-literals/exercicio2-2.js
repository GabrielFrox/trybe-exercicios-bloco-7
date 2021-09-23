let biggerWord = '';

const longestWord = frase => {
  const splited = frase.split(' ');
  for (let i = 0; i < splited.length; i += 1) {
    (splited[i].length > biggerWord.length) ? biggerWord = splited[i]: biggerWord;
  }
  console.log(biggerWord);
}

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'
