// console.log('js is connected');
document.getElementById('log-in').addEventListener('click',function(event){
    
    event.preventDefault();
    // console.log('log in button clicked');
    //Phone number
    const phoneNumber=document.getElementById('phone-number');
    // console.log(phoneNumber.value);
    //Pin number
    const pinNumber=document.getElementById('pin-number');
    // console.log(pinNumber.value);
    if(phoneNumber.value === "01860931442" && pinNumber.value === "1234")
    {
        console.log("You are logged in.")
        window.location.href='./home.html';
    }
    else{
        alert('Wrong phone or pin number');
    }

})