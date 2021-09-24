const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const chaves = Object.keys(order);
order[chaves[0]] = 'Luiz Silva'
order[chaves[4]].total = '50';

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  console.log(`Olá ${order[chaves[3]].delivery.deliveryPerson}, entrega para: ${order[chaves[0]]}, Telefone: ${order[chaves[1]]}, R. ${order[chaves[2]].street}, Nº: ${order[chaves[2]].number}, AP: ${order[chaves[2]].apartment}
  `)
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const pizzas = order[chaves[3]].pizza;
  console.log(`Olá ${order[chaves[0]]}, o total do seu pedido de ${Object.keys(pizzas)[0]}, ${Object.keys(pizzas)[1]} e ${order[chaves[3]].drinks.coke.type} é R$ ${order[chaves[4]].total},00.`);
}

orderModifier(order);

// console.log(order[chaves[3]].drinks.coke.type);