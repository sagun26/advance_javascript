const name=document.getElementById('username')

if(username.length<3){
    document.getElementById("invalid name")
}


//email
const email=document.getElementById('email')
const pattern=/^[a-zA-Z0-9]+@[a-z].[a-z]{2,3}$/;
 if(!pattern.test(email)){
    document.getElementById("invalid email")
 }