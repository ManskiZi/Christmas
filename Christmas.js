// Class representing a Kid with a Christmas list
class Kid {
    christmasList = [];

    // Constructor to initialize Kid's properties
    constructor(name, age, naughty) {
        this.name = name;
        this.age = age;
        this.naughty = naughty;
    }

    // Method to add an item to the Kid's Christmas list
    addItem = (item) => {
        this.christmasList.push(item);
    }

    // Method to print items in the Kid's Christmas list
    printItems = () => {
        let christmasItems = this.christmasList.length;

        // Check if the list is empty
        if (christmasItems === 0) {
            console.log(`${this.name}'s list is empty.`);
        } else {
            console.log(`${this.name}'s items consist of:`);
            // Iterate through the list and log each item
            for (let i = 0; i < christmasItems; i++) {
                console.log(this.christmasList[i]);
            }
        }
    }
}

// Class representing Santa with Naughty and Good lists
class Santa {
    NaughtyList = [];
    GoodList = [];

    // Method to deliver presents to kids on the Good list
    deliverPresents = () => {
        let numKids = this.GoodList.length;

        // Check if there are kids on the Good list
        if (numKids === 0) {
            console.log("No kids on the good list. No presents to deliver.");
        } else {
            console.log("Delivering presents to:");
            // Iterate through the Good list and log each kid's name
            for (let i = 0; i < numKids; i++) {
                console.log(this.GoodList[i].name);
            }
        }
    }
}

// Create an instance of Santa
const SaintNicholas = new Santa();

// Create instances of Kid
const nala = new Kid("Nala", 12, true);
const devon = new Kid("Devon", 15, false);
devon.addItem("bike");
devon.addItem("computer");
devon.addItem("book");
devon.addItem("coins");
devon.printItems();

// Function to determine if a kid is Naughty or Nice using a Promise
const NaughtyOrNice = (kid) => {
    return new Promise(function(resolve, reject) {
        if (!kid.naughty) {
            SaintNicholas.GoodList.push(kid);
            resolve(`${kid.name} joins the good list`);
        } else {
            SaintNicholas.NaughtyList.push(kid);
            reject(`${kid.name} joins the naughty list`);
        }
    });
};

// Get Promises for NaughtyOrNice status of each kid
const devonNice = NaughtyOrNice(devon);
const nalaNice = NaughtyOrNice(nala);

// Function to log the result of each kid's NaughtyOrNice status
// NON stands for Naughty or Nice
async function SantasList(NON) {
    try {
        let Good = await NON;
        console.log(Good);
    } catch (Naughty) {
        console.log(Naughty);
    }
}

// Log the NaughtyOrNice status of each kid
SantasList(devonNice);
SantasList(nalaNice);

// Santa delivers presents to kids on the Good list
SaintNicholas.deliverPresents();
