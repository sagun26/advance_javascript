// function greetuser(username,callback)
// {
//     console.log("Hello"+username);
//     callback();
// }
// function saybye(){
//     console.log("goodbye");

// }
// greetuser("sagun",saybye);
function loginUser(username,callback){
    console.log(username);
    setTimeout(() => {
       callback("saguna"); 
    },3000);
}

loginUser("sagun",function(username){
    console.log("hello "+username);

    getUserData(username , function(data){
        console.log(data);
    
        getuserpost(data, function(post){
            console.log(post);

    })

    
})
});