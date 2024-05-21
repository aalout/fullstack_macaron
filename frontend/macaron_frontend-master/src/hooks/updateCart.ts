import { Cart } from '../types/cart';

export const updateQuantity = async (id: number, quantity: number) => {
    try {
      const response = await fetch(`http://127.0.0.1:3000/api/cart/${id}`, {
        mode: 'cors',
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity }),
      });
  
      if (response.ok) {
        console.log('Количество товара изменено');
      } else {
        const error = await response.json();
        console.error('Ошибка изменения количества товара:', error);
      }
    } catch (error) {
      console.error('Ошибка сервера:', error);
    }
  };
  