import {
  addDoc,
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useState } from 'react';
import { projectFirestore, projectStorage } from '../firebase/config';

type HeaderPropsType = {
  updateImagesData: (a: any, b: any) => {};
};

const Header = ({ updateImagesData }: HeaderPropsType) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [complete, setComplete] = useState('');
  const [progress, setProgress] = useState(0);

  const types = ['image/png', 'image/jpeg'];

  const handleChange = (e: any) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      // references
      const storageRef = ref(projectStorage, selected.name);
      const uploadTask = uploadBytesResumable(storageRef, selected);
      // const collectionRef = projectFirestore.collection('images');

      uploadTask.on(
        'state_changed',
        (snap) => {
          let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
          setProgress(percentage);
        },
        (err: any) => {
          setError(err);
        },
        async () => {
          const url = await getDownloadURL(uploadTask.snapshot.ref);
          const docRef = await addDoc(collection(projectFirestore, 'images'), {
            url,
            timestamp: serverTimestamp(),
          });
          setComplete(url);
        }
      );
      const imagesRef = collection(projectFirestore, 'images');
      const q = query(imagesRef, orderBy('timestamp', 'desc'), limit(10));
      const unsub = onSnapshot(q, (querySnapshot: any) => {
        let documents: any = [];
        querySnapshot.forEach((doc: any) => {
          documents.push({ ...doc.data(), id: doc.id });
          updateImagesData(documents, documents.length);
        });
      });

      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  };

  return (
    <div className="flex flex-col items-center mt-10 mb-20 justify-center w-[60%] mx-auto text-center">
      <label className="flex flex-col items-center w-64 px-4 py-6 tracking-wide uppercase bg-white border rounded-lg shadow-lg cursor-pointer text-blue border-greyText hover:bg-blue hover:text-white">
        <svg
          className="w-8 h-8"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="mt-2 text-base leading-normal">Select a file</span>
        <input onChange={handleChange} type="file" className="hidden" />
      </label>
      {complete ? null : (
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${progress}%`, background: 'green' }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Header;
