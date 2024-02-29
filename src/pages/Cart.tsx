import { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import ColorButton from "../components/ColorButton";
import ModelInfo from "../assets/info/ModelInfo"
import API_URL from '../assets/info/URLInfo'


function Cart() {

  // Populates page info /////////////////////////////
  const [token, setToken] = useState();
  const [cart, setCart] = useState<any>([]);

  useEffect(() => {
  //@ts-ignore
  const token = JSON.parse(localStorage.getItem('token'));
  if (token) {
      fetch(`${API_URL}/usercart/${token}`, {
          method: 'GET'})
      .then((response) => response.json())
      .then((response) => {
          // console.log(response);
          setCart(response)
          })
      .catch((error) => {
          console.error(error);
      });

  setToken(token);
  }
  }, []);

  var cartotal = 0
  for (var bike of cart){
    cartotal += Number(bike.cart_itemtotal)
  }

  // Handles update form ////////////////////////////////
  const UpdateQuantity = (event: any) => {
    event.preventDefault();
    const target = event.target;
    const cart_id = target.cart_id.value

    const quantitystring = target.quantity.value;
    const quantity = Number(quantitystring)

    fetch(`${API_URL}/usercart/${cart_id}`, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          'quantity': quantity
      })
      
      })
    .then((response) => response.json())
    //@ts-ignore
    .then((response) => {
      setCompletedFetch(true)
        // console.log(response);
      })
    .catch((error) => {
    console.error(error);
    });
  }

  // Handles remove form ////////////////////////////////
  const RemoveFromCart = (cart_id: any) => {
    fetch(`${API_URL}/usercart/${cart_id}`, {
      method: 'DELETE'})
    .then((response) => response.json())
    //@ts-ignore
    .then((response) => {
      setCompletedFetch(true)
        // console.log(response);
      })
    .catch((error) => {
    console.error(error);
    });
  }

  // refresh page after cart change /////////////////////
  const [completedfetch, setCompletedFetch] = useState<boolean>(false);
  useEffect(() => {
    if (completedfetch){
      window.location.reload()
    }
  }, [completedfetch]);


  // Conditional Rendering if not signed in /////////////////
  if (token === undefined){
    var cart_html =
    <>
      <h1 className="text-center text-lg mt-6 col-span-6">Sign In to See Your Cart</h1>
      <div className="col-span-6 flex justify-center">
        <ColorButton className='py-2 px-4'>
          <Link to="/signin">Sign In</Link>
        </ColorButton>
      </div>
      <div className="col-span-6 flex justify-center">
        <Link to="/signup" className="text-xs hover:text-red-600 underline-offset-4 hover:underline transition duration-500">Don't have an account? Sign Up</Link>
      </div>
    </>
} else{
  if (cart.length === 0){
    var cart_html =
    <>
      <h1 className="text-center text-lg mt-6 col-span-6">Your Cart is Empty</h1>
      <div className="col-span-6 flex justify-center mt-2">
        <ColorButton className='py-2 px-4'>
          <Link to="/">Shop Bikes</Link>
        </ColorButton>
      </div>
    </>
  } else{
    var cart_html =
    <>
      <div className="mt-4 col-span-6 md:col-span-4 grid gap-y-4 place-self-center">
      {cart.map((bike:any) => (
        <div key={bike.cart_id} className='bg-white border rounded border-slate-300 grid grid-cols-5'>
          <div className="m-1 md:m-3 col-span-5 md:col-span-3">
            <img src={ModelInfo[bike.model]['colors'][bike.color][0]} className='border-4 border-gray-100 rounded max-h-80'/>
          </div> 
          <div className="m-1 md:m-3 col-span-5 md:col-span-2 grid grid-cols-2 md:grid-cols-1 h-fit grid-flow-row-dense">
            <Link to= {`/bike/${bike.model}`} className="uppercase font-semibold hover:text-red-600 underline-offset-4 hover:underline transition duration-500">{bike.model} {bike.trim}</Link>
            <p className="mt-1">{bike.color}, {bike.size}cm</p>
            <form onSubmit={UpdateQuantity} className="flex items-center gap-2 mt-1">
              <p>Qty:</p>
              <input className='hidden' name='cart_id' value={bike.cart_id} readOnly/>
              <input className='border w-8 text-center' type="number" name='quantity' placeholder= {bike.quantity} />
              <ColorButton className="p-1 text-xs" type="submit">Update</ColorButton>
            </form>
            <p className="mt-1">${bike.cart_itemtotal}</p>
            <ColorButton onClick={() => RemoveFromCart(bike.cart_id)} className="text-xs p-2 mt-1 w-fit">Remove From Cart</ColorButton>
          </div>
          
        </div>
        ))}
      </div>
      <div className="mt-4 col-span-6 md:col-span-2 grid h-fit bg-white border border-slate-300 py-2 px-4 rounded w-full">
      <h1 className="border-b-2 text-xl">Cart Summary</h1>
        <div className="grid grid-cols-2 mt-1">
          <p>Subtotal:</p>
          <p className="text-end">${cartotal}.00</p>
          <p>Shipping:</p>
          <p className="text-end border-b">$0.00</p>
          <p className="">Tax:</p>
          <p className="text-end">Estimated at Checkout</p>
          <p className="mt-4 font-semibold">Total:</p>
          <p className="mt-4 font-semibold text-end">${cartotal}.00</p>
          <p/>
          <div className="flex justify-end mt-1">
            <ColorButton className="py-2 px-4 w-fit">
              <Link to="/checkout">Check Out</Link>
            </ColorButton>
          </div>
        </div>
      </div>
    </>
  }
}
  

  return (
    <div className="py-10 flex justify-center">
      <div className="container mx-2 grid grid-cols-6 gap-x-4 gap-y-2 ">
        <h1 className="text-2xl col-span-6 text-center">Your Cart</h1>
        <h1 className="col-span-6 w-11/12 border-b-2 mt-3 place-self-center"></h1>
        {cart_html}
      </div>
    </div>
    
  )
}

export default Cart