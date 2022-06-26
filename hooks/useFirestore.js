import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collectionName) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const imagesRef = collection(projectFirestore, collectionName);
    const q = query(imagesRef, orderBy('timestamp', 'desc'), limit(10));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let documents = [];
      querySnapshot.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
        setDocs(documents);
      });
    });

    return () => unsub();
    // this is a cleanup function that react will run when
    // a component using the hook unmounts
  }, [collectionName]);

  return { docs };
};

export default useFirestore;
