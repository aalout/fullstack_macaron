"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Holidays.module.scss';

const holidays = [
  { name: 'Новый год', date: new Date(2023, 0, 1) },
  { name: 'Новый год', date: new Date(2023, 0, 1) },
  { name: 'Пасха', date: new Date(2023, 3, 9) },
  { name: 'День Победы', date: new Date(2023, 4, 9) },
  { name: 'День Труда', date: new Date(2023, 4, 1) },
  { name: 'День f', date: new Date(2023, 6, 1) },
  { name: 'День s', date: new Date(2023, 5, 1) },
  { name: 'День 10', date: new Date(2023, 8, 15) },
];

const imagePaths = [
    '/assets/images/Holidays/02.svg',
    '/assets/images/Holidays/03.svg',
    '/assets/images/Holidays/04.svg',
  ];

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('ru-RU', options).format(date);
  };  

const Holidays = () => {
  const [nearestHolidays, setNearestHolidays] = useState<{ name: string; date: Date; }[]>([]);

  useEffect(() => {
    const currentDate = new Date();
  
    const sortedHolidays = holidays.sort((a, b) => {
      const dateA = a.date.getMonth() * 100 + a.date.getDate();
      const dateB = b.date.getMonth() * 100 + b.date.getDate();
  
      return dateA - dateB;
    });
  
    const nearestHolidays = sortedHolidays.filter(holiday => {
      const holidayDate = holiday.date.getMonth() * 100 + holiday.date.getDate();
      const currentDate = new Date().getMonth() * 100 + new Date().getDate();
      return holidayDate >= currentDate;
    }).slice(0, 5);
  
    setNearestHolidays(nearestHolidays);
  }, []);
  
  return (
    <div className={styles.holidays}>
      <h2>Ближайшие праздники:</h2>
      <div className={styles.grid}>
        <div className={styles.birthday}>
        <Image
              src="/assets/images/Holidays/01.svg"
              alt="birthday"
              width={300}
              height={300}
            />
            <p className={styles.text}>Скоро<br/>День рождения близкого человека </p>
        </div>
        {nearestHolidays.map((holiday, index) => (
          <div className={styles.item} key={index}>
            <Image
              src={imagePaths[index % imagePaths.length]}
              alt={holiday.name}
              width={86}
              height={86}
            />
            <p className={styles.text}>
            {formatDate(holiday.date)}<br />{holiday.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Holidays;