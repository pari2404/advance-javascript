// callback
// callback is valuable in an asynchronus context
// function takes func as an argument whuch us then called when rest of the initial func has finished
// function doSomething(callback){
//     callback();
//     console.log("hello");
//     console.log("pari");
//     console.log("bindal");
// }
// function sayHi(){
//     console.log("hi!");
// }
// doSomething(sayHi);

// function judge(grade){
//     switch(true){
//         case grade== "A":
//             console.log("you got an " ,grade, ": amazing!");
//             break;
//         case grade== "B":
//             console.log("you got a " ,grade, ": well done!");
//             break;
//         case grade== "C":
//             console.log("you got a " ,grade, ": alright!");
//             break;
//         case grade== "D":
//             console.log("you got a " ,grade, ": hmm...!");
//             break;
//         default:
//             console.log("an ",grade, "! what?!");
//     }
// }
// function getGrade(score,callback){
//     let grade;
//     switch(true){
//         case score>=90:
//             grade="A"
//             break;
//         case score>=80:
//             console.log(score);
//             grade="B"
//             break;
//         case score>=70:
//             console.log(score);
//             grade="C"
//             break;
//         case score>=60:
//             grade="D"
//             break;
//         default:
//             grade="F"
//     }
//     callback(grade);
// }
// getGrade(85,judge);



// promises--this func needs two parameter and both are callback called as resolve and reject
// when resolve() is called,the promise is presumed to be successful and whatever is between the arrows is returned and used as input
// for the then method in the promise object.if reject() is called,the promise failed and the catch() method on the promise
// object is executed with the argument

// let promise= new Promise(function(resolve,reject){
//     let x=20;
//     if(x>10){
//         resolve(x);
//     }
//     else{
//         reject("too low");
//     }
// });
// promise.then(
//     function(value){
//         console.log("success!",value);
//     },
//     function(error){
//         console.log("error",error);
//     }
// );

// const promise=new Promise((resolve, reject) => {
//     // resolve("success!");
//     reject("fail");
// })
// .then(value => {
//     console.log(value);
//     return "we";
// })
// .then(value => {
//     console.log(value);
//     return "can";
// })
// .then(value => {
//     console.log(value);
//     return "chain";
// })
// .then(value => {
//     console.log(value);
//     return "promise";
// })
// .then(value => {
//     console.log(value);
// })
// .catch(value => {
//     console.log(value);
// })


// ASYNC AND AWAIT
// with async keyword,we can make a funv=c return a promise.this makes the promise nicer to read and look like synchcronus code.
// await keyword wait until the promise in down.it only works in asynchronus code.
// function saySomething(x){
//     return new Promise(resolve =>{
//         setTimeout(() =>{
//             resolve("something" +x);
//         }, 2000);
//     });
// }
// async function talk(x) {
//     const words= await saySomething(x);
//     console.log(words);
    
// }
// talk(2);
// talk(4);
// talk(8);

// EVENT LOOP
// js is a single threaded LockManager.a thread means a path of execution.the single executer is the event loop it executes the acrual Worker.
// even though js is single threaded,it doesnt mean that it cannot outsource tasks and wait for them to come back.it do things in miltithreaded manner

// CALL STACK AND CALLBACK QUEUE
// EVENT LOOP is a process that is constantly monitoring this call stack and ehenever there are tasks to do.
// console.log("hi there");
// add(4,5);
// console.log(add);

// function add(x,y){
//     return x+y;
// }

// async code goes to callback queue
// console.log("hi there");
// setTimeout(() => console.log("sorry i am late"), 1000);
// console.log(add(4,5));

// function add(x,y){
//     return x+y;
// }
// the settimeout task gets outsourced to the browser web api.when its done,this appears in a special place: the callback quue
// when the call stack is empty the event loop will check the callback quueue for work to do.
// console.log("hi there");
// setTimeout(() => console.log("sorry i am late"), 0);
// console.log(add(4,5));

// function add(x,y){
//     return x+y;
// }