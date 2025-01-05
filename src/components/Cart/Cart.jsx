import React from 'react';
import { useCart } from '../../CardContext';
import { motion } from 'motion/react';
const Cart = () => {
  const { cart, removeFromCart, getTotal } = useCart();

  return (
    <div
     
      className="h-screen container text-white flex mt-14 items-center flex-col relative
       z-10">
      <h2 className='text-5xl text-center mb-10'>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: 20, duration: 0.4 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        >
          {cart.map((item) => (
            <li key={item.id} className="cart-item flex flex-col gap-3
             border-slate-500 border-2 rounded-xl px-24 py-10 md:px-32 md:py-14">
              <span className='text-2xl font-semibold'>{item.name}</span>
              <div className=''>Quantity : {item.quantity} </div>
              <div> Price : ${item.price}</div>
              <button onClick={() => removeFromCart(item.id)} className=
                "px-2 py-1 border-[1px] border-slate-500 rounded-lg hover:bg-slate-800 hover:cursor-pointer">
                Remove
              </button>
              <div className="total text-lg mt-3">
                <strong>Total: ${getTotal()}</strong>
              </div>
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
};

export default Cart;
