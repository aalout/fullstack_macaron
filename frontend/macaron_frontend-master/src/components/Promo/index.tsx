"use client"

import React, { useState } from 'react';
import styles from './Promo.module.scss';
import PromoCard from '../PromoCard';
import { usePromoQuery } from '../../hooks/usePromoQuery'; 

const Promo = () => {
  const { data: promos } = usePromoQuery();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Обработка загрузки
  if (!promos) {
    return <div>Loading...</div>;
  }

  const promoCards = promos.map((promo) => (
    <PromoCard key={promo.id} promo={promo} />
  ));

  const handleNext = () => {
    if (currentIndex < promoCards.length - 4) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const dots = Array(promoCards.length - 3).fill(0);

  return (
    <div>
      <div className={styles.promo_con_title}>
        <h1>Акции</h1>
      </div>
      <div className={styles.promoCon}>
        <div className={styles.promo}>
          {promoCards.slice(currentIndex, currentIndex + 4)}
        </div>
        <div className={styles.arrows}>
          <button onClick={handlePrev} disabled={currentIndex === 0}>&lt;</button>
          <button onClick={handleNext} disabled={currentIndex === promoCards.length - 4}>&gt;</button>
        </div>
        <div className={styles.indicator}>
          {dots.map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Promo;
