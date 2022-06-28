document.getElementById('deposit-submit-btn').addEventListener('click', function(){
    // Get the deposit input amount
    const depositField = document.getElementById('deposit-field');
    const depositAmount = parseFloat(depositField.value);

    // Get the current deposit amount
    const currentDeposit = document.getElementById('deposit-amount');
    const currentDepositValue = parseFloat(currentDeposit.innerText);

    // Update the deposit amount
    currentDeposit.innerText = depositAmount + currentDepositValue;

    // Get the current balance by using currentBalance function

    const presentBalance = currentBalance();

    // Update the current balance
    document.getElementById('balance-amount').innerText = depositAmount + presentBalance;

    // Clear the input field
    depositField.value = '';
});

document.getElementById('withdraw-submit-btn').addEventListener('click', function(){
    // Get the withdraw input amount
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawValue = parseFloat(withdrawField.value);

    // Get the current withdraw amount
    const currentWithdraw = document.getElementById('withdraw-amount');
    const currentWithdrawValue = parseFloat(currentWithdraw.innerText);

    // Update withdraw amount
    currentWithdraw.innerText = withdrawValue + currentWithdrawValue;

    // Get present balance amount
    const presentBalance2 = currentBalance();

    // Update present balance
    document.getElementById('balance-amount').innerText = presentBalance2 - withdrawValue;

    // Clear the withdraw input field
    withdrawField.value = '';
});

// Get current balance value
const currentBalance = function(){
    const currentBalance = document.getElementById('balance-amount');
    const currentBalanceText = currentBalance.innerText;
    const currentBalanceValue = parseFloat(currentBalanceText);
    return currentBalanceValue;
};