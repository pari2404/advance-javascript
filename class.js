// class ClassName{
//     constructor(prop1,prop2){
//         this.prop1= prop1;
//         this.prop2=prop2;
//     }
// }
// let obj=new ClassName("arg1", "arg2");
// console.log(obj.prop1);
// console.log(obj.prop2);

// class Dog{
//     constructor(dogname,weight,color,breed){
//         this.dogname=dogname;
//         this.weight=weight;
//         this.color=color;
//         this.breed=breed;
//     }
// }
// let dog=new Dog("javascript",2.4,"brown","chihuahua");
// console.log(dog.dogname,dog.breed.dog.weight);


// constructor
// it is a convemtion to start class name with capital letter
// class Person{
//     constructor(firstName,lastName){
//         this.firstName=firstName;
//         this.lastName=lastName;
//     }
// }
// let p=new Person("pari","bindal");
// console.log("hi",p.firstName);

// METHOD
// function on class are methods
// when defining these method we dont use the function keyword.we start directly with the name
// class Person{
//     constructor(firstName,lastName){
//         this.firstName=firstName;
//         this.lastName=lastName;
//          }
//     greet(){
//         console.log("hi there! I'm", this.firstName);
//     }
//     compliment(name,object){
//         return "that's a wonderful" + object + "," +name;
//     }
// }

// let p=new Person("pari","bindal");
// p.greet();
// let compliment=p.compliment("Harry","hat");
// console.log(compliment);

//properties
// class person{
//     #firstname;
//     #lastname;
// constructor(firstname,lastname) {
//     this.#firstname= firstname;
//     this.#lastname= lastname;
// }


// constructor(firstname, lastname){
//     if(firstname.startsWith("M")){
//         this.#firstname=firstname;
//     }else{
//         this.#firstname= "M" + firstname;
//     }
//     this.#lastname= lastname;
// }
// }
// let p= new person("kay", "moon");
// console.log("hi",p.#firstName);

// class person{
//     #firstname;
//     #lastname;
// constructor(firstname,lastname) {
//     this.#firstname= firstname;
//     this.#lastname= lastname;
// }
// get firstname(){
//     return this.#firstname;
// }
// set firstname(firstname){
//     this.#firstname=firstname;
// }
// get lastname(){
//     return this.#lastname;
// }
// set lastname(lastname){
//     this.#lastname=lastname;
// }
// }
// let p = new person("pari","bindal");
// console.log(p.firstname);
// console.log(p.lastname);
// p.firstname = "kirti";
// console.log(p.firstname);
// p.lastname = "bindal";
// console.log(p.lastname);

// inheritance--reusability of code
//class can have child class that inherit the prop and method from parent class
// the super word in the constructor is calling the constructor from the parent
// we cannot access any motorcycle specific prop or method in our vehicle class.
// class vehicle{
//     constructor(color,currentspeed,maxspeed){
//         this.color=color;
//         this.currentspeed=currentspeed;
//         this.maxspeed=maxspeed;
//     }
//     move(){
//         console.log("moving at", this.currentspeed);
//     }
//     accelerate(amount){
//         this.currentspeed += amount;
//     }
// }
// class motorcycle extends vehicle{
//     constructor(color,currentspeed,maxspeed,fuel){
//         super(color,currentspeed,maxspeed);
//         this.fuel=fuel;
//     }
//     dowheelie(){
//         console.log("driving on one wheel!")
//     }
// }
// let motor= new motorcycle("black",0,250,"gasoline");
// console.log(motor.color);
// console.log(motor.fuel);
// motor.accelerate(50);
// motor.move();

// PROTOTYPES
// makes it possible to have objects
class person{
    constructor(firstname,lastname) {
        this.firstname= firstname;
        this.lastname=  lastname;
    }
    greet(){
        console.log("hi.there!");
    }
}
person.prototype.introduce= function(){
    console.log("Hi, I'm", this.firstname);
};
person.prototype.favcolor="green";
let p=new person("pari","bindal");
console.log((p.favcolor));
p.introduce();




