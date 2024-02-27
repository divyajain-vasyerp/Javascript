console.log("---")
const a=[10,20,30]
// for (const i of a) {
//     console.log(i);
// }

const map=new Map()
map.set('IN',"India")
map.set('USA',"United State")
// console.log(map);
for (const [key,value] of map) {
    // console.log(key, ':->',value);
}

const myObj=
{
    game1:'ff',
    game2:'pubji'
}

/*for (const [key,value] of myObj) {
    console.log(key ,value);    // this is now work for objects so we can use that time forin loops
}*/

for (const key in myObj) {
    // console.log(myObj[key]);
    // console.log(` ${key} shortcut is for ${myObj[key]}`)
}

const program=["js","java","c++"]
for (const key in program) {
    // console.log(program[key]);
}
program.forEach(function (val)
{
    // console.log(val)
})

program.forEach((item,index,arr)=>
{
    // console.log(item,index,arr);
})


const myCoding=[
    {
        languageName:"Javascript",
        languageFile:".js"
    },
        {
            languageName:"Java",
            languageFile:".java"
        } 
]

myCoding.forEach((item)=>{
    console.log(item);
    console.log(item.languageName);
    console.log(item.languageFile);
})