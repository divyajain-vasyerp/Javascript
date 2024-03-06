/*class User{
    constructor(username,email,password)
    {
        this.username=username
        this.email=email
        this.password=password
    }

    encryptPassword()
    {
        // return this.password
        return `${this.password}abc`
    }

    changeUsername()
    {
        return `${this.username.toUpperCase()}`
    }

}
const chai=new User("divy","divy@gmail.com",123)
// console.log(chai.encryptPassword());
// console.log(chai);
const tea=new User("divy","divy@gmail.com",123)
// console.log(tea.changeUsername());
// console.log(tea);
*/




class User{
    constructor(username)
    {
        this.username=username
    }

    logMe()
    {
        console.log(` Username ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username ,email,password)
    {
        super(username)
        this.email=email
        this.password=password
    }

    addCourse()
    {
        console.log(`new course added by ${this.username}`);
    }
}

const chai=new Teacher("Divy Jain","divy@gmail.com",123)
const tea=new User("Divy Jain","divy@gmail.com",123)
// console.log(chai.logMe());
// console.log(chai);
// chai.addCourse()
// chai.logMe()
// console.log(tea);
// console.log(tea===chai);
// console.log(chai instanceof Teacher);