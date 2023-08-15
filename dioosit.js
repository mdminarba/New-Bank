// step-1
document.getElementById('btn-diposit').addEventListener('click', function () {
    // step-2
    const dipositFile = document.getElementById('diposit-file');
     const newDipositAmountString = dipositFile.value;
     const newDipositAmount = parseFloat(newDipositAmountString)

     dipositFile.value = ' ';
     
     if (isNaN(newDipositAmount)) {
        alert('please provide a valid number !!!')
        return
     }

    //  step-3
    const dipositTotel = document.getElementById('diposit-totel');
    const carentDipositString = dipositTotel.innerText;
    const carentDiposit = parseFloat(carentDipositString )
    
    // step-4
    const currentDiposit = carentDiposit + newDipositAmount ;
    dipositTotel.innerText = currentDiposit;

    // step-5
    const totelBalance = document.getElementById('totel-Balance');
    const carentBalanceString = totelBalance.innerText;
    const carentBalance = parseFloat(carentBalanceString )

    const currentBalanceTotal =  carentBalance + currentDiposit ;

    totelBalance.innerText = currentBalanceTotal;
     // step-6



    // step-7
    
})
