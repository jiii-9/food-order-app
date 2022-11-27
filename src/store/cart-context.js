import React from "react";

const CartContext = React.createContext({
  // 단어 자동완성때문에 쓰는 초기화이다. 실제로 사용하진 않는다.
  items: [],
  totalAmount: 0,
  addItem: item => {},
  removeItem: id => {},
});

export default CartContext;
