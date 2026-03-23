const myArr=[1,2,3,4,5];

const fruits=["apple","banana","orange"]

const myArr2= new Array(1,2,3,4,5)
console.log(myArr);
console.log(fruits);
console.log(myArr2);//array properties

//array methods

myArr.push(6)
console.log(myArr)

myArr.push(7,8,9) //multiple value pani add garna sakincha push method le
console.log(myArr)

myArr.pop() //last value j cha tyo lai delete garidncha kunai argument halnu pardaina 
console.log(myArr) //[1,2,3,4,5,6,7,8]

myArr.unshift(10) //first ma value add garidncha
console.log(myArr) //[10,1,2,3,4,5,6,7,8]

myArr.shift() //first ma value delete garidncha
console.log(myArr) //[1,2,3,4,5,6,7,8]

console.log(myArr.includes(5)) //array ma 5 cha ki nai bhanera check garidncha true or false ma answer dincha

console.log(myArr.indexOf(10)) //array ma 10 ko index kati ho bhanera check garidncha

//slice and splice 
const newArr=myArr.slice(2,5) //array ko 2 index dekhi 5 index samma ko value lai new array ma rakhcha
console.log(newArr) //[3,4,5]

myArr.splice(2,3) //array ko 2 index dekhi 3 ota value delete garidncha
console.log(myArr) //[1,2,6,7,8]    


const fruits2=["apple","banana","orange","grape","kiwi"]    
const vegetable=["carrot","potato","tomato","onion","cabbage"]

fruits2.push(vegetable) //fruits2 array ma vegetable array lai add garidncha
//console.log(fruits2)

fruits2.concat(vegetable) //fruits array ma vegetable array lai add garidncha but original fruits array ma change hudaina
console.log(fruits2) //original fruits array ma change hudaina

const another_array=[1,2,3,[4,5,6],7,[8],9,[6,[4,5]]] //array ma array pani rakhna sakincha
const real_array=another_array.flat(Infinity) //array ma array lai flat method le single level ma rakhcha
console.log(real_array) //[1,2,3,4,5,6,7,8,9,6,[4,5]]