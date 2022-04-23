console.log("Hello World");


var x =5; 
x=10;
let y=10;
y=11;
console.log(x);
console.log(y);

//--------------------------
//scope
{
    var x= 100;
    let y= 101; 
    const z =22;
}

// console.log(y,z); cannot access outside scope
console.log(x)

const value = 143121;
const value2 = 'apple';
console.log(typeof value, typeof value2)

//--------------------------
//string manipulation 

const str1 = "I am a String in JavaScript"
console.log(str1.length, str1.endsWith('g'), str1.split(' '))
console.log(str1.lastIndexOf('t'))


//--object 
const obj = {
    id: 1, 
    name: 'New Name'
}
console.log(obj)
//


//loops 

for (i=0; i<=10; i++){
    console.log(i);
}

let arr =[1, 2, 3, 4, ,5]
for (let val of arr){
    console.log(val);
}

for (let keys in {name: 'Ram', age: 23}){
    console.log(keys)
}

//json 

const person = {
    id: 1,
    name: 'Prashant',
    address:{
        street: 'Nakhipot',
        city: 'Lalitpur'
    }
}


const jsonString = JSON.stringify(person);
console.log(jsonString)


const personObj = JSON.parse(jsonString)
console.log(personObj)


//function 
function greet(){
    console.log('hi')
}

function fx(x,y){

    console.log(x+y)
}

greet();
fx(2,4);


function greetPerson(name) {
    console.log(`Hello ${name}!`);
}

function greetStranger() {
    return 'everyone';
}

greetPerson('John Doe');
greetPerson(greetStranger());

//conditions

flag = true 

if (flag){
    console.log("hi there")
}

if (flag === true){
    console.log("check check")
}

//ternary 
console.log(true ? 'true': 'false');
console.log(0 ? 'truth': 'false');

//and or not
console.log(null || 'Default Value');
console.log(undefined || 'Default Value');

console.log('Some Value' && 'Default Value');
console.log(null && 'Default Value');
console.log(undefined && 'Default Value');




