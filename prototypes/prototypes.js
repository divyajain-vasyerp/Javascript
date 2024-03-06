function multiplyBy5(num)
{
    return num*5
}

multiplyBy5.power=2
// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

/*function createUser(username,score){
    this.username=username,
    this.score=score
}

createUser.prototype.increment=function()
{
    this.score++
}
createUser.prototype.printMe=function()
{
    console.log(`price is ${this.score}`);
}
const chai=new createUser("chai",25)
const tea=new createUser("tea",250)
chai.printMe()
tea.printMe()*/

// let myName="Divy   "
// console.log(myName.length);
// console.log(myName.trim().length);
// console.log(myName.truelength);

let myArr=["h1","h2"]

let my={
    h1:"Divy",
    h2:"Jain",

    getSelection:function()
    {
        console.log(`Power is ${this.h2}`);
    }

}
Object.prototype.Divy=function()
{
    console.log("Divy is present in all objects");
}
// my.Divy()
// myArr.Divy()

Array.prototype.heyDivy=function()
{
    console.log("Divy is array");
}

// myArr.heyDivy()
// my.heyDivy()


// Inheritance


const User={
    name:"Divy",
    email:"divy@gmail.com"
}
const Teacher={
    makeVideo:true,
}

const TeachingSupport={
    isAvailable:false
}

const TaSupport={
    makeAssignment:'Js assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=User

// modern syntex
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername="ChaiAurCode   "

String.prototype.trueLength=function()
{
    // console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`length is ${this.trim().length}`);
}


// anotherUsername.trueLength()
// "Divy Jain   ".trueLength()

