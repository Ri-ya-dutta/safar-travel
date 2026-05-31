// import React from "react";
// import styles from "./Footer.module.css";
// import { Link } from "react-router-dom";
// import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// const Footer = () => {
//     return (
//         <footer className={styles.footer}>
//             <div className={styles.grid}>

//                 {/* Contact Info */}
//                 <div>
//                     <h4>Contact Us</h4>
//                     <ul>
//                         <li>
//                             <FaPhoneAlt style={{ color: "#25d366", marginRight: "8px" }} />
//                             +91 98765 43210
//                         </li>
//                         <li>
//                             <FaEnvelope style={{ color: "#ea4335", marginRight: "8px" }} />
//                             support@escapehub.com
//                         </li>
//                     </ul>
//                 </div>

//                 {/* Quick Links */}
//                 <div>
//                     <h4>Quick Links</h4>
//                     <ul>
//                         <li><Link to="/">Home</Link></li>
//                         <li><Link to="/destinations">Destinations</Link></li>
//                         <li><Link to="/book">Bookings</Link></li>
//                         <li><Link to="/contact">Contact</Link></li>
//                     </ul>
//                 </div>


//                 {/* Social Media Icons */}
//                 <div>
//                     <h4>Follow Us</h4>
//                     <div className={styles.socialIcons}>
//                         <a href="https://facebook.com" target="_blank" rel="noreferrer">
//                             <FaFacebook style={{ color: "#1877F2", marginRight: "8px" }} />
//                             Facebook
//                         </a>
//                         <a href="https://instagram.com" target="_blank" rel="noreferrer">
//                             <FaInstagram style={{ color: "#E1306C", marginRight: "8px" }} />
//                             Instagram
//                         </a>
//                         <a href="https://twitter.com" target="_blank" rel="noreferrer">
//                             <FaTwitter style={{ color: "#1DA1F2", marginRight: "8px" }} />
//                             Twitter
//                         </a>
//                     </div>
//                 </div>


//                 {/* Map Section (for now use a placeholder) */}
//                 <div className={styles.locationSection}>
//                     <h4>Our Location</h4>
//                     <div className={styles.mapContainer}>
//                         <iframe
//                             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.624604757905!2d88.4419499750321!3d22.709899028907537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276ac37c3d7df%3A0xd3b41f275e2cc75e!2sKalyani%20Govt.%20Engineering%20College!5e0!3m2!1sen!2sin!4v1693844782843!5m2!1sen!2sin"
//                             width="100%"
//                             height="250"
//                             style={{ border: 0 }}
//                             allowFullScreen=""
//                             loading="lazy"
//                             referrerPolicy="no-referrer-when-downgrade"
//                             title="EscapeHub Location"
//                         ></iframe>
//                     </div>
//                 </div>

//             </div>

//             <div className={styles.bottomText}>
//                 © {new Date().getFullYear()} EscapeHub. All rights reserved.
//             </div>
//         </footer>
//     );
// };

// export default Footer;

import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.grid}>
                {/* About Section */}
                <div>
                    <h4>EscapeHub</h4>
                    <p>
                    Discover your next adventure with EscapeHub – your travel companion
                    for unforgettable journeys and seamless bookings.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/destinations">Destinations</Link></li>
                        <li><Link to="/bookings">Bookings</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4>Contact Us</h4>
                    <ul className={styles.contactList}>
                        <li>
                            <FaPhoneAlt className={styles.phoneIcon} />
                            +91 98765 43210
                        </li>
                        <li>
                            <FaEnvelope className={styles.emailIcon} />
                            support@escapehub.com
                        </li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h4>Follow Us</h4>
                    <div className={styles.socialIcons}>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className={styles.facebook}>
  <FaFacebook style={{ color: '#1877f2' }} /> Facebook
</a>

                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className={styles.instagram}>
                            <FaInstagram style={{color: '#e1306c'}} /> Instagram
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className={styles.twitter}>
                            <FaTwitter style={{color: '#1da1f2'}} /> Twitter
                        </a>
                    </div>
                </div>

                <div className={styles.locationSection}>
                    <h4>
                        <FaMapMarkerAlt className={styles.locationIcon} />
                        Our Location
                    </h4>
                    <div className={styles.mapContainer}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.624604757905!2d88.4419499750321!3d22.709899028907537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276ac37c3d7df%3A0xd3b41f275e2cc75e!2sKalyani%20Govt.%20Engineering%20College!5e0!3m2!1sen!2sin!4v1693844782843!5m2!1sen!2sin"
                            width="100%"
                            height="250"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="EscapeHub Location"
                        ></iframe>
                    </div>
                </div>



            </div>

            {/* Bottom Text */}
            <div className={styles.bottomText}>
                © {new Date().getFullYear()} EscapeHub. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
