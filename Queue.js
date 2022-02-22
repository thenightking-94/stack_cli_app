function Queue() {
    /* Constructor function to emulate a Queue Object */
    /* FIFO
    example: people queueing to board a bus */
    this.lastIndexOfDequeue = 0
    this.counter = 0;
    this.storage = {};
    this.enqueue = function (element) {
        console.log("Enqueueing ", element)
        this.storage[this.counter++] = element
    }
    this.dequeue = function () {
        let dequeuedElem = this.storage[this.lastIndexOfDequeue]
        delete this.storage[this.lastIndexOfDequeue]
        this.lastIndexOfDequeue++
        return dequeuedElem ? dequeuedElem : undefined
    }
    this.front = function () {
        return this.storage[this.lastIndexOfDequeue] ? this.storage[this.lastIndexOfDequeue] : undefined
    }
    this.viewQueue = function () {
        console.log("Queue Object created ", this)
        console.log("Queue contents :")
        console.table(this.storage)
    }
    this.isEmpty = function () {
        if (Object.keys(this.storage).length === 0)
            return true
    }
    this.size = function () {
        return (this.counter - this.lastIndexOfDequeue)
    }

}

module.exports = Queue