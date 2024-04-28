import React, { useState } from 'react';
import styles from './styles.module.scss';

const ToggleButton = () => {
  const [isEventsSelected, setIsEventsSelected] = useState(true);

  const handleToggle = () => {
    setIsEventsSelected(!isEventsSelected);
  };

  return (
    <div className={styles.toggleButton}>
      <button
        className={`${isEventsSelected ? styles.activeButton : styles.inactiveButton} ${styles.leftButton}`}
        onClick={handleToggle}
      >
        <span className={styles.buttonText}>Events</span>
      </button>
      <button
        className={`${!isEventsSelected ? styles.activeButton : styles.inactiveButton} ${styles.rightButton}`}
        onClick={handleToggle}
      >
        <span className={styles.buttonText}>Collection</span>
      </button>
    </div>
  );
};

export default ToggleButton;
