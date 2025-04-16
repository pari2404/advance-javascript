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
class Person{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
         }
    greet(){
        console.log("hi there! I'm", this.firstName);
    }
    compliment(name,object){
        return "that's a wonderful" + object + "," +name;
    }
}

let p=new Person("pari","bindal");
p.greet();
let compliment=p.compliment("Harry","hat");
console.log(compliment);

