import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API_URL from '../assets/info/URLInfo'

import LinkButton from "../components/LinkButton";
import PageBase from "../components/PageBase";
import PageHeading from "../components/PageHeading";
import SignOut from "../components/SignOut";

import LinearProgress from '@mui/material/LinearProgress';

function Account() {

    // Populates page info /////////////////////////////
    const [token, setToken] = useState();
    const [userinfo, setUserInfo] = useState<any>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
    //@ts-ignore
    const token = JSON.parse(localStorage.getItem('token'));
    setIsLoading(true);
    if (token) {
        fetch(`${API_URL}/user/${token}`, {
            method: 'GET'})
        .then((response) => response.json())
        .then((response) => {
            setIsLoading(false)
            setUserInfo(response)
            })
        .catch((error) => {
            console.error(error);
        });

    setToken(token);
    }
    }, []);

    // HTML if not signed in //////////////
    if (token === undefined){
        var accountinfo =
        <div className="mt-6">
          <p className="text-lg text-center">Sign In To See Account</p>
          <div className="flex justify-items-center justify-center mt-2">
          <LinkButton className="p-3" link="/signin" children="Sign In"/>
          </div>
          <div className="flex justify-items-center justify-center">
            <Link to="/signup" className=" text-xs mt-2 hover:text-red-600 underline-offset-4 hover:underline transition duration-500">Don't have an account? Sign Up</Link>
          </div>
        </div>
    } 
    // HTML if signed in //////////////
    else{
        // HTML if loadinging //////////////
        if (isLoading) {
            var accountinfo =
            <div className="mt-6">
                <p className="text-lg text-center">Loading your account info</p>
                <div className="w-full flex text-center justify-center">
                    <LinearProgress className="mt-3 w-full"/>
                </div>
            </div>   
        } 
        // HTML after loading ////////////// 
        else {
            var accountinfo=
            <div className="w-11/12 grid grid-cols-6 mt-4 mx-4 gap-y-4">
                <div className="col-span-6 md:col-span-4 flex flex-col">
                    <p className="text-xl">{userinfo.email}</p>
                    <p className="text-xl">{userinfo.first_name} {userinfo.last_name}</p>
                    <p>Date Joined: {userinfo.date_created?.substring(5,7)}/{userinfo.date_created?.substring(8,10)}/{userinfo.date_created?.substring(0,4)}</p>
                    <p className="mt-5">Address:</p>
                    <p>{userinfo.address_street}</p>
                    <p>{userinfo.address_city}, {userinfo.address_state}, {userinfo.address_zipcode}</p>
                    <p>{userinfo.phone_number}</p>
                </div>

                <div className="col-span-6 md:col-span-2 grid h-fit gap-y-2">
                    <LinkButton className="py-2" link="/editaccount" children="Edit Account"/>
                    <LinkButton className="py-2" link="/cart" children="Cart"/>
                    <LinkButton className="py-2" link="/orders" children="Orders"/>
                    
                    <button className="bg-slate-100 text-slate-700 border border-slate-700 hover:bg-slate-700 hover:text-slate-100 transition duration-700 rounded py-2" onClick={SignOut}>
                        Sign Out
                    </button>
                </div>  
            </div>
        }
    }
    

  return (
    <PageBase>
        <div className="container flex flex-col items-center">
            <PageHeading className="w-11/12" children="Your Account"/>
            {accountinfo}
        </div>  
    </PageBase>    
  )
}

export default Account