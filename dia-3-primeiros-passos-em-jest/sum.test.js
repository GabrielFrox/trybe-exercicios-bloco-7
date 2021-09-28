const sum = require('./sum');


describe('Exercicio 1', () => {
  
  it('Se o retorno dos parâmetros 4 e 5 é igual a 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('Se o retorno de 0 + 0 é igual a 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('Se um erro é lançado no caso de caracteres inválidos', () => {
    expect(() => sum(4, "5")).toThrow(Error);
  });

  it('Se lança o erro com texto exato no caso de um dos parâmetros ser uma string ex: 4, "5"', () => {
    expect(() => sum(4, "5")).toThrow(new Error ('parameters must be numbers'));
  });

});
