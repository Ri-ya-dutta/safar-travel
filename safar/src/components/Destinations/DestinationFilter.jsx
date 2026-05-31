// DestinationFilter.jsx
import React from 'react';
import styles from './DestinationFilter.module.css';
import nationalImg from "../../assets/national.jpg";
import internationalImg from "../../assets/international.jpg";


const DestinationFilter = ({ onSelectCategory, selected }) => {
  return (
    <div className={styles.filterContainer}>
      <div
        className={`${styles.filterOption} ${selected === 'National' ? styles.active : ''}`}
        onClick={() => onSelectCategory('National')}
      >
        <img src={nationalImg} alt="National" className={styles.image} />
        <p>National</p>
      </div>
      <div
        className={`${styles.filterOption} ${selected === 'International' ? styles.active : ''}`}
        onClick={() => onSelectCategory('International')}
      >
        <img src={internationalImg} alt="International" className={styles.image} />
        <p>International</p>
      </div>
    </div>
  );
};

export default DestinationFilter;
