const depositeBtn = document.getElementById("btn-deposit");
const withdrawBtn = document.getElementById("btn-withdraw");
const depositeDisplay = document.getElementById("deposite-display");
const withdrawDisplay = document.getElementById("withdraw-display");
const balance = document.getElementById("balance");
const deposit = document.getElementById("deposit");
const withdraw = document.getElementById("withdraw");

if(document.referrer.includes("index")){
    document.getElementById("display-section").style.display = "block";
}

console.log(document.referrer)

//deposite function
depositeBtn.addEventListener("click",function(){
    const depositAmount = parseInt(deposit.value);
    const balanceAmount = parseInt(balance.innerText);
    if(!deposit.value.length){
        document.getElementById("deposit-warning").style.display= "inline-block";        
    } else {
        document.getElementById("deposit-warning").style.display="none";
        const newAmount = balanceAmount + depositAmount;
        balance.innerText = newAmount;
        const depositeDisplayAmount = parseInt(depositeDisplay.innerText);
        const newDeposit = depositeDisplayAmount + depositAmount;
        depositeDisplay.innerText = newDeposit;
        deposit.value="";
    }
});

//withdraw Function
withdrawBtn.addEventListener("click",()=>{
    document.getElementById("withdraw-warning").style.display= "none";
    const withdrawAmount = parseInt(withdraw.value);
    const balanceAmount = parseInt(balance.innerText);
    if(withdraw.value.length){
        const newAmount = balanceAmount - withdrawAmount;
        balance.innerText = newAmount;
        const withdrawDisplayAmount = parseInt(withdrawDisplay.innerText);
        const newDeposit = withdrawDisplayAmount + withdrawAmount;
        withdrawDisplay.innerText = newDeposit;
        withdraw.value="";
    } else {
        document.getElementById("withdraw-warning").style.display= "inline-block";
    }
})