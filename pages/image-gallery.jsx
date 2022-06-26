import { NextPage } from "next";
import Image from "../components/layouts/image-gallery/Image";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
} from "firebase/firestore";
import { projectFirestore } from "../firebase/config";
import Navbar from "../components/navigation/Navbar";

const ImageGallery = ({ imagesData }) => {
  console.log(imagesData);
  return (
    <>
      <Navbar />
      <div className="h-screen pt-4 ">
        <Image imagesData={imagesData} />
      </div>
    </>
  );
};

export default ImageGallery;

export async function getStaticProps(context) {
  const imagesRef = collection(projectFirestore, "images");
  const q = await query(imagesRef, orderBy("timestamp", "desc"), limit(8));
  const res = await getDocs(q);
  // const imagesRef = collection(projectFirestore, 'images');
  // const res = await getDocs(imagesRef);
  let documents = [];
  res.forEach((doc) => {
    documents.push({ ...doc.data(), id: doc.id });
  });

  return {
    props: {
      imagesData: JSON.parse(JSON.stringify(documents)),
    }, // will be passed to the page component as props
  };
}
