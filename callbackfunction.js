function greet(name, callback)
{
    console.log("Hello," + name);
    callback();

}
function saybye(){
    console.log("Goodbye!");
}
greet("sagun", saybye);

// timeout function
setTimeout(function(){
    console.log("This message is displayed after 2 seconds.");
},2000);

const items=[1,2,3,4,5];
items.forEach(function(item){
    console.log(item);
})