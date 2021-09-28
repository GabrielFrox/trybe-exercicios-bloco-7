// Função de troca de caracteres da frase pelos respectivos números
function charsTrade(chars) {
  const equal = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  if (chars in equal) return equal[chars];
  return chars;
}

// Função de identificar caracteres a serem substituídos
function trade(splitedWord) {
  let na = [];
  for (let i = 0; i < splitedWord.length; i += 1) {
    na.push(charsTrade(splitedWord[i]));
  }
  return na;
}

// Desafio 9 - codificação
function encode(palavra) {
  let palavraSplit = palavra.split('');
  let codWord = trade(palavraSplit);
  let palavraJoined = codWord.join('');
  return palavraJoined;
}

// Decodificação
function decode(cod) {
  let splitedWord = cod.split('');
  let uncodWord = trade(splitedWord);
  let newWordJoined = uncodWord.join('');
  return newWordJoined;
}

// Testes abaixo

it('Testa se encode é uma função', () => {
  expect(typeof(encode)).toBe('function');
});

it('Testa se decode é uma função', () => {
  expect(typeof(decode)).toBe('function');
});

it('Testa se encode converte a, e, i, o, u para 1, 2, 3, 4, 5', () => {
  expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
});

it('Testa se decode converte 1, 2, 3, 4, 5 para a, e, i, o, u', () => {
  expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
});

it('Testa se tatetitotu retorna t1t2t3t4t5', () => {
  expect(encode('tatetitotu')).toBe('t1t2t3t4t5');
});

it('Testa se t1t2t3t4t5 retorna tatetitotu', () => {
  expect(decode('t1t2t3t4t5')).toBe('tatetitotu');
});

it('Teste se o número de caracteres continua o mesmo', () => {
  expect(encode('abebibobu').length).toBe(9);
})
