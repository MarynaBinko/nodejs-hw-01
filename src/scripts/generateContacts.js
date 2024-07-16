import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readFile, writeFile } from 'fs/promises';

const generateContacts = async (number) => {
  try {
    const data = await readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    for (let i = 0; i < number; i++) {
      contacts.push(createFakeContact());
    }

    await writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log(`${number} contacts added successfully.`);
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

generateContacts(5);

