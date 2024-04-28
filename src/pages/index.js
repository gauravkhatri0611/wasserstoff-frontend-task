import { useState, useEffect } from 'react';
import { Inter } from 'next/font/google';
import LandingPage from '@/components/LandingPage';
import CollectionPage from '@/components/CollectionPage';
import styles from '../pages/styles.module.scss';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [showCollectionPage, setShowCollectionPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCollectionPage(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      <div className={`${styles.page} ${showCollectionPage ? styles.pageActive : ''}`}>
        <LandingPage />
      </div>
      <div className={`${styles.page} ${showCollectionPage ? styles.pageActive : ''}`}>
        {showCollectionPage && <CollectionPage />}
      </div>
    </div>
  );
}
