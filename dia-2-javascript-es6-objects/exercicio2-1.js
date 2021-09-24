const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};


const addTurn = (object, key, value) => {
  object[key] = value;
}
addTurn(lesson2, 'turno', 'noite')

const keyList = (objeto) => {
  return Object.keys(objeto);
}

const objectSize = (objeto) => {
  let keys = Object.keys(objeto)
  return keys.length
}

const objectValues = (objeto) => {
  return Object.values(objeto);
}

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

const totalStudents = () => {
  let total = 0;
  for (let i = 0; i < objectSize(allLessons); i += 1) {
    const alunos = allLessons[keyList(allLessons)[i]].numeroEstudantes;
    total += alunos;
  }
  return total;
}

const getKeyByNum = (object, pos) => Object.values(object)[pos];

const existenceCheck = (objeto, chave, valor) => {
  let res = false;
  if (Object.keys(objeto).includes(chave) && Object.values(objeto).includes(valor)) res = true;
  return res;
}

console.log(existenceCheck(lesson3, 'turno', 'noite'));
