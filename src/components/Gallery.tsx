/// <reference types="webpack-env" />
import React, { useEffect, useState } from "react";
import Modal from "./Utilities/Modal";
import { Helmet } from "react-helmet-async";

// Dynamically import all images from the gallery folder
function importAll(r: __WebpackModuleApi.RequireContext): string[] {
  return r.keys().map(r) as string[];
}

const images: string[] = importAll(
  require.context("./assets/images/Gallery", false, /\.(png|jpe?g|svg)$/)
);

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  useEffect(() => {
    // Scroll to the top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Sin Nombre Photo Gallery</title>
        <meta
          name="description"
          content="Cardiff Based Mexican Street Food Photo Gallery, the most authentic mexican street food"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="w-full min-h-screen py-20 after:h-5 after:w-5 after:absolute ">
        <h1 className="text-xl text-white text-center pb-2 opacity-100 drop-shadow-lg">
          Gallery
        </h1>
        <main className="content-box">
          {images.map((image, index) => (
            <img
              key={index}
              className="w-full mb-4 rounded-lg cursor-pointer"
              src={image}
              alt={`Gallery image ${index + 1}`}
              onClick={() => handleImageClick(image)}
            />
          ))}
        </main>
        {selectedImage && <Modal image={selectedImage} onClose={closeModal} />}
      </div>
    </>
  );
}
