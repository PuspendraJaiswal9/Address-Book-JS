class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(firstName, lastName, address, city, state, zip, phone, email) {
        if (!/^[A-Z][a-zA-Z]{2,}$/.test(firstName) || !/^[A-Z][a-zA-Z]{2,}$/.test(lastName)) {
            console.log("First Name and Last Name should start with a capital letter and have at least 3 characters.");
            return;
        }
        if (address.length < 4 || city.length < 4 || state.length < 4) {
            console.log("Address, City, and State should have at least 4 characters.");
            return;
        }
        if (!/^\d{6}$/.test(zip) || !/^\d{10}$/.test(phone) || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            console.log("Invalid Zip, Phone, or Email.");
            return;
        }
        let newContact = { firstName, lastName, address, city, state, zip, phone, email };
        this.contacts.push(newContact);
        console.log("Contact Added:", newContact);
    }

    countPersonsByCity(city) {
        let count = this.contacts.filter(contact => contact.city === city).length;
        console.log(`Number of Persons in City - ${city}: ${count}`);
    }

    countPersonsByState(state) {
        let count = this.contacts.filter(contact => contact.state === state).length;
        console.log(`Number of Persons in State - ${state}: ${count}`);
    }
}

let myAddressBook = new AddressBook();

myAddressBook.addContact("Sonu", "Sharma", "123 Street", "Bhopal", "Madhya Pradesh", "462001", "5678543210", "sonu@example.com");
myAddressBook.addContact("Monu", "Verma", "456 Lane", "Indore", "Madhya Pradesh", "452001", "1234432109", "monu@example.com");
myAddressBook.addContact("Raju", "Yadav", "789 Road", "Bhopal", "Madhya Pradesh", "462002", "4321321098", "raju@example.com");
myAddressBook.addContact("Amit", "Gupta", "999 Avenue", "Mumbai", "Maharashtra", "400001", "9999988888", "amit@example.com");

myAddressBook.countPersonsByCity("Bhopal");
myAddressBook.countPersonsByState("Madhya Pradesh");
