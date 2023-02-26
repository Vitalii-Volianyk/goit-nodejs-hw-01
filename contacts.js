const path = require("path");
const fs = require("fs/promises");

const contactsPath = path.join(__dirname, "db", "contacts.json");

// TODO: задокументувати кожну функцію
function listContacts() {
	const data = fs.readFile(contactsPath, "utf-8");
	return data;
}

function getContactById(contactId) {
	// ...твій код
}

function removeContact(contactId) {
	// ...твій код
}

function addContact(name, email, phone) {
	// ...твій код
}

module.exports = { listContacts, getContactById, removeContact, addContact };
