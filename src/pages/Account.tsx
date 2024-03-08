import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ColorButton from "../components/ColorButton";
import API_URL from '../assets/info/URLInfo'

function Account() {

    // Populates page info /////////////////////////////
    const [token, setToken] = useState();
    const [userinfo, setUserInfo] = useState<any>([]);
    const navigate = useNavigate()

    const ClearToken = (event: any) => {
        event.preventDefault();
        localStorage.clear()
        window.location.href = "/"
        }

    useEffect(() => {
    //@ts-ignore
    const token = JSON.parse(localStorage.getItem('token'));
    if (token) {
        fetch(`${API_URL}/user/${token}`, {
            method: 'GET'})
        .then((response) => response.json())
        .then((response) => {
            // console.log(response);
            setUserInfo(response)
            })
        .catch((error) => {
            console.error(error);
        });

    setToken(token);
    }
    }, []);


    // Conditional rendering if not signed in ////////////////
    if (token === undefined){
        var accountinfo =
        <div className="mt-6">
          <p className="text-lg text-center">Sign In To See Account</p>
          <div className="flex justify-items-center justify-center mt-2">
          <ColorButton className="p-3" onClick={() => {navigate("/signin")}}>Sign In</ColorButton>
          </div>
          <div className="flex justify-items-center justify-center">
            <Link to="/signup" className=" text-xs mt-2 hover:text-red-600 underline-offset-4 hover:underline transition duration-500">Don't have an account? Sign Up</Link>
          </div>
        </div>
    } else{
      var accountinfo=
      <div className="grid grid-cols-6 mt-4 mx-4">
            <div className="col-span-4">
                <p className="text-xl">{userinfo.email}</p>
                <p className="text-xl">{userinfo.first_name} {userinfo.last_name}</p>
                <p>Date Joined: {userinfo.date_created?.substring(5,7)}/{userinfo.date_created?.substring(8,10)}/{userinfo.date_created?.substring(0,4)}</p>
                <p className="mt-5">Address:</p>
                <p>{userinfo.address_street}</p>
                <p>{userinfo.address_city}, {userinfo.address_state}, {userinfo.address_zipcode}</p>
                <p>{userinfo.phone_number}</p>
            </div>

            <div className="col-span-2 grid h-fit gap-y-2">
                <ColorButton className="py-2" onClick={() => {navigate("/editaccount")}}>Edit Account</ColorButton>
                <ColorButton className="py-2" onClick={() => {navigate("/cart")}}>Cart</ColorButton>
                <ColorButton className="py-2" onClick={() => {navigate("/orders")}}>Orders</ColorButton>
                
                <button className="bg-slate-100 text-slate-700 border border-slate-700 hover:bg-slate-700 hover:text-slate-100 transition duration-700 rounded py-2" onClick={ClearToken}>
                    Sign Out
                </button>
            </div>  
        </div>
    }
    

  return (
    <div className=" py-8 flex justify-center ">
        <div className="container grid">
            <h1 className="text-2xl text-center">Your Account</h1>
            <h1 className="w-11/12 border-b-2 mt-3 place-self-center"></h1>
            {accountinfo}
        </div>
    </div>
    
  )
}

export default Account