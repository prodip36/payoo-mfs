
document.getElementById('btn-cash-out').addEventListener('click',function(event){
    // amount
    event.preventDefault();
    const amount= document.getElementById('cash-out-amount').value;

    // pin
    const pin= document.getElementById('cash-out-pin-number').value;

   

    // check pin
    if(pin == "1234")
    {
        const balance=document.getElementById('main-balance').innerText;
        // console.log(balance);
        const balanceMain=parseFloat(balance);
        const totalAmount=parseFloat(amount);
        // check balance
        if(balanceMain <totalAmount){
            alert('Insufficient Balance. Try again');
        }
        else{
            const afterBalance=balanceMain-totalAmount;
            document.getElementById('main-balance').innerText= afterBalance;
        }
    }
    else{
        alert("Wrong pin number. Try again");
    }
})