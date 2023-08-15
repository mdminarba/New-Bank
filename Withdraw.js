// step-1
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step-2
    const withdrawFile = document.getElementById('Withdraw-file');
    const newWithdrawAmountString = withdrawFile.value;
    const newwithdrawAmount = parseFloat(newWithdrawAmountString)
       
    // step-7
     withdrawFile.value = ' ';
     
     if (isNaN(newwithdrawAmount)) {
        alert('please provide a valid number !!!')
        return
     }

    // step-3
    const withdrawTotel = document.getElementById('withdraw-totel');
    const carenwWithdrawString = withdrawTotel.innerText;
    const carenwWithdraw = parseFloat(carenwWithdrawString )



    // step-5
    const totelBalance = document.getElementById('totel-Balance');
    const carentBalanceString = totelBalance.innerText;
    const carentBalance = parseFloat(carentBalanceString )
    
    if(newwithdrawAmount > carentBalance){
        alert('Your balance low !!!')
        return
    }

     // step-4
     const currentWithdraw = carenwWithdraw + newwithdrawAmount ;
     withdrawTotel.innerText = currentWithdraw;
 

    // step-6
    const currentBalanceTotal =  carentBalance - currentWithdraw  ;
    totelBalance.innerText = currentBalanceTotal;

    
    
   
})