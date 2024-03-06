class User{
    constructor(mail,password)
    {
        this.mail=mail
        this.password=password
    }

    set password(value)
    {
        this._password=value.toUpperCase()
    }

    get password()
    {
        // return this._password.toUpperCase()
        return `${this._password}hitesh`
    }

    set mail(value)
    {
        this._mail=value.toUpperCase()
    }

    get mail()
    {
        // return this._password.toUpperCase()
        return `${this._mail}`
    }
}

const d=new User("divy@gmail.com","abc")
// console.log(d);
console.log(d.password,"  ",d.mail);