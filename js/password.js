function passwordCheck(){
    var password = prompt("Please enter the password.");
    if (password==="KhawarHD"){
        window.location="index.html";
    } else if (password!='' && password!=null) {
        while(password !=="KhawarHD"){
            password = prompt("Please enter the password.");
        }
        window.location="index.html";
    }
}
window.onload=passwordCheck;