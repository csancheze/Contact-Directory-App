// contactDB: Install the following package:
import { openDB } from 'idb';

// contactDB: Complete the initDb() function below:
const initdb = async () => {
    openDB('contactsDB', 1, {
        upgrade(db) {
          if (db.objectStoreNames.contains('contactsDB')) {
            console.log('contactsDB database already exists');
            return;
          }
          db.createObjectStore('contactDBs', { keyPath: 'id', autoIncrement: true });
          console.log('contactDBs database created');
        },
      });
};


// contactDB: Complete the postDb() function below:
export const postDb = async (name, home, cell, email)  => {
    console.log('Post to the ase');
    const contactDBsDb = await openDB('contactDBs', 1);
    const tx = contactDBsDb.transaction('contactDBs', 'readwrite');
    const store = tx.objectStore('contactDBs');
    const request = store.add({ contactDB: content });
    const result = await request;
    console.log('🚀 - data saved to the database', result);
};

// contactDB: Complete the getDb() function below:
export const getDb = async () => {
    console.log('GET all from the database');
    const contactDBsDb = await openDB('contactDBs', 1);
    const tx = contactDBsDb.transaction('contactDBs', 'readonly');
    const store = tx.objectStore('contactDBs');
    const request = store.getAll();
    const result = await request;
    console.log('result.value', result);
    return result;
};

// contactDB: Complete the deleteDb() function below:
export const deleteDb = async (id) => {
    console.log('DELETE from the database', id);
    const contactDBsDb = await openDB('contactDBs', 1);
    const tx = contactDBsDb.transaction('contactDBs', 'readwrite');
    const store = tx.objectStore('contactDBs');
    const request = store.delete(id);
    const result = await request;
    console.log('result.value', result);
    return result;
};

initdb();
