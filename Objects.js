const Person = {
  // name: 'supun',
  age: 12,
};

// const Person = {
// };

console.log(Object.keys(Person).length);
if (Person.name) {
  console.log(Person.name);
} else {
  console.log('oops');
}
