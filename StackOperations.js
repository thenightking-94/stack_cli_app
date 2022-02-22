const Stack = require('./Stack');
let myStackObject = new Stack();
let resetTime = 3;


//Stack Operator main function
function stackCommandInterface() {
    let options = {
        1: "push",
        2: "pop",
        3: "viewStack",
        4: "size",
        5: "peek",
        6: "End Process"
    }
    showOptions(options).then(function (resData) {
        getUserInputTerminal("Choose the number respective to Stack Operation : ").then(function (optionReceived) {
            performStackOperations(optionReceived)
        })
    })
}


//user Input logic from terminal encapsulated in a Promise
function getUserInputTerminal(paramTextToShowUser) {
    return new Promise((resolve, reject) => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
        readline.question(paramTextToShowUser, function (input) {
            resolve(input)
            readline.close()
        })
    })
}

// Executing Stack Operations as per option selected
function performStackOperations(optionReceived) {
    switch (Number(optionReceived)) {
        case 1:
            performPush()
            break;
        case 2:
            console.log(myStackObject.pop(), " is popped from the Stack")
            stackCommandInterface()
            break;
        case 3:
            myStackObject.viewStack()
            stackCommandInterface()
            break;
        case 4:
            console.log(myStackObject.size(), " is the size of the Stack")
            stackCommandInterface()
            break;
        case 5:
            console.log(myStackObject.peek(), " is the Top element in the Stack")
            stackCommandInterface()
            break;
        case 6:
            process.exit()
            break;
        default:
            resetOperations()

    }
}


//reset Stack operations in 5sec time interval
function resetOperations() {
    console.log("No valid operation selected. Resetting operations")
    let intervalTimer = setInterval(() => {
        if (resetTime >= 1)
            console.log(resetTime--)
        else {
            stackCommandInterface()
            clearInterval(intervalTimer)
        }
    }, 1000);
}


//getting input for the push element and then performing push operation
function performPush() {
    getUserInputTerminal("Enter element to push: ").then((receivedDataForPush) => {
        myStackObject.push(receivedDataForPush)
        stackCommandInterface()
    })
}


//show all valid Stack operations
function showOptions(options) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("You have the following options for the respective Stack operations :")
            console.table(options)
            resolve(true)
        }, 500)
    })
}


module.exports = stackCommandInterface;