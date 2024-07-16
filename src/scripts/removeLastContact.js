import { PATH_DB } from '../constants/contacts.js';
import { readFile, writeFile } from 'fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    if (contacts.length > 0) {
      contacts.pop();
      await writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
      console.log('Last contact removed successfully.');
    } else {
      console.log('No contacts to remove.');
    }
  } catch (error) {
    console.error('Error removing last contact:', error);
  }
};

removeLastContact();

