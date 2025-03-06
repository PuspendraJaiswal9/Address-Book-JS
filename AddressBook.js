class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(firstName, lastName, address, city, state, zip, phone, email) {
        let contact = { firstName, lastName, address, city, state, zip, phone, email };
        this.contacts.push(contact);
        console.log("Contact Added:", contact);
    }

    getContacts() {
        return this.contacts;
    }
}


const myAddressBook = new AddressBook();
myAddressBook.addContact("Puspendra", "Jaiswal", "123 Street", "New York", "NY", "10001", "1234567890", "puspa@example.com");

console.log(myAddressBook.getContacts());
