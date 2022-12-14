/* 
Variables declared with the var keyword can NOT have block scope.

Variables declared inside a { } block can be accessed from outside the block.
*/

{
  var x = 2;
}
// x CAN be used here

//  ----------------------------

/* 
Redeclaring a variable using the var keyword can impose problems.

Redeclaring a variable inside a block will also redeclare the variable outside the block:
*/

var x = 10;
// Here x is 10

{
var x = 2;
// Here x is 2
}

// Here x is 2
