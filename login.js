var button=document.getElementById("button")
button.addEventListener("click",function(){
var username=document.getElementById("username").value;
if (username=="") {
    var alert=document.getElementById("userkey")
    alert.style.display="block"    
}
else if (!isNaN(username)) {
    var error=document.getElementById("userkey1")
    error.style.display="block"
}
})
button.addEventListener("click",function(){
var password=document.getElementById("password").value;
var cpassword=document.getElementById("Cpassword").value;
if (password.localeCompare(cpassword)>0){
var alert1=document.getElementById("passkey")
alert1.style.display="block"
}
})