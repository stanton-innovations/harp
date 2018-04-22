import * as faker from 'faker';
export const details = {
  name: {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    middleName: faker.name.firstName()
  },
  address: {
    street: `${faker.address.streetPrefix()}, ${faker.address.streetAddress()}`,
    city: faker.address.city(),
    state: faker.address.state()
  },
  job: {
    title: faker.name.jobTitle(),
    description: faker.name.jobDescriptor()
  }
};

