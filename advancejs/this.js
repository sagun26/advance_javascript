// regular function 
// const user={
//     name:"sagun",
//     age:25,  
//     greet:function(){
//         console.log("Hello, " + this.name);
//     }  
// }
// user.greet(); // Output: Hello, sagun

//arrow function 
const user={
    name:"sagun",
    age:25,  
    greet:()=> {
        console.log("Hello, " + this.name);
    }  
}
user.greet(); // Output: Hello, sagun