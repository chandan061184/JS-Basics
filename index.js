
//console.log("Hello World!");
let name1= 'Chandan';
console.log(name1);

/////////////// Variables ////////////////
//connot be a reserved keyword
//should be meaningful
//can not start with a number(1name)
//can not contain a space or hyphen
//Are case sensitive

//Declare each variable in a new line
let firstName;
let lastName;

//Constant
const interestRate=0.3;
//interestRate =1; //this will throw error
console.log(interestRate);
//If you dont want to re assign use const else use let

//primitive types

let name="Chandan"; //String literal
let age=30; // Number literal
let isApproved =false; //boolean literal
let someName= undefined; 
let somethings= null; //use if want to clear the value of variable



//JS is a dynamic language, type determine at run time
console.log(typeof name); //string
name=10;
console.log(typeof name); //number
name=10.5;
console.log(typeof name); //number, floating point is also number
name=undefined;
console.log(typeof name); //undefined
name=null;
console.log(typeof name); //object


//Reference type: Ojects, array, function
let person ={

    name:'Chandan',
    age:30
}
console.log(person);

//Dot notation
person.name='Kumar';
console.log(person.name);
console.log(person.age);
//Bracket Notation
person['name']= 'Mary'; //can be used dynamically
console.log(person.name);

//Array

let selectColors=['red', 'blue'];

console.log(selectColors[0]);
selectColors[2]='green';
console.log(selectColors);
console.log(typeof selectColors); //Object
console.log(selectColors.length); //3

//funcitons are fundamental builidng blocks in JS
//set of statments
function greet(){
    //body of the function
    console.log("Hello World");
}

//calling the function
greet();

function greet2(personName){
    //body of the function
    console.log("Hello " + personName);
}

//calling the function
greet2('chandan');
greet2(); // Hello undefined (if we didnt pass parameter, personName would be undefined)

//caculate a value

function square(number){
    return number*number;
}
console.log(square(2));
