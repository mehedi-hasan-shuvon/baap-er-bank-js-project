//handle deposite button event
document.getElementById('deposit-button').addEventListener('click', function () {


    //get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = depositInput.value;
    if (isNaN(parseFloat(newDepositAmount))) {
        alert("please enter a valid input")
    } else {


        const depositTotal = document.getElementById('deposit-total');
        const previousDepositeAmount = depositTotal.innerText;
        const newDepositTotal = parseFloat(previousDepositeAmount) + parseFloat(newDepositAmount);
        depositTotal.innerText = newDepositTotal;



        //update account balance
        const balanceTotal = document.getElementById('balance-total');
        const newBalance = parseFloat(balanceTotal.innerText) + parseFloat(newDepositAmount);
        balanceTotal.innerText = newBalance;
        // clear the deposit inputField
        depositInput.value = ''
    }
})

//withdraw amount
document.getElementById('withdraw-button').addEventListener('click', function () {


    //get the amount withdraw
    const withdrawInput = document.getElementById('withdraw-input');
    const neWithdrawAmount = withdrawInput.value;

    if (isNaN(parseFloat(neWithdrawAmount))) {
        alert("please enter a valid input")
    } else {


        const withdrawTotal = document.getElementById('withdraw-total');
        const previousWithdrawTotalAmount = withdrawTotal.innerText;
        const newWithdrawTotal = parseFloat(previousWithdrawTotalAmount) + parseFloat(neWithdrawAmount);
        withdrawTotal.innerText = newWithdrawTotal;



        //update account balance
        const balanceTotal = document.getElementById('balance-total');
        const newBalance = parseFloat(balanceTotal.innerText) - parseFloat(neWithdrawAmount);
        balanceTotal.innerText = newBalance;
        // clear the deposit inputField
        withdrawInput.value = ''
    }
})