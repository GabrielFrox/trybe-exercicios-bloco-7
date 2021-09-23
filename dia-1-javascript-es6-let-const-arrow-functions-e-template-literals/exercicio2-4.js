let skills = ['CSS', 'HTML5', 'Js', 'Games Knowledge', 'Guarana']

function MontagemDaFrase(string) {
  // let firstPart = `Tryber ${string} aqui!`
  const firstPart = palavra => `Trybe ${palavra} aqui!`;
  
  skills.sort();
  return `${firstPart(string)} Minhas cinco principais habilidades são:
-${skills[0]}
-${skills[1]}
-${skills[2]}
-${skills[3]}
-${skills[4]}`  
}
console.log(MontagemDaFrase('Carlin'))