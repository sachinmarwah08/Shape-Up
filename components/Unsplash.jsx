import React from 'react';

const Unsplash = ({ url, onDeleteIamge, id }) => {
  return (
    <div>
      <button
        onClick={() => onDeleteIamge(id)}
        // style={{ position: 'absolute', left: 0, top: 0 }}
      >
        delete
      </button>
      <img className="object-cover w-full h-full shadow-2xl" src={url}></img>
    </div>
  );
};

export default Unsplash;
