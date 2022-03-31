const loginBtn = document.getElementById("btn-submit");
loginBtn.addEventListener("click",()=>{
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    if(!email.value.length || !password.value.length){
        document.getElementById("warning-login").style.display="inline-block";
    } else {
        if(email.value=="amar@baperhotel.com" && password.value=="pass123"){
            window.location.href = "banking.html"
        } else {
            document.getElementById("warning-login").style.display="inline-block";
        }
    }
})
