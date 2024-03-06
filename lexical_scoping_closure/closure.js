/*function init() {
    let name = "Divy"
    function displayName() {
        //displayName() is the inner function, that forms the closure
        console.log(name); // use variable declared in the parent fucntion
        // console.log(`${name}`); // use variable declared in the parent fucntion
    }
    displayName();
}
init();

// console.log(init.name);
*/

// Closure Code

function makeFunc()
{
    const name="Divy jain"
    function displayName()
    {
        console.log(name);
    }
    return displayName
}

const myFunc=makeFunc();
myFunc();