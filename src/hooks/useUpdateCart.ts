import { useSetCartState } from '../recoils/recoilCart';
import { useMutation } from './useMutation';

import { CartItemType } from '../types';
import { FETCH_METHOD, FETCH_URL, QUANTITY } from '../constants';
import { useApiBaseUrlValue } from '../recoils/recoilApiBaseUrl';

export const useUpdateCart = () => {
  const baseUrl = useApiBaseUrlValue();

  const { mutation: addCartMutation, error: addCartError } = useMutation(FETCH_METHOD.POST);
  const { mutation: updateQuantityMutation, error: updateQuantityError } = useMutation(
    FETCH_METHOD.PATCH
  );
  const { mutation: deleteCartMutation, error: deleteCartError } = useMutation(FETCH_METHOD.DELETE);

  const setCart = useSetCartState();

  const addProductToCart = (product: CartItemType) => {
    addCartMutation(baseUrl + FETCH_URL.CART_ITEMS, {
      productId: product.id,
    });

    setCart((prev) => [product, ...prev]);
  };

  const increaseProductQuantity = (productId: number) => {
    setCart((prev) => {
      return prev.map((item) => {
        if (item.id === productId) {
          updateQuantityMutation(`${baseUrl + FETCH_URL.CART_ITEMS}/${productId}`, {
            quantity: item.quantity + 1,
          });

          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  };

  const decreaseProductQuantity = (productId: number) => {
    setCart((prev) => {
      return prev.map((item) => {
        if (item.id === productId) {
          updateQuantityMutation(`${baseUrl + FETCH_URL.CART_ITEMS}/${productId}`, {
            quantity: item.quantity - 1,
          });

          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    });
  };

  const updateProductQuantity = (productId: number, quantity: number) => {
    const count = quantity > QUANTITY.MAX ? QUANTITY.MAX : quantity;

    updateQuantityMutation(`${baseUrl + FETCH_URL.CART_ITEMS}/${productId}`, {
      quantity,
    });

    setCart((prev) => {
      return prev.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: count };
        }
        return item;
      });
    });
  };

  const deleteCartItem = (...productId: number[]) => {
    productId.forEach((id) => {
      deleteCartMutation(`${baseUrl + FETCH_URL.CART_ITEMS}/${id}`);
    });

    setCart((prev) => {
      return prev.filter((item) => !productId.includes(item.id));
    });
  };

  return {
    addProductToCart,
    deleteCartItem,
    increaseProductQuantity,
    decreaseProductQuantity,
    updateProductQuantity,
  };
};
