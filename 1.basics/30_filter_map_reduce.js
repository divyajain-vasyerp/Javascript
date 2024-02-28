console.log("Filter&Map");
const myNums=[1,2,3,4,5,5]
const newNums=myNums.filter((num) =>num>2)
// console.log(myNums);
// console.log(newNums);
// const newNum=myNums.filter((num) =>{return  num>2})
// console.log(newNum);
const newNum=[]
myNums.forEach((num)=>{
    if(num>2)
    {
        newNum.push(num)
    }
})
// console.log(newNum);

const books=[
    {
        title:'Book One',bookName:'Java is Programming',publish:1999
    },
    {
        title:'Book Two',bookName:'Java is Programming Language',publish:2000
    },
    {
        title:'Book Three',bookName:'c#  is Programming',publish:2001
    },
    {
        title:'Book Four',bookName:'Python is Programming',publish:2002
    },
    {
        title:'Book Five',bookName:'Flutter is Framework',publish:1999
    }
]

// console.log(books);
const myBook=books.filter((bk)=>{ return bk.publish===1999})
// console.log(myBook);


const num=[1,2,3,4,5,6,6,7,8,9,10]
// console.log(num);
const nu=num.map((n)=>{
  return  n+10
})
// console.log(nu);


//chaining
let n=num
        .map((n)=>n*10)
        .map((n)=>n+1)
        .filter((n)=> n>=40)
//console.log(n);

const number=[1,2,3]
const mytotal=number.reduce((acc,curval)=>{
    // console.log(` acc : ${acc} and curvalue : ${curval}`)
    return acc+curval
},0)
// console.log(mytotal);

const shoppingCart=[
    {
        itemName:"js course",
        price:300
    },
    {
        itemName:"java course",
        price:999
    },
    {
        itemName:"c# course",
        price:300
    },
    {
        itemName:"python course",
        price:500
    }
]

// console.log(shoppingCart);
const add=shoppingCart.reduce((acc,item)=>
{
    return acc+item.price
},0)
// console.log(add);