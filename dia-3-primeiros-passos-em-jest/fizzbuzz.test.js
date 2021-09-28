function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

it('Testa se o resultado de um número divisível por 3 e 5 está dentro do esperado', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
});

it('Teste de o resultado de um número divisível por 3 está dentro do esperado', () => {
  expect(myFizzBuzz(9)).toBe('fizz');
});

it('Teste de o resultado de um número divisível por 5 está dentro do esperado', () => {
  expect(myFizzBuzz(10)).toBe('buzz');
});

it('Teste de o resultado de um número não divisível por 3 ou 5 está dentro do esperado', () => {
  expect(myFizzBuzz(7)).toBe(7);
});

it('Teste de o resultado de de uma string passada retorna false', () => {
  expect(myFizzBuzz('teste')).toBeFalsy();
});
