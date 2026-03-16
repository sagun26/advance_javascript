const orderFood = new Promise(function(resolve, reject){
const isAvaliable=true;
if(isAvaliable){
    resolve("food is avaliable")
  }else{
    reject("food is not avaliable")
 }
 })
 // console.log(typeof orderFood);
 orderFood.then(message=>console.log(message)).catch(error=> console.log(error))  

 loginUser("sagun",function(username){
    console.log("hello "+username);

    getUserData(username , function(data){
        console.log(data);
    
        getuserpost(data, function(post){
            console.log(post);

    })
})
})
 
 loginUser
    .then(getUserData)
    .then(getUserPosts)
    .then(posts =>console.log(post))
    .catch(error=> console.log(error))