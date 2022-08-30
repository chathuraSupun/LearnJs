// mathamatical operators
var a = 0;
a += 1 // a = a + 1
a -= 1 // a = a - 1
a *= 2 // a = a * 2
a /= 12  // a = a / 12
a **= 2; // a = a ** 2
a %= 2; // a = a % 2

// 	Modulus (Division Remainder)
var remainder = 11 % 3;

const x = 5;
const y = 2;

// 	Exponentiation
x = x ** y; 

//  string operators

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

// Adding two numbers, will return the sum, but adding a number and a string will return a string:
{
let x = 5 + 5; // 10
let y = "5" + 5; // '55'
let z = "Hello" + 5; // 'Hello5'
}
