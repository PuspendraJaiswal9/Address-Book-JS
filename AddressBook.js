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

        let contact = { firstName, lastName, address, city, state, zip, phone, email };
        this.contacts.push(contact);
        console.log("Contact Added:", contact);
    }

    getContacts() {
        return this.contacts;
    }
}

const myAddressBook = new AddressBook();

try {
    myAddressBook.addContact("John", "Doe", "123 Street", "New York", "New India", "100001", "1234567890", "john@example.com");
} catch (error) {
    console.error(error.message);
}

try {
    myAddressBook.addContact("jo", "doe", "12", "NY", "N", "123", "12345", "invalidemail");
} catch (error) {
    console.error(error.message);
}

console.log(myAddressBook.getContacts());
