import { Cart } from '../types/cart';

export const addToCart = async (productId: number, quantity: number, price: number) => {
  const userId = 1;
  const cartData: Cart = { userId, productId, quantity, price };

  try {
    const response = await fetch('http://127.0.0.1:3000/api/cart', {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartData),
    });

    if (response.ok) {
      console.log('Товар добавлен в корзину');
    } else {
      const error = await response.json();
      console.error('Ошибка добавления в корзину:', error);
    }
  } catch (error) {
    console.error('Ошибка сервера:', error);
  }
};