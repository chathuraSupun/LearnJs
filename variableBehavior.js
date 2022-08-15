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


var a; // a = undefined 

// mathamatical operators
var a = 0;
a += 1 // a = a + 1
a -= 1 // a = a - 1
a *= 2 // a = a * 2
a /= 12  // a = a / 12

var remainder = 11 % 3;

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

// concatinating strings
var myStr = "First sentence. " + "second sentence";
var myStr = "First sentence. ";
myStr += "second sentence"; // result: First sentence. second sentence

// create string using variables
var myName = 'supun';
var myStr = 'Hello my name is ' + myName + ', howe are you?'; // result: Hello my name is supun, howe are you?

var adjective = "usefull";
var myStr = 'Learning new things is ';
myStr += adjective; // result: 'Learning new things is usefull'
