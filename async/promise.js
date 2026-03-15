const orderFood= new Promise(function(resolve,reject){
 const isAvaliable=false

  if(isAvaliable){
 resolve("food is avaliable")
 }
  else {
 reject("food is not avaliable")
}})

// orderFood.then(function(message){
//     console.log(message)
// })
orderFood.then(message=> console.log(message)).catch(error=> console.log(error))


