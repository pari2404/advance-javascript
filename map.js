
// MAP
// create a map
// const fruits= new Map([
//     ["apples",50],
//     ["bananas",300],
//     ["mangoes",200]
// ]);
// console.log(fruits);

// set() map values-- set cam also be used to chnage existing map values
// const fruits= new Map();
// fruits.set("apples",500);
// fruits.set("bananas",300);
// fruits.set("oranges",200);
// fruits.set("mangoes",350);
// console.log(fruits);

//get() method--get the value of key in  map
// fruits.get("apples");

// javascript map methods
// 1.new Map
// 2.Map.get();
// 3.Map.set();
// 4.Map.size();
// console.log(fruits.size);
// 5.Map.delete();
// fruits.delete("apples");
// console.log(fruits);
// 6.Map.clear
// fruits.clear();
// 7.map.has();
// console.log(fruits.has("apples"));
// 8.Map.forEach();
// let text="";
// fruits.forEach(function(value,key){
//     text+= key+ '=' +value;
// })
// console.log(text);
// 9.map.entries
// let text="";
// for(const x of fruits.entries()){
//     text+=x;
// }
// console.log(text);
// 10.map.keys()
// let text="";
// for(const x of fruits.keys()){
//     text+=x
// }
// console.log(text);
// 11.map.values
// let text="";
// for(const x of fruits.values()){
//      text+=x
//  }
//  console.log(text);
// let total=0;
// for(const x of fruits.values()){
//     total+=x;
// }
// console.log(total);

// const apples={name: "Apples"};
// const bananas={name: "bananas"};
// const oranges={name: "oranges"};
// const fruits= new Map();
// fruits.set(apples,500);
// fruits.set(bananas,300);
// fruits.set(oranges,300);
// console.log(fruits);
// console.log(fruits.get("apples"));

// create an array
// const fruits=[
//     {name:"apples",quantity:300},
//     {name:"bananas",quantity:500},
//     {name:"oranges",quantity:200},
//     {name:"kiwi",quantity:150},
// ];
// // callback function to group elements
// function mycallback({quantity}){
//     return quantity>200? "ok": "low";
// }
// const result= Map.groupBy(fruits,mycallback);
// console.log(result);

// javascript destructuring
// destructuring is not destructive
// const person={
//     firstName: "john",
//     lastName:"doe",
//     age: 50
// };
// let {lastName,firstName}=person;
// console.log(person);

// ALIAS
// let {lastName:name}=person
// console.log(person);

// let name="gurukultheschool";
// let[a1,a2,a3,a4,a5]=name;

// const fruits=["bananas","oranges","apples","kiwi"];
// let[fruit1,fruit2]=fruits;
// let[fruit1,fruit2]=fruits;
// let[fruit1,,,fruit2]=fruits;
// let{[0]:fruit1,[3]:fruit2}=fruits;
// console.log(fruit1);
// console.log(fruit2);

// const numbers=[10,20,30,40,50,60,70];
// const[a,b,...rest]=numbers
// console.log(a);
// console.log(b);
// console.log(rest);

// const fruits= new Map([
//         ["apples",50],
//         ["bananas",300],
//         ["mangoes",200]
//     ]);
// let text="";
// for(const[key,value]of fruits){
//     text+=key+ " is " +value ;
// }
// console.log(text);

// let firstName="john";
// let lastName="doe";
// [firstName,lastName]=[lastName,firstName];
// console.log(firstName);
// console.log(lastName);

// exponential
// let x=5;
// let z=Math.pow(x,2);
// console.log(z);

// JS ARRAY INCLUDES()--the include method is case sensitive
// const fruits=["banana","orange","apple","mango"];
// console.log(fruits.includes("mango"));
// console.log(fruits.includes("banana",3));

// trailing comma--typed after last element
// const arr=[
//     "one",
//     "two",
//     "three",,
// ];
// console.log(arr);
// console.log(arr.length);

// const sparseArray=[1,,,4,5,,];
// console.log(sparseArray);
// const arr=[,];
// console.log(arr);
// const person={
//         firstName: "john",
//         lastName:"doe",
//         age: 50,
//     };
// const person={
//     firstName: "john",
// ,
//     age:30,
// }
// console.log(person);


