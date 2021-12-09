class Book {
    constructor(time, alice, bob) {
        this.time = time;
        this.alice = alice;
        this.bob = bob;
    }
}

let result = 0;
function solve(totalChosenBooks, listBook) {
    listBook.map((v) => {
        if (v.alice == 1 && v.bob == 1) {
            result = result + v.time;
        }
    });
}

const totalChosenBooks = 4;
const listBook = [
    new Book(7, 1, 1),
    new Book(2, 1, 1),
    new Book(4, 0, 1),
    new Book(8, 1, 1),
    new Book(1, 0, 1),
    new Book(1, 1, 1),
    new Book(1, 0, 1),
    new Book(3, 0, 0),
];


function solve(totalChosenBooks, listBook) {
    let result = 0;
    listBook.map((v) => {
        if (v.alice == 1 && v.bob == 1) {
            result = result + v.time;
        }
    });

    if(result < totalChosenBooks) {
        return -1
    }

    return result
}
