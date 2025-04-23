
// MAP
// create a map
// const fruits= new Map([
//     ["apples",50],
//     ["bananas",300],
//     ["mangoes",200]
// ]);
// console.log(fruits);

// set() map values-- set cam also be used to chnage existing map values
const fruits= new Map();
fruits.set("apples",500);
fruits.set("bananas",300);
fruits.set("oranges",200);
fruits.set("mangoes",350);
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
let total=0;
for(const x of fruits.values()){
    total+=x;
}
console.log(total);
