//destructuring
const person = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    state: "NY",
    zip: "10001",
  },
  hobbies: ["reading", "traveling", "cooking"],
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  }
};

const useContext = ({ age, address, zip2='23123'}) => {
  return {
    agePerson: age,
    addressPerson: address,
    zip2Person: zip2,
    addressPerson3: {address, zip2},
  }
}

const {agePerson, addressPerson, zip2Person, addressPerson3:{address, zip2}} = useContext(person);
console.log(person.name);
console.log(address);
console.log(zip2);


console.log('==============================');


const { name, age } = person;
console.log(agePerson); // 30
console.log(addressPerson); // { city: "New York", state: "NY", zip: "10001" }
console.log(zip2Person); // 23123