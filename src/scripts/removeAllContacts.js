import { PATH_DB } from '../constants/contacts.js';
import { writeFile } from 'fs/promises';

export const removeAllContacts = async () => {
  try {
    await writeFile(PATH_DB, JSON.stringify([], null, 2));
    console.log('All contacts removed successfully.');
  } catch (error) {
    console.error('Error removing contacts:', error);
  }
};

removeAllContacts();

