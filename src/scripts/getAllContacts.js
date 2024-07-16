import { PATH_DB } from '../constants/contacts.js';
import { readFile } from 'fs/promises';

export const getAllContacts = async () => {
  try {
    const data = await readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    console.error('Error getting contacts:', error);
    return [];
  }
};

console.log(await getAllContacts());

