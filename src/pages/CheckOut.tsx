import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ColorButton from "../components/ColorButton";
import TaxInfo from "../assets/info/TaxInfo"
import ModelInfo from "../assets/info/ModelInfo";
import API_URL from '../assets/info/URLInfo'

import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import LinearProgress from '@mui/material/LinearProgress';

function CheckOut() {

// Populates page ///////////////////////////////////////
  const [token, setToken] = useState();
  const [cart, setCart] = useState<any>([]);
  // @ts-ignore
  const [userinfo, setUserInfo] = useState<any>([]);
  const [first_name, setFirstName] = useState<any>();
  const [last_name, setLastName] = useState<any>();
  const [phone_number, setPhoneNumber] = useState<any>();
  const [address_street, setAddressStreet] = useState<any>();
  const [address_city, setAddressCity] = useState<any>();
  const [address_state, setAddressState] = useState<any>();
  const [address_zipcode, setAddressZipCode] = useState<any>();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate()

  // Handles loading while waiting for api //////////////////
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
  // @ts-ignore
  const token = JSON.parse(localStorage.getItem('token'));
  setIsLoading(true);
  if (token) {
      fetch(`${API_URL}/usercart/${token}`, {
          method: 'GET'})
      .then((response) => response.json())
      .then((response) => {
          setIsLoading(false)
          setCart(response)
          })
      .catch((error) => {
          console.error(error);
      });

      fetch(`${API_URL}/user/${token}`, {
        method: 'GET'})
    .then((response) => response.json())
    .then((response) => {
        // console.log(response);
        setUserInfo(response)
        setFirstName(response.first_name)
        setLastName(response.last_name)
        setPhoneNumber(response.phone_number)
        setAddressStreet(response.address_street)
        setAddressCity(response.address_city)
        setAddressState(response.address_state)
        setAddressZipCode(response.address_zipcode)
        })
    .catch((error) => {
        console.error(error);
    });
  }
  setToken(token)
  }, []);


// Populates/Updates Price ///////////////////////////////////////
  var subtotal = 0
  for (var bike of cart){
    subtotal += Number(bike.cart_itemtotal)
  }

  const tax_info = TaxInfo
  const states = Object.keys(tax_info)

  var taxrate = tax_info[address_state]
  var tax =  Math.round(taxrate * subtotal * 100) / 100
  if (tax !== tax){
      tax = 0
  }

  var total = subtotal + tax

  const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
  const years = ['24', '25', '26', '27', '28', '29', '30']

  // Handles API Error
  const [error, setError] = useState<any>();

  if (error === undefined){
      var errorDiv =
      <></>
  } else {
      var errorDiv =
      <div className=" bg-red-400 text-white py-2 px-4 rounded mt-2">
          {error}
      </div> 
  }

// Handles Form Submit ///////////////////////////////////////
  const PlaceOrderForm = (event: any) => {
    event.preventDefault();
    const target = event.target;
    const first_name = target.first_name.value;
    const last_name = target.last_name.value;
    const address_street = target.address_street.value;
    const address_city = target.address_city.value;
    const address_state = target.address_state.value;
    const address_zipcode = target.address_zipcode.value;
    const phone_number = target.phone_number.value;

    const cc_number = target.cc_number.value;
    const cc_end = cc_number % 10000

    const delivery_details = {
        'first_name': first_name,
        'last_name': last_name,
        'address_street': address_street,
        'address_city': address_city,
        'address_state': address_state,
        'address_zipcode': address_zipcode,
        'phone_number': phone_number,
        'cc_number': cc_end
    }

    return fetch(`${API_URL}/userpayment/${token}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            items: cart,
            delivery_details: delivery_details,
            subtotal: subtotal,
            tax: tax,
        })
        })
      .then((response) => {
        if (response.status !== 200) {
            setError("Something went wrong. Please try again")
        }
        return response.json()
      })
      // @ts-ignore
    .then((response) => {
        ClearCart()
        handleOpen()
        })
    .catch((error) => {
      console.error(error);
      setError("Something went wrong. Please try again")
    });
  }

// Clears cart after order placed ////////////////////////////////
    const ClearCart = () => {
        fetch(`${API_URL}/clearcart/${token}`, {
            method: 'DELETE'})
        .then((response) => response.json())
        // @ts-ignore
        .then((response) => {
            // console.log(response);
            })
        .catch((error) => {
        console.error(error);
        });
        }


// Conditional Rendering if not Signed in /////////////////////////
  if (token == undefined){
    var checkout_html =
    <>
      <h1 className="text-center text-lg mt-6 col-span-6">Sign In to Check Out</h1>
      <div className="col-span-6 flex justify-center mt-2">
        <ColorButton className="py-2 px-4" onClick={() => {navigate("/signin")}}>Sign In</ColorButton>
      </div>
      <div className="col-span-6 flex justify-center mt-2">
        <Link to="/signup" className="text-xs hover:text-red-600 underline-offset-4 hover:underline transition duration-500">Don't have an account? Sign Up</Link>
      </div>
    </>
  } else{
    if (isLoading) {
      var checkout_html =
        <div className="mt-6">
            <p className="text-lg text-center">Loading your cart info</p>
            <div className="w-full flex text-center justify-center">
                <LinearProgress className="mt-3 w-1/2"/>
            </div>
        </div>

    } else {
      if (cart.length === 0){
        var checkout_html =
        <>
          <h1 className="text-center text-lg mt-6 col-span-6">You have no bikes to check out</h1>
          <div className="col-span-6 flex justify-center mt-2">
            <ColorButton className="py-2 px-4" onClick={() => {navigate("/")}}>Shop Bikes</ColorButton>
          </div>
        </>
      } else{
        var checkout_html =
        <>
          {cart.map((bike:any) => (
            <div key={bike.cart_id} className='bg-white mt-3 mx-4 border border-slate-300 rounded grid grid-cols-5'>
              <div className="m-1 md:m-3 col-span-3">
                <img src={ModelInfo[bike.model]['colors'][bike.color][0]} className='border-4 border-gray-100 rounded max-h-48'/>
              </div> 
              <div className="m-1 md:m-3 col-span-2">
                <Link to= {`/bike/${bike.model}`} className="uppercase font-semibold hover:text-red-600 underline-offset-4 hover:underline transition duration-500">{bike.model} {bike.trim}</Link>
                <p className="mt-1">{bike.color}, {bike.size}</p>
                <p className="mt-1">Qty: {bike.quantity}</p>
                <p className="mt-1">${bike.cart_itemtotal}</p>
              </div>
            </div>
            ))}
          <div className="">
          <form onSubmit={PlaceOrderForm} className="container px-4 grid grid-cols-6 gap-x-10 gap-y-10 mt-10">
            <div className="col-span-6 md:col-span-4 grid grid-cols-6 gap-x-4 gap-y-3 justify-center">
              <p className="col-span-6 text-lg">Delivery Details</p>
              <TextField name="first_name" label="First Name" className="col-span-6 md:col-span-3" required value={first_name} onChange={(event) => setFirstName(event.target.value)} InputLabelProps={{shrink: true}}/>
              <TextField name="last_name" label="Last Name" className="col-span-6 md:col-span-3" required value={last_name} onChange={(event) => setLastName(event.target.value)} InputLabelProps={{shrink: true}}/>
  
              <div className="col-span-6 h-2"/>
  
              <TextField name="address_street" label="Address" className="col-span-6" required value={address_street} onChange={(event) => setAddressStreet(event.target.value)} InputLabelProps={{shrink: true}}/>
              <TextField name="address_city" label="City" className="col-span-3" required value={address_city} onChange={(event) => setAddressCity(event.target.value)} InputLabelProps={{shrink: true}}/>
              <TextField name="address_state" label="State" className="col-span-1" required select value={address_state} defaultValue={address_state} onChange={(event) => setAddressState(event.target.value)} InputLabelProps={{shrink: true}}>
                  {states.map((state) => (
                      <MenuItem key={state} value={state}>
                          {state}
                      </MenuItem>
                  ))}
              </TextField>
              <TextField name="address_zipcode" label="Zip Code" className="col-span-2" required type="number" value={address_zipcode} onChange={(event) => setAddressZipCode(event.target.value)} InputLabelProps={{shrink: true}} inputProps={{ minLength:5, maxLength:5 }} />
              <TextField name="phone_number" label="Phone Number" className="col-span-6" required type="number" value={phone_number} onChange={(event) => setPhoneNumber(event.target.value)} InputLabelProps={{shrink: true}} inputProps={{ minLength: 10, maxLength: 15 }}/>
  
              <div className="col-span-6 h-2"/>
              <p className="col-span-6 text-lg">Payment Details</p>
              <TextField name="cc_number" label="Credit Card Number" className="col-span-4" required type="number" inputProps={{ minLength: 16, maxLength: 16 }}/>
              <div className="col-span-2 grid grid-cols-2 gap-x-1">
                <TextField name="cc_month" label="MM" className="" required select>
                    {months.map((month) => (
                        <MenuItem key={month} value={month}>
                            {month}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField name="cc_year" label="YY" className="" required select>
                    {years.map((year) => (
                        <MenuItem key={year} value={year}>
                            {year}
                        </MenuItem>
                    ))}
                </TextField>
              </div>
                
              <TextField name="cc_code" label="Security Code" className="col-span-3" required type="number" inputProps={{ minLength:3, maxLength:4 }} />
              <TextField name="cc_zip" label="Zip Code" className="col-span-3" required type="number" inputProps={{ minLength:5, maxLength:5 }} />
              
            </div>
            <div className="bg-white col-span-6 md:col-span-2 grid h-fit border border-slate-300 py-2 px-4 rounded">
              <h1 className="border-b-2 text-xl">Order Summary</h1>
              <div className="grid grid-cols-2 mt-1">
                <p>Subtotal:</p>
                <p className="text-end">${subtotal}.00</p>
                <p>Shipping:</p>
                <p className="text-end border-b">$0.00</p>
                <p/>
                <p className="text-end">${subtotal}.00</p>
                <p>Tax: </p>
                <p className="text-end border-b">${tax}</p>
                <p className="mt-4 font-semibold">Total:</p>
                <p className="mt-4 font-semibold text-end">${total}</p>
                <p/>
                <div className="flex justify-end mt-1">
                  <ColorButton type="submit" children="Place Order" className="py-2 px-4 w-fit"/>
                </div>
              </div>     
            </div>
            </form>
            <div className="col-span-1 grid h-fit">
            </div>
          </div>
        </>
      }
    }
  }

  return (
    <div className=" py-8 flex justify-center flex-col place-items-center">
      <h1 className="text-2xl w-11/12 text-center">Check Out</h1>
      <h1 className="border-b-2 w-11/12 my-3"></h1>
      {errorDiv}
      {checkout_html}
      <Modal
          open={open}
          onClose={handleClose}
      >
          <div className="absolute h-screen w-screen flex justify-center items-center">
              <div className="bg-white rounded-md py-7 px-5 max-w-full">
                  <p className="mt-1">
                      Your Order Has Been Placed!
                  </p>
                  <div className="grid grid-cols-2 gap-2 mt-5">
                    <ColorButton className="py-2 px-3" onClick={() => {navigate("/orders")}}>Go to Orders</ColorButton>
                    <ColorButton className="py-2 px-3" onClick={() => {navigate("/")}}>Continue Shopping</ColorButton>
                  </div>
              </div>
          </div>
      </Modal>
    </div>
    
  )
}

export default CheckOut