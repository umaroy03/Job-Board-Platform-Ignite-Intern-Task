import { firestore } from './firebaseConfig';

export const sendMessage = async (userId, text) => {
  await firestore.collection('messages').add({
    userId,
    text,
    timestamp: new Date(),
  });
};

export const getMessages = async (userId) => {
  const snapshot = await firestore.collection('messages')
    .where('userId', '==', userId)
    .orderBy('timestamp', 'desc')
    .get();
  return snapshot.docs.map(doc => doc.data());
};
