import React, { useState, useEffect } from 'react';
import Header from '../../Header';
import Loader from '../../Loader';
import Unsplash from '../../Unsplash';

import InfiniteScroll from 'react-infinite-scroll-component';
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  startAfter,
} from 'firebase/firestore';
import { projectFirestore } from '../../../firebase/config';
import useFirestore from '../../../hooks/useFirestore';

const Image = ({ imagesData, totalDocs }) => {
  // const { docs } = useFirestore('images');
  const [images, setImages] = useState(imagesData);
  const [lastImageRef, setLastImageRef] = useState();
  const [total, setTotal] = useState(totalDocs);

  useEffect(() => {
    (async () => {
      const imagesRef = await collection(projectFirestore, 'images');
      const q = await query(imagesRef, orderBy('timestamp', 'desc'), limit(8));
      const res = await getDocs(q);

      const lastVisible = res.docs[res.docs.length - 1];
      setLastImageRef(lastVisible);
    })();
  }, []);

  const fetchImages = async () => {
    const imagesRef = collection(projectFirestore, 'images');

    const q = await query(
      imagesRef,
      orderBy('timestamp', 'desc'),
      startAfter(lastImageRef),
      limit(8)
    );
    const res = await getDocs(q);
    let documents = [];
    res.forEach((doc) => {
      documents.push({ ...doc.data(), id: doc.id });
    });
    console.log('here it is', documents);
    setImages([...images, ...documents]);
  };

  const onDeleteIamge = async (id) => {
    const deleteRef = doc(projectFirestore, 'images', id);
    await deleteDoc(deleteRef);
    const imagesRef = collection(projectFirestore, 'images');
    const q = query(imagesRef, orderBy('timestamp', 'desc'), limit(10));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let documents = [];
      querySnapshot.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
        setImages(documents);
        setTotal(documents.length);
      });
    });
    // setImages(docs);
  };

  const updateImagesData = (data, length) => {
    setImages(data);
    setTotal(length);
  };

  return (
    <div>
      <Header updateImagesData={updateImagesData} />
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={images.length < total ? true : false}
        loader={<Loader />}
      >
        <div className="w-[80%] mx-auto h-screen grid gap-[1em] grid-cols-4 auto-rows-[300px]">
          {images.map((image) => (
            <Unsplash
              url={image.url}
              key={image.id}
              id={image.id}
              onDeleteIamge={onDeleteIamge}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Image;
