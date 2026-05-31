// SubcategoryDropdown.jsx
import React from 'react';
import styles from './SubcategoryDropdown.module.css';

const subcategories = [
  'Beaches',
  'Mountains',
  'Forests',
  'Deserts',
  'Lakes',
  'Historical',
  'Adventure'
];

const SubcategoryDropdown = ({ category, onSelectSubcategory, selected }) => {
  return (
    <div className={styles.dropdownContainer}>
      <h3 className={styles.dropdownTitle}>{category} Subcategories</h3>
      <div className={styles.subcategoryList}>
        {subcategories.map((item) => (
          <button
            key={item}
            onClick={() => onSelectSubcategory(item)}
            className={`${styles.subcategoryButton} ${selected === item ? styles.active : ''}`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SubcategoryDropdown;
