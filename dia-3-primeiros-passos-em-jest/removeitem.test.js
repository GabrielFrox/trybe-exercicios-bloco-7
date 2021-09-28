function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

it('Verifica se o retorno de ([1, 2, 3, 4], 3) é igual a [1, 2, 4]', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
});

it('Verifica se o retorno de ([1, 2, 3, 4], 3) não é igual ao mesmo', () => {
  expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
});

it('Verifica se o retorno de ([1, 2, 3, 4], 5) é igual a [1, 2, 3, 4]', () => {
  expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
});