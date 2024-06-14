import { firestore } from './firebaseConfig';

export const getJobs = async () => {
  const snapshot = await firestore.collection('jobs').get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getJobDetails = async (jobId) => {
  const doc = await firestore.collection('jobs').doc(jobId).get();
  return { id: doc.id, ...doc.data() };
};
