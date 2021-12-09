class Book {
    constructor(time, alice, bob) {
        this.time = time;
        this.alice = alice;
        this.bob = bob;
    }
}

function solve(totalChosenBooks, listBook) {
    let result = 0;
    listBook.map((v) => {
        if (v.alice == 1 && v.bob == 1) {
            result = result + v.time;
        }
    });

    if (result < totalChosenBooks) {
        return -1;
    }

    return result;
}
class Main {
    constructor(totalChosenBooks, listBook) {
        this.totalChosenBooks = totalChosenBooks;
        this.listBook = listBook;
    }
    getResult() {
        return solve(this.totalChosenBooks, this.listBook);
    }
}

const total = 4;
const array = [
    new Book(7, 1, 1),
    new Book(2, 1, 1),
    new Book(4, 0, 1),
    new Book(8, 1, 1),
    new Book(1, 0, 1),
    new Book(1, 1, 1),
    new Book(1, 0, 1),
    new Book(3, 0, 0),
];

const finalResult = new Main(total, array);

console.log(finalResult.getResult());
