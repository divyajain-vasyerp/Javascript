
class User{
    constructor(username)
    {
        this.username=username
    }

    logMe()
    {
        console.log(`Username ${this.username}`);
    }

    static createId()
    {
        return `123`
    }
}


class Teacher extends User{
    constructor(username,email)
    {
        super(username)
        this.email=email
    }
}

// const chai=new User("Divy")
// console.log(chai.createId()) // this is now gives a error because we cna use static that stop it out of context and not access every object 
// console.log(User.createId());
const iphone=new Teacher("iphone","iphone@gmail.com")
console.log(iphone);
iphone.logMe()
console.log(Teacher.createId());