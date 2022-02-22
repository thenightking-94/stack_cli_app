const Queue = require('./Queue');
let myQueueObj = new Queue();
let resetTime = 3;


//Queue Operator main function
function queueCommandInterface() {
    let options = {
        1: "enQueue",
        2: "deQueue",
        3: "viewQueue",
        4: "size",
        5: "isEmpty",
        6: "viewfront",
        7: "End Process"
    }
    showOptions(options).then(function (resData) {
        getUserInputTerminal("Choose the number respective to Queue Operation : ").then(function (optionReceived) {
            performQueueOperations(optionReceived)
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

// Executing Queue Operations as per option selected
function performQueueOperations(optionReceived) {
    switch (Number(optionReceived)) {
        case 1:
            performEnqueue()
            break;
        case 2:
            console.log(myQueueObj.dequeue(), " is dequeued from the Queue")
            queueCommandInterface()
            break;
        case 3:
            myQueueObj.viewQueue()
            queueCommandInterface()
            break;
        case 4:
            console.log(myQueueObj.size(), " is the size of the Queue")
            queueCommandInterface()
            break;
        case 5:
            console.log(myQueueObj.isEmpty() ? "Queue is empty" : "Queue is not empty")
            queueCommandInterface()
            break;
        case 6:
            console.log(myQueueObj.front(), ' is the front element is the Queue')
            queueCommandInterface()
            break;
        case 7:
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
            queueCommandInterface()
            clearInterval(intervalTimer)
        }
    }, 1000);
}


//getting input for the push element and then performing push operation
function performEnqueue() {
    getUserInputTerminal("Enter element to enqueue: ").then((receivedDataForPush) => {
        myQueueObj.enqueue(receivedDataForPush)
        queueCommandInterface()
    })
}


//show all valid Stack operations
function showOptions(options) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("You have the following options for the respective Queue operations :")
            console.table(options)
            resolve(true)
        }, 500)
    })
}


module.exports = queueCommandInterface;