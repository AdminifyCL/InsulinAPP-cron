import cron from 'node-cron';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import appFirebase from '../credenciales';

const db = getFirestore(appFirebase);

cron.schedule(`*/1 * * * *`, async () => {
  const querySnapshot = await getDocs(collection(db, 'users'));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
  console.log(`running your tarea...`);
});
