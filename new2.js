//High Order function 

const employees = [
    {id:1, name: 'Ram', salary: 10000, skills: ['JAVA', 'ANGULAR']},
    {id:2, name: 'Shyam', salary: 9000, skills: ['Oracle', 'LINUX']}
];

//print all the names of employee
employees.forEach((n)=>console.log(n.name))

//join all names with comma
console.log(employees.map((k)=>k.name).join(', '))

//get total salary of all employees
console.log(employees.map((s)=> s.salary).reduce((p,c)=>p+c,0))

//get employees with salary > 5000
console.log(employees.filter((x)=> x.salary > 5000))

//return true if there is an employee whose salary < 11000
console.log(employees.some((e, i) => {
    console.log(`Index at: ${i}`);
    return e.salary < 11000;
}));

// find possible skill sets based on the employee array data.
console.log(employees.map((e)=>e.skills).flat());

// flatMap: find possible skill sets based on the employee array data
console.log(employees.flatMap((e) => e.skills));

//find employee having name Ram 
console.log(employees.find((e)=> e.name.includes('Ram')));

//sort employee array by salary in ascending order
employees.sort((a,b)=>{
return a.salary - b.salary});

console.log(employees)

//Arrow function 
//no parameter
greet = () => console.log("hello");
greet();

//parameter

getName = (name) => console.log(` hello ${name} ` );
getName('Ram');


//ES6 class
class Animal{
    constructor(id,name){
        this.id = id; 
        this.name=name;
    }
}

class Dog extends Animal{
    constructor(id, name, tail, bark){
        super(id,name);  
        this.tail = tail; 
        this.bark = bark; 
    }
}

const pet = new Dog(1, "Seti", "wags tail", "maiihoohaii")
const pet2 = new Dog(1, "Seti", "wags tail", ["hoooo", "maiihooohai", "oieRocky"])

console.log(pet);
console.log(pet2);



//constructor function 

function Trainee (id, name, batch, preferredSkillSet){
    this.id=id;
    this.name=name; 
    this.batch= batch; 
    this.preferredSkillSet=preferredSkillSet;
}

const trainee1 = new Trainee(1, 'Ram', 'April Batch', ["java", "nodejs"]);
console.log(trainee1)



//arrow function 
const location1 = {
    city: 'Kathmandu',
    country: 'Nepal',
    print: () => {
        console.log(arguments);
        console.log(`${this.city}, ${this.country}`)
    }
}
location1.print(123);

//regular fn
const location = {
    city: 'Kathmandu',
    country: 'Nepal',
    print: function () {
        console.log(arguments);
        console.log(`${this.city}, ${this.country}`);
    }
}

location.print(123);

//prototype
//regular vs arrow function 