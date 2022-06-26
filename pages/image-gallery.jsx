import Image from '../components/layouts/image-gallery/Image';
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { projectFirestore } from '../firebase/config';
import Navbar from '../components/navigation/Navbar';

const ImageGallery = ({ imagesData, totalDocs }) => {
  return (
    <>
      <Navbar />
      <div className="h-screen pt-4 ">
        <Image imagesData={imagesData} totalDocs={totalDocs} />
      </div>
    </>
  );
};

export default ImageGallery;

export async function getStaticProps(context) {
  const imagesRef = collection(projectFirestore, 'images');
  /**............GET TOTAL............. */
  const totQ = await query(imagesRef, orderBy('timestamp', 'desc'));
  const totRes = await getDocs(totQ);
  const totalDocs = totRes.docs.length;
  // console.log(totalDocs);
  /**............GET TOTAL............. */
  const q = await query(imagesRef, orderBy('timestamp', 'desc'), limit(8));
  const res = await getDocs(q);
  let documents = [];
  res.forEach((doc) => {
    documents.push({ ...doc.data(), id: doc.id });
  });

  return {
    props: {
      imagesData: JSON.parse(JSON.stringify(documents)),
      totalDocs,
    }, // will be passed to the page component as props
    revalidate: 60,
  };
}
