//converting json to object
const json='{"name":"ram"}';
const obj=JSON.parse(json);
console.log(obj.name);

//cobnverting object to json 

const user={name:"sagun"};
const jsonString =JSON.stringify(user);
console.log( typeof jsonString);

//using fetch api to get data 
fetch("https://jsonplaceholder.typicode.com/photos")
    .then(response =>{
        return response.json();
    }).then(data=>{
        console.log(data);
    }).catch(error=>{
        console.log("something went wrong ");
    })