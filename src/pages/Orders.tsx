import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ColorButton from "../components/ColorButton";
import ModelInfo from "../assets/info/ModelInfo";
import API_URL from '../assets/info/URLInfo'

function Orders() {

  // Populates page info /////////////////////////////
  const [token, setToken] = useState();
  const [orders, setOrders] = useState<any>([]);
  const navigate = useNavigate()

  useEffect(() => {
  // @ts-ignore
  const token = JSON.parse(localStorage.getItem('token'));
  if (token) {
      fetch(`${API_URL}/userpayments/${token}`, {
          method: 'GET'})
      .then((response) => response.json())
      .then((response) => {
          // console.log(response);
          setOrders(response)
          })
      .catch((error) => {
          console.error(error);
      });

  setToken(token);
  }
  }, []);
  

  // Conditional rendering if not signed in ///////////////////////
  if (token === undefined){
      var order_html =
      <div className="mt-6">
        <p className="text-lg text-center">Sign In To See Your Orders</p>
        <div className="flex justify-items-center justify-center mt-2">
          <ColorButton className="p-3" onClick={() => {navigate("/signin")}}>Sign In</ColorButton>
        </div>
        <div className="flex justify-items-center justify-center">
          <Link to="/signup" className=" text-xs mt-2 hover:text-red-600 underline-offset-4 hover:underline transition duration-500">Don't have an account? Sign Up</Link>
        </div>
      </div>
  } else{
    if (orders.length === 0){
      var order_html =
      <div className="mt-6">
        <p className="text-lg text-center">Your Have No Orders</p>
        <div className="flex justify-items-center justify-center mt-2">
          <ColorButton className="p-3" onClick={() => {navigate("/")}}>Shop Bikes</ColorButton>
        </div>
      </div>

    } else{
      var order_html =
      <>
      {orders.map((order:any) => (
          <div key={order.id} className='my-3 bg-slate-50 border rounded border-slate-300 grid md:grid-cols-2 p-3 gap-y-6'>
            <div>
              <h1 className="text-lg underline">Order Details:</h1>
              <p>Order Number: {order.id}</p>
              <p>Order Date: {order.date_placed.substring(5,7)}/{order.date_placed.substring(8,10)}/{order.date_placed.substring(0,4)} at {order.date_placed.substring(11,16)}</p>
              
              <h1 className="text-lg mt-2 underline">Delivery Details:</h1>
              <p>{order.delivery_details.first_name} {order.delivery_details.last_name}</p>
              <p>{order.delivery_details.address_street}, {order.delivery_details.address_city}, {order.delivery_details.address_state}, {order.delivery_details.address_zipcode}</p>
              <p>{order.delivery_details.phone_number}</p>

              <h1 className="text-lg mt-2 underline">Payment Details:</h1>
              <div className="w-fit">
                <p>Credit Card: <span className="float-end">{order.delivery_details.cc_number}</span></p>
                <p className="w-full">Subtotal: <span className="ps-4 float-end">${order.subtotal}</span></p>
                <p className="w-full">Tax: <span className="float-end">${order.tax}</span></p>
                <p className="w-full">Total: <span className="float-end">${order.total}</span></p>
              </div>
            </div>
            <div>
            <h1 className="text-lg underline">Items:</h1>
              {order.items.map((item:any) => (
              <div key={item.cart_id} className=' bg-white mt-3 border border-slate-300 rounded grid grid-cols-5 w-fit'>
              <div className="m-1 md:m-3 col-span-3">
                <img src={ModelInfo[item.model]['colors'][item.color][0]} className='border-4 border-gray-100 rounded max-h-48'/>
              </div> 
              <div className="m-1 md:m-3 col-span-2">
                <Link to= {`/bike/${item.model}`} className="uppercase font-semibold hover:text-red-600 underline-offset-4 hover:underline transition duration-500">{item.model} {item.trim}</Link>
                <p className="mt-1">{item.color}, {item.size}</p>
                <p className="mt-1">Qty: {item.quantity}</p>
              </div>
            </div>
              ))}
            </div>
          </div>
          ))}
      </>
    }
  }

  
  return (
    <div className=" py-6 flex justify-center">
      <div className="container mx-2">
      <h1 className="text-2xl text-center">Your Orders</h1>
      <p className="w-full border-b-2 mt-3"></p>
        {order_html}
      </div>
    </div>
  )
}

export default Orders