import cron from 'node-cron';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './credenciales';

cron.schedule(`*/1 * * * *`, async () => {
  const querySnapshot = await getDocs(collection(db, 'usuarios'));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
  console.log(`running your tarea...`);
});
