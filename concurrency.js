// callback
// callback is valuable in an asynchronus context
// function doSomething(callback){
//     callback();
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
  
