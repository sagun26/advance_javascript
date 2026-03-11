//global scope 
let username="sagun"
function greet(){
    console.log("hello"+ " " +username);
}
greet();
console.log (username);
// local scope 
function greetings(){
    let usernames="saguna";
    console.log("hello"+ " " +usernames);

}
greetings();
console.log(usernames);