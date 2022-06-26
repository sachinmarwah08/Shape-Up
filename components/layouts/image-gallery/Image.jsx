import React, { useState, useEffect } from "react";
import Header from "../../Header";
import Loader from "../../Loader";
import Unsplash from "../../Unsplash";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const Image = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const res = await axios.get(
      "https://api.unsplash.com/photos/random?client_id=9cUKmF10zR5nvb8EEdkLjD2j284E1fMXB8EHCXuUNOE&count=10"
    );
    setImages([...images, ...res.data]);
  };

  return (
    <div>
      <Header />
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        <div className="w-[80%] mx-auto m-[4rem] grid gap-[1em] grid-cols-4 auto-rows-[300px]">
          {images.map((image) => (
            <Unsplash url={image.urls.thumb} key={image.id} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Image;
