import React from 'react';
import './CartItem.css'
import { AiOutlineCloseCircle} from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { deleteItemFromCart } from '../../redux/cart/reducer';

const CartItem = ({title, price, id}) => {
  const dispatch = useDispatch()
  const handleClick = () =>{
    dispatch(deleteItemFromCart(id))
  }
  return (
    <div className='cart-item'>
        <span>{title}</span>
        <div className="cart-item__price">
            <span>{price} руб.</span>
            <AiOutlineCloseCircle className='cart-item__delete' onClick={handleClick}/>
        </div>
    </div>
  );
};

export default CartItem;
