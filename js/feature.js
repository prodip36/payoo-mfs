// console.log('feature added');
document.getElementById('btn-main-cash-out').addEventListener('click',function(){
    document.getElementById('form-cash-out').classList.remove('hidden');
    document.getElementById('form-add-money').classList.add('hidden');
   
})

document.getElementById('btn-main-add-money').addEventListener('click',function(){
    document.getElementById('form-cash-out').classList.add('hidden');
    document.getElementById('form-add-money').classList.remove('hidden');

})