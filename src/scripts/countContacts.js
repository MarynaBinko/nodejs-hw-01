import { PATH_DB } from '../constants/contacts.js';
import { readFile } from 'fs/promises';

export const countContacts = async () => {
  try {
    const data = await readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    return contacts.length;
  } catch (error) {
    console.error('Error counting contacts:', error);
    return 0;
  }
};

console.log(await countContacts());
