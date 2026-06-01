import React, { useState } from "react";
import styles from "./About.module.css";

const images = [
  {
    url: "https://www.holidify.com/images/bgImages/TALASARI-BEACH.jpg",
    title: "Talasari Beach",
  },
  {
    url: "https://thumbs.dreamstime.com/b/idyllic-summer-landscape-clear-mountain-lake-alps-45054687.jpg",
    title: "Alpine Serenity",
  },
  {
    url: "https://media.istockphoto.com/id/1345426734/photo/eiffel-tower-paris-river-seine-sunset-twilight-france.jpg?s=612x612&w=0&k=20&c=I5rAH5d_-Yyag8F0CKzk9vzMr_1rgkAASGTE11YMh9A=",
    title: "Paris Vibes",
  },
];

const About = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`container mt-5 ${styles.cardContainer}`}>
      <h1 className="text-center mb-4">About Safar</h1>
      <p className="text-center mb-5">
        Welcome to Safar – your ultimate travel companion. We make your journey
        unforgettable with the best destinations, seamless booking, and expert guides.
      </p>

      <h2 className="mb-4">Gallery</h2>
      <div className={styles.cardContainer}>
        {images.map((image, index) => (
          <div className={`card border-0 ${styles.galleryCard}`} key={index}>
            <img
              src={image.url}
              alt={image.title}
              className={`card-img-top ${styles.cardImage}`}
              onClick={() => { setPhotoIndex(index); setIsOpen(true); }}
              style={{ cursor: 'pointer' }}
            />
            <div className="card-body text-center">
              <p className={styles.cardText}>{image.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Lightbox */}
      {isOpen && (
        <div
          style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.9)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 1000,
          }}
          onClick={() => setIsOpen(false)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setPhotoIndex((photoIndex + images.length - 1) % images.length); }}
            style={{ position: 'absolute', left: 20, fontSize: 30, color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}
          >❮</button>

          <div onClick={(e) => e.stopPropagation()} style={{ textAlign: 'center' }}>
            <img
              src={images[photoIndex].url}
              alt={images[photoIndex].title}
              style={{ maxHeight: '80vh', maxWidth: '90vw', borderRadius: 8 }}
            />
            <p style={{ color: 'white', marginTop: 10 }}>{images[photoIndex].title}</p>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); setPhotoIndex((photoIndex + 1) % images.length); }}
            style={{ position: 'absolute', right: 20, fontSize: 30, color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}
          >❯</button>

          <button
            onClick={() => setIsOpen(false)}
            style={{ position: 'absolute', top: 20, right: 20, fontSize: 24, color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}
          >✕</button>
        </div>
      )}
    </div>
  );
};

export default About;