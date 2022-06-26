import Image from "next/image";
import React from "react";

const people = [
  {
    id: 1,
    image: "/assets/images/userEight.png",
    name: "Justin Daniel",
    trainer: "Manish",
    title:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    id: 2,
    image: "/assets/images/userFive.png",
    name: "Matthew Davidson",
    trainer: "Manish",
    title:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    id: 3,
    image: "/assets/images/userNine.png",
    name: "Matthew Davidson",
    trainer: "Manish",
    title:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    id: 4,
    image: "/assets/images/userTwo.png",
    name: "Matthew Davidson",
    trainer: "Manish",
    title:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
];

const Cards = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center mt-10 lg:mt-0 mx-auto w-[90%] h-full mb-10 justify-evenly">
        {people.map((item) => (
          <div className="items-center mx-auto text-center">
            <Image
              className="rounded-full"
              width={150}
              height={140}
              src={item.image}
            />
            <h1 className="text-[20px] font-medium pb-4 pt-4 text-center items-center">
              {item.name}
            </h1>
            <p className="text-[18px] pb-4 text-greyText text-center font-medium uppercase items-center">
              {item.trainer}
            </p>
            <p className="text-[16px] text-greyText px-9 pb-8 text-center items-center">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
