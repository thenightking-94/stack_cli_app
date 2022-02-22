function Stack() {
    /*creation of a constructor function to emulate a "Stack";
     this does not have a value.
     It is a substitute for the new object.
     The value of this will become the new object when a new object is created.
     Stack Objects follow LIFO
     example: A stack of books */
    this.counter = 0
    this.storage = {}
    this.push = function (element) {
        console.log("Pushing ", element)
        this.storage[this.counter++] = element;
    }
    this.pop = function () {
        if (this.counter === 0)
            return undefined
        this.counter--
        var poppedElement = this.storage[this.counter]
        delete this.storage[this.counter]
        return poppedElement
    }
    this.peek = function () {
        return this.storage[this.counter - 1]
    }
    this.size = function () {
        return this.counter
    }
    this.viewStack = function () {
        if (!this.storage)
            return undefined
        else {
            console.log("Stack object created: ", this)
            console.table(this.storage)
        }
    }

}


module.exports = Stack
