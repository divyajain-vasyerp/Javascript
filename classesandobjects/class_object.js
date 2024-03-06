const user = {
    username: "divya",

    getUserDetails: function () {
        // console.log("Got user details from database");
        // console.log(`${this.username}`);
        // console.log(this);
    }
}

// user.getUserDetails()
// console.log(user.username);
// console.log(user.getUserDetails());

// const promiseOne = new Promise()
// const date = new Date()

function User(username,loginCount)
{
    this.username=username
    this.loginCount=loginCount
    // return this
}

const userOne = new User("Divy Jain",12)
console.log(userOne);