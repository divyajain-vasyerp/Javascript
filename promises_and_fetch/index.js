const promiseOne = new Promise(
    function (resolve, reject) {

        setTimeout(function () {
            // console.log("Hello this is Async 1");
            resolve()
        }, 1000)
    }
)

promiseOne.then(function () {
    // console.log("then is 1 resolved");
})

new Promise((resolve, reject) => {
    setTimeout(function () {
        // console.log("THis is Async 2");
        resolve()
    }, 1000)
}).then(function () {
    // console.log("this is 2 is resolved");
})


const promiseThree = new Promise((resolve, reject) => {
    setTimeout(function () {
        // console.log("Data is here to it: ");
        resolve(
            {
                username: "divyjain9649",
                emial: "divyjain@vasyerp.com"
            }
        )
    }, 1000)
})
promiseThree.then(function (user) {
    // console.log(user);
})

/*const promiseFour=new Promise((resolve,reject)=>{
    setTimeout(function(){
        console.log("this is it: ");
        let error=true;
        if (!error) {
            resolve(
                {
                    username:"DivyJain",
                    password:123
                }
            )
        }else{
            reject('Error: Something went wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username

}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("The Promise is Finally Done or Reject !!!");
})*/


/*const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true;
        if (!error) {
            resolve(
                {
                    username:"divy",
                    password:100
                }
            )
        }else{
            reject('This is Yours Errors in js')
        }
    },1000)    
})

async function consumePromiseFive()
{
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()*/


/*async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // console.log(response);
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ",error);
    }
}

getAllUsers()*/


// fetch('https://jsonplaceholder.typicode.com/users')
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    // console.log(response);
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})
