import React from "react";

const Unsplash = ({ url, key }) => {
  return (
    <div>
      <img
        className="object-cover w-full h-full shadow-2xl"
        src={url}
        key={key}
      ></img>
    </div>
  );
};

export default Unsplash;
