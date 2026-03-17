async function getPhotos(){

    try{

    
        const response= await fetch("https://jsonplaceholder.typicode.com/posts");
        const response1= await fetch("https://jsonplaceholder.typicode.com/posts");
        const response2= await fetch("https://jsonplaceholder.typicode.com/posts");
       
        if (response.ok){
            const data = await response.json();
            console.log(data);  
        }else{
            throw new Error("something went  wrong ")
        }
        
    }catch(error){
        console.log(error);
    }

    }
    getPhotos();    
    