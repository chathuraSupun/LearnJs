/* 
It does not define a constant value. It defines a constant reference to a value.
Because of this you can NOT:

Reassign a constant value
Reassign a constant array
Reassign a constant object
But you CAN:

Change the elements of constant array
Change the properties of constant object */

/* 
These two keywords provide Block Scope in JavaScript.

Variables declared inside a { } block cannot be accessed from outside the block:
*/

{
  const x = 2;
}
// x can NOT be used here

const person = { firstName: 'supun', lastName: 'chathura' };
person.firstName = 'namal';
person.age = 20;

console.log(person);

const cars = ['audi', 'ferrari', 'bmw'];
cars[0] = 'kia';
cars.push('toyota');

console.log(cars);
