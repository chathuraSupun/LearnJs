// in line comment
/*
multi line comment
*/

/* Data types:
undefined: not initialized, null: empty, boolean: true/false , string: 'name', symbol: unique, mutable, primitive values ,number: 123, and object: collection of key value pair 
*/

// 3 ways to initialize variable
var myName = 'supun'; // declarations are globally scoped or function/locally scoped. 
const pi = 3.14; // declarations are globally scoped or function/locally scoped. cannot redeclare. cannot change
let lastName = 'chathura'; // let is block scoped. A block is a chunk of code bounded by {}. cannot redeclare in same scope. can be changed

// declare multiple variables in one statement
let person = "john", carName = "volvo", price = 2000;

var a; // a = undefined 

// string literal
var myFirstName = `supun`;
var myFirstName = "supun";
var myFirstName = 'supun';

// escape character back slash = \
var myStr = "I am a \"double quoted\" string inside \"double quotes\"";  
var myStr = 'I am a "double quoted" string inside "double quotes"';  // no need of escape character
var myStr = `I am a "double quoted" string inside baptics`;  // no need of escape character
var myStr = `I am a 'single quoted' and "double quoted" string inside baptics`;  // no need of escape character

/*
 ESCAPE SEQUENCE IN STRINGS
\' single quote
\" double quote
\\ backslash
\n new line
\r carriage return
\t tab
\b backspace
\f form feed
*/

