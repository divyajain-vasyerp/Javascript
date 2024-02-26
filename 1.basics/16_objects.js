console.log("--------OBJECTS-----------")
//objects literals
const symbol1=Symbol("Key1")
const JsUser={
    name:"Divy Jain",
    Department:"Software Development Intern",
    [symbol1]:"mySymbol",
    age:22,
    email:"Divyjain@vasyerp.com"
}
// console.log(JsUser)
// console.log(JsUser.name)
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser[symbol1])
// console.log(symbol1)

JsUser.email="chatgpt"
// console.log(JsUser["email"])
// Object.freeze(JsUser)
JsUser.email="chatgpt.com"
// console.log(JsUser["email"])
// console.log(JsUser)

JsUser.greeting=function()
{
    console.log("hello jsuser")
}   

JsUser.greeting1=function()
{
    console.log(`hello jsuser 1 ${this.name}`)
}

// console.log(JsUser.greeting())
// JsUser.greeting()
// JsUser.greeting1()

const user={}
// console.log(user)
user.id="22MCA019"
user.name="Divy Jain"
user.loggedIn=false
// console.log(user)

const regularUser={
    email:"divy@gmail.com",
    fullname:{
        email:"divy@.com",
        userfullname:{
            firstName:"Divy",
            lastName:"Jain"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstName)

const obj1={
            1:"a",
            2:"b",
}

const obj2={
    3:"c",
    4:"d",
}

// const obj3={obj1,obj2}
// console.log(obj3)
// const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
// console.log(obj3)

const users=[
    {
        id:1,
        email:"h@gmail.com",
    },
    {

    },{

    },
]
// console.log(users)

users[1].email
// console.log(user);
// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))
// console.log(user.hasOwnProperty('loggedIn'))

console.log("-------------")
const course={
    coureName:"Js in Hindi",
    price:"9999",
    courseTeacher:"Hitesh"
}

// course.coureName
// const {coureName}=course
// const {coureName:cName}=course
// console.log(cName);

/*const navbar=({compnay}) => {

}
navbar(compnay="Divy")*/


