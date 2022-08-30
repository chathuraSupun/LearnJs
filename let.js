/* 
The let keyword was introduced in ES6 (2015).

Variables defined with let cannot be Redeclared.

Variables defined with let must be Declared before use.

Variables defined with let have Block Scope.
*/

/* 
These two keywords provide Block Scope in JavaScript.

Variables declared inside a { } block cannot be accessed from outside the block:
*/

{
  let x = 2;
}
// x can NOT be used here

// --------------------------------------
/* 
  Redeclaring a variable using the let keyword can solve this problem.

Redeclaring a variable inside a block will not redeclare the variable outside the block:
  */

let x = 10;
// Here x is 10

{
  let x = 2;
  // Here x is 2
}

// Here x is 10

// -----------------------------------
