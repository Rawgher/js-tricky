function createAccount(pin, amount = 0) {
    let balance = amount;
    const validatePin = (inputPin) => {
        return inputPin === pin;
    }

    return {
        checkBalance(inputPin) {
            if (!validatePin(inputPin)) {
                return 'Invalid PIN.'
            }
    
            return `$${balance}`;
        },

        deposit(inputPin, enteredAmount) {
            if (!validatePin(inputPin)) {
                return 'Invalid PIN.'
            }
    
            balance += enteredAmount;
            return `Successfully deposited $${enteredAmount}. Current balance: $${balance}.`;
        },

        withdraw(inputPin, enteredAmount) {
            if (!validatePin(inputPin)) {
                return 'Invalid PIN.'
            }
            if (enteredAmount > balance) {
                return "Withdrawal amount exceeds account balance. Transaction cancelled.";
            }
    
            balance -= enteredAmount;
            return `Successfully withdrew $${enteredAmount}. Current balance: $${balance}.`;
        },

        changePin(inputPin, newPin) {
            if (!validatePin(inputPin)) {
                return 'Invalid PIN.';
            }
            pin = newPin;
            return 'PIN successfully changed!';
        }
    }
}

module.exports = { createAccount };
