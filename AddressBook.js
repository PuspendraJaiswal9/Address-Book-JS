class AddressBook {
    constructor() {
        this.contacts = [];
    }

    isValidName(name) {
        return /^[A-Z][a-zA-Z]{2,}$/.test(name);
    }

    isValidAddress(address) {
        return /^[a-zA-Z0-9\s]{4,}$/.test(address);
    }

    isValidZip(zip) {
        return /^\d{6}$/.test(zip);
    }

    isValidPhone(phone) {
        return /^\d{10}$/.test(phone);
    }

    isValidEmail(email) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    }

    isDuplicate(firstName, lastName) {
        return this.contacts.some(contact => contact.firstName === firstName && contact.lastName === lastName);
    }

    addContact(firstName, lastName, address, city, state, zip, phone, email) {
        if (!this.isValidName(firstName) || !this.isValidName(lastName)) {
            throw new Error("First Name and Last Name should start with a capital letter and have at least 3 characters.");
        }
        if (!this.isValidAddress(address) || !this.isValidAddress(city) || !this.isValidAddress(state)) {
            throw new Error("Address, City, and State should have at least 4 characters.");
        }
        if (!this.isValidZip(zip)) {
            throw new Error("Zip code must be exactly 6 digits.");
        }
        if (!this.isValidPhone(phone)) {
            throw new Error("Phone number must be exactly 10 digits.");
        }
        if (!this.isValidEmail(email)) {
            throw new Error("Invalid email format.");
        }
        if (this.isDuplicate(firstName, lastName)) {
            console.log("Duplicate Entry! Contact already exists.");
            return;
        }

        let contact = { firstName, lastName, address, city, state, zip, phone, email };
        this.contacts.push(contact);
        console.log("Contact Added:", contact);
    }

    searchByCity(city) {
        return this.contacts.filter(contact => contact.city === city);
    }

    searchByState(state) {
        return this.contacts.filter(contact => contact.state === state);
    }

    getNumberOfContacts() {
        return this.contacts.length;
    }

    getContacts() {
        return this.contacts;
    }
}

const myAddressBook = new AddressBook();

try {
    myAddressBook.addContact("Sonu", "Sharma", "123 Street", "Bhopal", "Madhya Pradesh", "462001", "5678543210", "sonu@example.com");
} catch (error) {
    console.error(error.message);
}

try {
    myAddressBook.addContact("Monu", "Verma", "456 Lane", "Indore", "Madhya Pradesh", "452001", "1234432109", "monu@example.com");
} catch (error) {
    console.error(error.message);
}

try {
    myAddressBook.addContact("Raju", "Yadav", "789 Road", "Gwalior", "Madhya Pradesh", "474001", "4321321098", "raju@example.com");
} catch (error) {
    console.error(error.message);
}

console.log("Search Result (City - Bhopal):", myAddressBook.searchByCity("Bhopal"));
console.log("Search Result (State - MP):", myAddressBook.searchByState("Madhya Pradesh"));
