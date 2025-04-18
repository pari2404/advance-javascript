// function tester(para1, para2){
//     return para1 + " " +para2;
// }
// const arg1="argument 1";
// const arg2= "argument 2";
// console.log(tester(arg1, arg2));

function addTwoNumbers(x,y){
    return x+y;
}
// addTwoNumbers(3,4);
// addTwoNumbers(12,-90);

// let doingArrowStuff = c => console.log(x);
// doingArrowStuff("great");

// let add = (x,y) => console.log(x+y);
// add(5,3);

// const arr= ["squirrel", "alpaca", "buddy"];
// arr.forEach(e => console.log(e));

// spread op-func invoking
// let spread = ["so", "much", "fun"];
// let message =["javascript", "is", spread, "and","very", "powerful"];
// message.forEach(e => console.log(e));

// function add(x,y){
//     console.log(x+y);
// }
// let arr= [5,9];
// add(...arr);

// function addFourNumbers(x,y,z,a){
//     console.log(x+y+z+a);
// }
// let arr= [5,9];
// let arr2 =[6,7];
// addFourNumbers(...arr, ...arr2);

// rest parameter-func defination
// function someFunction(param1, ...param2){
//     console.log(param1, param2);
// }
// someFunction("hi","there","how are you");


// returning function value
let resultArr=[];
for(let i=0;i<10;i++){
    let result= addTwoNumbers(i, 2*i);
    resultArr.push(result);
}
console.log(resultArr);
let vsr = "addsy";

