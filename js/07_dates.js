// let myDate=new Date();
// console.log(myDate);

// console.log(myDate.toString())

//declaring a specific date 

// let createMyDate = new Date("2020-10-10")
// console.log(createMyDate.toLocaleString())

//timestamp
// let myTimeStamp = Date.now()
// console.log(myTimeStamp)

// console.log(Math.floor(Date.now() / 1000));

let newDate =new Date()
console.log(newDate.getFullYear())


console.log(newDate.toLocaleString('default',{
    weekday:"long",
    month:"long",
    day:"numeric",
    year:"numeric"
}))
