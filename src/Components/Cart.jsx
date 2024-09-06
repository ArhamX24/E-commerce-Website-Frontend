import React, {useContext} from 'react'
import { ThemeStore } from './ThemeContext'
import { useSelector } from 'react-redux';
import Cartitems from './Cartitems';
import { useDispatch } from 'react-redux';
import { clearCart } from '../Store/CartSlice';



const Cart = () => {
  const cartData = useSelector((Store)=> Store.cart.cart)
  let dispatch = useDispatch()
  console.log("cartData from cart.jsx",cartData);

  
  let totalAmount = 0

  let ProductTotalPrice = () => {
    cartData.forEach((item) => {
      totalAmount += Math.trunc(item.data.price * item.quantity);
      });
  }

  ProductTotalPrice()
  

  let {Theme, setTheme} = useContext(ThemeStore);



  return (
    <div className={Theme == 'light' ? 'bg-slate-100 text-black' : 'bg-slate-900 text-slate-100'}>
      <div className="overflow-x-auto">
  <table className="table">
    <thead className={Theme == 'light' ? 'text-black p-3' : 'text-slate-100'}>
      <tr>
        <th>
        </th>
        <th>Product</th>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
      </tr>
    </thead>
    <tbody>
      {
        cartData.map((obj)=> <Cartitems cartObj={obj}></Cartitems>)
      }
    </tbody>
  </table>
  {
    cartData.length == 0 ? '' :
    <>
    <div className='w-2/3 flex justify-end mt-3'>
    <span className='text-xl'>Total <span className='font-bold'>${totalAmount}</span></span>
    </div>
    <div className='w-full flex justify-end p-5'>
    <button onClick={()=> dispatch(clearCart())} className="btn btn-wide btn-error btn-outline mx-5">Clear Cart</button>
    <button className="btn btn-wide btn-outline btn-success">Proceed To CheckOut</button>
    </div>
    </>
  }
 
    </div>
    </div>
  )
}

export default Cart