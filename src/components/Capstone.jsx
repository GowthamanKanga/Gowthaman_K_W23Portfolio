import React from "react";
import { capstone } from "../data/data";
import image1 from "../data/wireframe/image1.png";
import image2 from "../data/wireframe/image2.png";
import image3 from "../data/wireframe/image3.png";
import image4 from "../data/wireframe/image4.png";
import image5 from "../data/wireframe/image5.png";

const Capstone = () => {
  const images = [image1, image2, image3, image4, image5];

  return (
    <div name="about" className="w-full min-h-screen bg-[#0a192f] text-gray-300 flex flex-col">
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center items-center flex-1 px-4 py-8">
        <div className="w-full text-center mb-8">
          <p className="text-4xl font-bold border-b-4 border-pink-600 inline-block">
            {capstone[0].title}
          </p>
        </div>
        <div className="w-full">
          <p>{capstone[0].content}</p>
        </div>
        <div className="w-full">
          <p>{capstone[1].content}</p>
        </div>
        <div className="w-full text-center mb-8">
          <p className="text-4xl font-bold border-b-4 border-pink-600 inline-block">
            {capstone[2].title}
          </p>
        </div>
        <div className="w-full">
          <p>{capstone[2].content}</p>
        </div>
        <div className="w-full text-center mb-8">
          <p className="text-4xl font-bold border-b-4 border-pink-600 inline-block">
            {capstone[3].title}
          </p>
        </div>
        <div className="w-full">
          <p>{capstone[3].content}</p>
        </div>
        <div className="w-full mt-8">
          <h2 className="text-4xl font-bold border-b-4 border-pink-600 inline-block mb-4 text-center">Wireframe</h2>
          <div className="grid grid-cols-2 gap-8">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Wireframe ${index + 1}`}
                className="max-w-full h-auto"
              />
            ))}
          </div>
        </div>
        <div className="w-full text-center mt-8">
          <a
            href="https://github.com/GowthamanKanga/Capstone-Project-Documentation"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-600 text-white rounded-md py-2 px-4 mt-4 hover:bg-pink-700"
          >
            View on GitHub
          </a>
        </div>
      </div>
      <footer className="bg-gray-900 py-4">
        <div className="max-w-5xl mx-auto px-4 text-gray-300 text-center">
          <p>
            &copy; {new Date().getFullYear()}
            {" "}
            Gowthaman Kangatharan
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Capstone;
