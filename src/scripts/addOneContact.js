import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readFile, writeFile } from 'fs/promises';

export const addOneContact = async () => {
  try {
    const data = await readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    contacts.push(createFakeContact());

    await writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log('One contact added successfully.');
  } catch (error) {
    console.error('Error adding contact:', error);
  }
};

addOneContact();
