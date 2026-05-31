// import React from "react";
// import styles from "./About.module.css";
// import 'react-image-lightbox/style.css';
// import Lightbox from 'react-image-lightbox';


// const About = () => {
//   return (
//     <div className="container mt-5 text-white">
//       <h1 className="text-center mb-4 text-dark">About EscapeHub</h1>
//       <p className="lead text-center mb-5 text-dark">
//         Welcome to EscapeHub – your ultimate travel companion! We aim to make
//         your journey unforgettable with the best destination choices, seamless
//         booking, and expert guides.
//       </p>

//       <h2 className="mb-4">Gallery</h2>
//       <div className="row row-cols-1 row-cols-md-3 g-4">
//         <div className="col">
//           <div className={`card border-0 ${styles.galleryCard}`}>
//             <img
//               src="https://www.holidify.com/images/bgImages/TALASARI-BEACH.jpg"
//               className={`card-img-top rounded ${styles.zoomImg}`}
//               alt="Beach"
//             />
//             <div className="card-body text-center">
//               <h5 className="card-title">Talasari Beach</h5>
//             </div>
//           </div>
//         </div>

//         <div className="col">
//           <div className={`card border-0 ${styles.galleryCard}`}>
//             <img
//               src="https://thumbs.dreamstime.com/b/idyllic-summer-landscape-clear-mountain-lake-alps-45054687.jpg"
//               className={`card-img-top rounded ${styles.zoomImg}`}
//               alt="Alpine Lake"
//             />
//             <div className="card-body text-center">
//               <h5 className="card-title">Alpine Serenity</h5>
//             </div>
//           </div>
//         </div>

//         <div className="col">
//           <div className={`card border-0 ${styles.galleryCard}`}>
//             <img
//               src="https://media.istockphoto.com/id/1345426734/photo/eiffel-tower-paris-river-seine-sunset-twilight-france.jpg?s=612x612&w=0&k=20&c=I5rAH5d_-Yyag8F0CKzk9vzMr_1rgkAASGTE11YMh9A="
//               className={`card-img-top rounded ${styles.zoomImg}`}
//               alt="Paris"
//             />
//             <div className="card-body text-center">
//               <h5 className="card-title">Paris Vibes</h5>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
import React, { useState } from "react";
import styles from "./About.module.css";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
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
  {images.map((image, index) => (
    <div className={`card border-0 ${styles.galleryCard}`} key={index}>
      <img
        src={image.url}
        alt={image.title}
        className={`card-img-top ${styles.cardImage}`}
        onClick={() => {
          setPhotoIndex(index);
          setIsOpen(true);
        }}
      />
      <div className="card-body text-center">
        <p className={styles.cardText}>{image.title}</p>
      </div>
    </div>
  ))}


      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex].url}
          nextSrc={images[(photoIndex + 1) % images.length].url}
          prevSrc={images[(photoIndex + images.length - 1) % images.length].url}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
          imageCaption={images[photoIndex].title}
        />
      )}
    </div>
  
  );
};

export default About;
