const stackCommandInterface = require('./StackOperations');
const queueCommandInterface = require('./QueueOperations');
//command line interface function
function runCommandLineInterface() {
    let options = {
        1: 'Perform Stack Operations',
        2: 'Perform Queue operations',
        3: 'Exit'
    }
    showOptions(options).then(function (resolvedData) {
        getUserInputTerminal("Choose number respective to Data Structure Operations :").then(function (resolvedOption) {
            console.log(resolvedOption)
            switch (Number(resolvedOption)) {
                case 1:
                    stackCommandInterface()
                    break;
                case 2:
                    queueCommandInterface()
                    break;
                case 3:
                    process.exit()
                    break;
                default:
                    resetOperations()
            }
        })
    })
}




//reset Stack operations in 5sec time interval
function resetOperations() {
    let resetTime = 3
    console.log("No valid operation selected. Resetting operations")
    let intervalTimer = setInterval(() => {
        if (resetTime >= 1)
            console.log(resetTime--)
        else {
            runCommandLineInterface()
            clearInterval(intervalTimer)
        }
    }, 1000);
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

// show DS options 
function showOptions(options) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Choose between Data Structure operations :")
            console.table(options)
            resolve(true)
        }, 500)
    })
}

runCommandLineInterface();