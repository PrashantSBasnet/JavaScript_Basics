//ternary eg1
// function example(…) {
//     return condition1 ? value1
//          : condition2 ? value2
//          : condition3 ? value3
//          : value4;
// }

// // Equivalent to:

// function example(…) {
//     if (condition1) { return value1; }
//     else if (condition2) { return value2; }
//     else if (condition3) { return value3; }
//     else { return value4; }
// }



//ternary operator eg2

var age=15; 

console.log((age>=18)? "You are an adult": "You are a kid");





let greeting = person => {
    let name = person ? person.name : `stranger`
    return `Howdy, ${name}`
}

console.log(greeting({name: `Alice`}));  // "Howdy, Alice"
console.log(greeting(null));             // "Howdy, stranger"


//callbacks
function calculateBonus(amount, customCalculatorFn){
    return customCalculatorFn ? customCalculatorFn(amount) : 0.15 * amount;
}

console.log(calculateBonus(10));
console.log(calculateBonus(100, function customFn(amount) {
    return 0.3 * amount;
}));


//Promises
//to do sth after a file is downloaded eg.
//replaces callbacks
let p = new Promise((resolve,reject) => {
    let a = 1+1
    if (a ==2){
        resolve('Success')
    }
    else(
        reject('Failed')
    )
})

p.then((message)=>{  //then is called if promise is resolve
    console.log('this is the then '+ message)
}).catch((message)=>{ //catch is called if promise is reject
    console.log('This is in the catch ' +message)
})



//Callbacks 
const userLeft =false
const userWatchingCatMeme =false

function watchTutorialCallback(callback, errorCallback){
    if (userLeft){
        errorCallback({
            name:'User Left without watching tutorial',
            message: 'oops!'
        })
    }   else if (userWatchingCatMeme){
        errorCallback({
            name:'User distracted',
            message:'Youtube music is better than tutorial'
        })
    }   else {
        callback('Thumbs up keep learning')
    }
}

watchTutorialCallback((message)=> {
    console.log('Success:' + message)
},(error)=> {
    console.log(error.name + ' '+ error.message)
})


//using Promise --> makes code much cleaner

function watchTutorialPromise(){
    return new Promise((resolve,reject)=>{
        if (userLeft){
            reject({
                name:'User Left without watching tutorial',
                message: 'oops!'
            })
        }   else if (userWatchingCatMeme){
            reject({
                name:'User distracted',
                message:'Youtube music is better than tutorial'
            })
        }   else {
            resolve('Thumbs up keep learning')
        }
    })
}

watchTutorialPromise().then((message)=>{
    console.log('Success: '+message)
},(error)=>{
    console.log(error.name+ ' ' + error.message)
})


//using Promise.all

const recordVideoOne = new Promise((resolve,reject)=> {
    resolve('Video 1 recorded')
})

const recordVideoTwo = new Promise((resolve,reject)=> {
    resolve('Video 2 recorded')
})

const recordVideoThree = new Promise((resolve,reject)=> {
    resolve('Video 3 recorded')
})

Promise.all([ //takes input as array 
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then(message => {  //message as array
    console.log(message)})


    //promise vs aysn await
    // using promises
function organizeBirthdayParty1() {
  inviteFamilyMembers().then((v) => {
    console.log(v);
    inviteColleagues().then((v) => console.log(v));
  });
}

function inviteFamilyMembers() {
  return new Promise((res) => {
    setTimeout(() => {
      res("Family members invited!");
    }, 5000);
  });
}

function inviteColleagues() {
  return new Promise((res) => {
    setTimeout(() => {
      res("Colleagues invited!");
    }, 5000);
  });
}

 organizeBirthdayParty1();

// async-await
//https://www.geeksforgeeks.org/difference-between-promise-and-async-await-in-node-js/#:~:text=Promise%20is%20an%20object%20representing,the%20code%20execute%20more%20synchronously.
async function organizeBirthdayParty() {
    const familyInvitations = await inviteFamilyMembers();
    console.log(familyInvitations);
    const colleaguesInvitations = await inviteColleagues();
    console.log(colleaguesInvitations);
  }
  
  function inviteFamilyMembers() {
    return new Promise((res) => {
      setTimeout(() => {
        res("Family members invited!");
      }, 5000);
    });
  }
  
  function inviteColleagues() {
    return new Promise((res) => {
      setTimeout(() => {
        res("Colleagues invited!");
      }, 5000);
    });
  }
  
 // organizeBirthdayParty();
 