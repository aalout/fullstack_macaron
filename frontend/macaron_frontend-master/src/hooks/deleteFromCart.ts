import { Cart } from '../types/cart';

export const deleteFromCart = async (id: number) => {
    try {
      const response = await fetch(`http://127.0.0.1:3000/api/cart/${id}`, {
        mode: 'cors',
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        console.log('Товар удален из корзины');
      } else {
        const error = await response.json();
        console.error('Ошибка удаления товара:', error);
      }
    } catch (error) {
      console.error('Ошибка сервера:', error);
    }
  };