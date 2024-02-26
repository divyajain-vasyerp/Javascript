console.log("-----Functions-----")
console.log("")
function sayMyName()
{
    console.log("Hello World !!!")
}

// sayMyName()
// function addTwoNumbers(n1,n2)
// {
//     console.log(n1+n2);
// }
// addTwoNumbers(10,20)

function addTwoNumbers(n1,n2)
{
    const c=n1+n2;
    return c
}
const result=addTwoNumbers(10,20)
// console.log(result)

function login(username)
{
    return `${username} Just Logged In`
}

// console.log(login("Divy"))
const username=login("Divya Jain")
// console.log(username)

function calculatePrice(...n1)
{
    return n1
}

// console.log(calculatePrice(200,400,500))

/*const userDetails={
    username:"Divya Jain",
    email:"divyajain@vasyerp.com"
}
function handleObject(anyObject)
{
    console.log(` UserName is ${anyObject.username} and Email is ${anyObject.email}`)
}
handleObject(userDetails)*/


function one()
{
    const username="Divy Jain"
    function two()
    {
        const website="Youtube"
        console.log(username)
        console.log(website)
    }
    two()
}
one()