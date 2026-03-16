//
//using promises to fetch api to get data 
// fetch("https://jsonplaceholder.typicode.com/photos")
//     .then(response =>{
//         return response.json();
//     }).then(data=>{
//         console.log(data);
//     }).catch(error=>{
//         console.log("something went wrong ");
//     })
     

    //using async/ await 
    async function getPhotos(){
        console.log(3)
        const response= await fetch("https://jsonplaceholder.typicode.com/posts");
        console.log(4);
        const data = await response.json();
        console.log(5);
        //console.log(data);  
    }
    console.log(1);
    getPhotos();
    console.log(2); 
