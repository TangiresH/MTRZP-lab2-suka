class LinkedList {
    #items_list = []



    length() {
        return this.#items_list.length
    }

    append(elem) {
        if (typeof elem === "string") {
            this.#items_list.push(elem)
        } else {
            throw new Error("Wrong input data type. Enter data with type string");
        }
    }

    insert(elem, index) {
        if (typeof elem === "string") {
            if (index < 0 || index >= this.#items_list.length) {
                throw new Error("Invalid index")
            }
            this.#items_list.splice(index, 0, elem)
        } else {
            throw new Error("Wrong input data type. Enter data with type string");
        }
    }

    delete(index) {
        if (index < 0 || index >= this.#items_list.length) {
            throw new Error("Invalid index")
        }

        return this.#items_list.splice(index, 1)[0]
    }

    deleteAll(key) {
        this.#items_list = this.#items_list.filter(elem => elem !== key)
    }

    get(index) {
        return (index >= 0 && this.#items_list[index] !== undefined) ? this.#items_list[index] : new Error("Invalid index")
    }

    clone() {
        let clonedList = new LinkedList()

        for (const key of this.#items_list) {
            clonedList.append(key)
        }

        return clonedList
    }

    reverse() {
        this.#items_list.reverse()
    }

    findFirst(elem) {
        return this.#items_list.indexOf(elem)
    }

    findLast(elem) {
        return this.#items_list.lastIndexOf(elem)
    }

    clear() {
        this.#items_list = []
    }

    extend(list) {
        this.#items_list.push(...list.getStorage)
    }

    get getStorage() {
        return this.#items_list
    }
}


module.exports = LinkedList