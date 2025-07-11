// console.log('js is connected');
document.getElementById('log-in').addEventListener('click',function(event){
    
    event.preventDefault();
    console.log('log in button clicked');
    //Phone number
    const phoneNumber=document.getElementById('phone-number');
    console.log(phoneNumber.value);
    //Pin number
    const pinNumber=document.getElementById('pin-number');
    console.log(pinNumber.value);
})