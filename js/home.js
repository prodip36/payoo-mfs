
document.getElementById('btn-add-money').addEventListener('click',function(event){
  
    event.preventDefault();
    //Amount
    const amount=document.getElementById('amount').value;
   
    // Pin num
    const pinNumber=document.getElementById('pin-number').value;
   

    if(pinNumber === "1234"){
       
        //get main balance
        const balance=document.getElementById('main-balance').innerText;
        //num conversion into Integer
        const num1= parseFloat(amount);
        const num2= parseFloat(balance);
        //add with main balance
        const totalBalance= num1 + num2;
        console.log('Total balance-', totalBalance);
       //Update balance to the UI/DOM
       document.getElementById('main-balance').innerText = totalBalance;
    } 
    else{
        alert("Wrong pin number. Try again");
    }

})