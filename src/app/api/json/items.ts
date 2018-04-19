import * as faker from 'faker';

function createList(count: number) {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      id: i + 1,
      name: faker.commerce.productName(),
      brand: faker.commerce.productMaterial(),
      sku: faker.random.number(10000),
      model: faker.random.alphaNumeric(10),
      internet: faker.random.number(1000000),
      status: 'in-stock',
      price: {
        type: 'USD',
        amount: faker.commerce.price(),
        per: '1'
      },
      image: faker.random.image()
    });
  }
  return data;
}

export const list = {
  'count': 949,
  'previous': null,
  'results': createList(20),
  'next': 'next 20'
};

