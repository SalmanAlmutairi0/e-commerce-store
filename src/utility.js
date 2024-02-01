export const addToCart = (setCart, productId) => {
  setCart((prev) => [...prev, productId]);
};


 export const convertNumberToArray = (number) => {
   const array = [];
   for (let i = 1; i <= number; i++) {
     array.push(i);
   }
   return array;
 };