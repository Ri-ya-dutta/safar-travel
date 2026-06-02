// import React, { useState } from "react";
// import styles from "./About.module.css";

// const images = [
//   {
//     url: "https://www.holidify.com/images/bgImages/TALASARI-BEACH.jpg",
//     title: "Talasari Beach",
//   },
//   {
//     url: "https://thumbs.dreamstime.com/b/idyllic-summer-landscape-clear-mountain-lake-alps-45054687.jpg",
//     title: "Alpine Serenity",
//   },
//   {
//     url: "https://media.istockphoto.com/id/1345426734/photo/eiffel-tower-paris-river-seine-sunset-twilight-france.jpg?s=612x612&w=0&k=20&c=I5rAH5d_-Yyag8F0CKzk9vzMr_1rgkAASGTE11YMh9A=",
//     title: "Paris Vibes",
//   },
// ];

// const About = () => {
//   const [photoIndex, setPhotoIndex] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className={`container mt-5 ${styles.cardContainer}`}>
//       <h1 className="text-center mb-4">About Safar</h1>
//       <p className="text-center mb-5">
//         Welcome to Safar – your ultimate travel companion. We make your journey
//         unforgettable with the best destinations, seamless booking, and expert guides.
//       </p>

//       <h2 className="mb-4">Gallery</h2>
//       <div className={styles.cardContainer}>
//         {images.map((image, index) => (
//           <div className={`card border-0 ${styles.galleryCard}`} key={index}>
//             <img
//               src={image.url}
//               alt={image.title}
//               className={`card-img-top ${styles.cardImage}`}
//               onClick={() => { setPhotoIndex(index); setIsOpen(true); }}
//               style={{ cursor: 'pointer' }}
//             />
//             <div className="card-body text-center">
//               <p className={styles.cardText}>{image.title}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Custom Lightbox */}
//       {isOpen && (
//         <div
//           style={{
//             position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
//             backgroundColor: 'rgba(0,0,0,0.9)',
//             display: 'flex', alignItems: 'center', justifyContent: 'center',
//             zIndex: 1000,
//           }}
//           onClick={() => setIsOpen(false)}
//         >
//           <button
//             onClick={(e) => { e.stopPropagation(); setPhotoIndex((photoIndex + images.length - 1) % images.length); }}
//             style={{ position: 'absolute', left: 20, fontSize: 30, color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}
//           >❮</button>

//           <div onClick={(e) => e.stopPropagation()} style={{ textAlign: 'center' }}>
//             <img
//               src={images[photoIndex].url}
//               alt={images[photoIndex].title}
//               style={{ maxHeight: '80vh', maxWidth: '90vw', borderRadius: 8 }}
//             />
//             <p style={{ color: 'white', marginTop: 10 }}>{images[photoIndex].title}</p>
//           </div>

//           <button
//             onClick={(e) => { e.stopPropagation(); setPhotoIndex((photoIndex + 1) % images.length); }}
//             style={{ position: 'absolute', right: 20, fontSize: 30, color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}
//           >❯</button>

//           <button
//             onClick={() => setIsOpen(false)}
//             style={{ position: 'absolute', top: 20, right: 20, fontSize: 24, color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}
//           >✕</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default About;

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
  {
    url: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=800",
    title: "Tropical Paradise",
  },
  {
    url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800",
    title: "Streets of Kyoto",
  },
  {
    url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=800",
    title: "Sahara Dunes",
  },
  {
    url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800",
    title: "Dubai Skyline",
  },
  {
    url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=800",
    title: "Ancient Petra",
  },
  {
    url: "https://images.unsplash.com/photo-1504681869696-d977211a5f4c?q=80&w=800",
    title: "Aurora Borealis",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1673266630624-4cbef6d25ff4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "San Francisco",
  },
   {
    url: "https://plus.unsplash.com/premium_photo-1669927131902-a64115445f0f?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Chicago",
  },
   {
    url: "https://media.istockphoto.com/id/1832223799/photo/the-famous-of-landscape-view-point-as-sunset-sky-scene-at-oia-town-on-santorini-island-greece.jpg?s=2048x2048&w=is&k=20&c=i7A5EuUci6gTF-_SDr5JsGvUJOLeB-pQx20i5oCWviI=",
    title: "Greece",
  },
];

const About = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    /* Removed styles.cardContainer to prevent layout breaking, added pt-5 to clear fixed navbar */
    
    <div className="container mt-5 pt-5">
      <h1 className="text-center mb-4">About Safar</h1>
{/* <div style={{ maxWidth: '800px', margin: '0 auto' }}> */}
        <p className="text-center mb-4 text-secondary" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          Welcome to Safar – your ultimate travel companion. Founded with a passion for exploration, 
          we are dedicated to curating unforgettable journeys tailored just for you. From pristine beaches 
          to vibrant cityscapes, our expert guides and seamless booking platform ensure that every trip 
          is stress-free and extraordinary.
        </p>
        <p className="text-center mb-5 text-secondary" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          Whether you are seeking a peaceful retreat in the mountains or a thrilling adventure across the globe, 
          Safar is here to turn your travel dreams into reality. Let us help you discover the world's hidden gems 
          and create memories that will last a lifetime.
        </p>
      {/* </div> */}
      <h2 className="mb-4 text-center">Gallery</h2>
      
      {/* The grid is now only applied where it belongs: wrapping the cards */}
      <div className={styles.cardContainer}>
        {images.map((image, index) => (
          <div className={`card border-0 ${styles.galleryCard}`} key={index}>
            <img
              src={image.url}
              alt={image.title}
              className={`card-img-top ${styles.cardImage}`}
              onClick={() => { setPhotoIndex(index); setIsOpen(true); }}
            />
            <div className="card-body text-center">
              <p className={styles.cardText}>{image.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Lightbox - Styles moved to CSS module */}
      {isOpen && (
        <div className={styles.lightboxOverlay} onClick={() => setIsOpen(false)}>
          <button
            className={styles.lightboxPrev}
            onClick={(e) => { 
              e.stopPropagation(); 
              setPhotoIndex((photoIndex + images.length - 1) % images.length); 
            }}
          >
            ❮
          </button>

          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <img src={images[photoIndex].url} alt={images[photoIndex].title} />
            <p>{images[photoIndex].title}</p>
          </div>

          <button
            className={styles.lightboxNext}
            onClick={(e) => { 
              e.stopPropagation(); 
              setPhotoIndex((photoIndex + 1) % images.length); 
            }}
          >
            ❯
          </button>

          <button className={styles.lightboxClose} onClick={() => setIsOpen(false)}>
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default About;