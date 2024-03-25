import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import TaxInfo from "../assets/info/TaxInfo"
import API_URL from '../assets/info/URLInfo'

import ColorButton from "../components/ColorButton";
import LinkButton from "../components/LinkButton";
import PageBase from "../components/PageBase";
import PageHeading from "../components/PageHeading";

import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem';
import LinearProgress from '@mui/material/LinearProgress';


function EditAccount() {
    const Tax = TaxInfo
    const states = Object.keys(Tax)

    // Populates page info //////////////////////////
    const [token, setToken] = useState();
    // @ts-ignore
    const [userinfo, setUserInfo] = useState<any>({});
    const [first_name, setFirstName] = useState<any>();
    const [last_name, setLastName] = useState<any>();
    const [phone_number, setPhoneNumber] = useState<any>();
    const [address_street, setAddressStreet] = useState<any>();
    const [address_city, setAddressCity] = useState<any>();
    const [address_state, setAddressState] = useState<any>();
    const [address_zipcode, setAddressZipCode] = useState<any>();

    // Handles loading while waiting for api //////////////////
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
    // @ts-ignore
    const token = JSON.parse(localStorage.getItem('token'));
    setIsLoading(true);
    if (token) {
        fetch(`${API_URL}/user/${token}`, {
            method: 'GET'})
        .then((response) => response.json())
        .then((response) => {
            setIsLoading(false)
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

    setToken(token);
    }
    }, []);

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

    // Handles form submit ////////////////////////////
    const EditAccountForm = (event: any) => {
        event.preventDefault();
        const target = event.target;
        const first_name = target.first_name.value;
        const last_name = target.last_name.value;
        const phone_number = target.phone_number.value;
        const address_street = target.address_street.value;
        const address_city = target.address_city.value;
        const address_state = target.address_state.value;
        const address_zipcode = target.address_zipcode.value;
  
        return fetch(`${API_URL}/user/${token}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                first_name: first_name,
                last_name: last_name,
                phone_number: phone_number,
                address_street: address_street,
                address_city: address_city,
                address_state: address_state,
                address_zipcode: address_zipcode,
            })
            
            })
        .then((response) => {
            if (response.status !== 200) {
                setError("Something went wrong. Please try again")
            }
            return response.json()
        })
        .then((response) => {
            setCompletedFetch(true)
            console.log(response);
            })
        .catch((error) => {
            console.error(error);
            setError("Something went wrong. Please try again")
        });
      }
    
    // Navigate after successful form submit ////////////////////
    const navigate = useNavigate()
    const [completedfetch, setCompletedFetch] = useState<boolean>(false);
    useEffect(() => {
        if (completedfetch){
            navigate("/account")
        }
    }, [completedfetch]);

    // HTML if not signed in ///////////////////
    if (token === undefined){
        var editaccount =
        <div className="mt-6">
          <p className="text-lg text-center">Sign In to Update Account</p>
          <div className="flex justify-items-center justify-center mt-2">
            <LinkButton className="p-3" children="Sign In" link="/signin"/>
          </div>
          <div className="flex justify-items-center justify-center">
            <Link to="/signup" className=" text-xs mt-2 hover:text-red-600 underline-offset-4 hover:underline transition duration-500">Don't have an account? Sign Up</Link>
          </div>
        </div>
    } 
    // HTML if signed in ///////////////////
    else{
        // HTML while loading ///////////////
        if (isLoading) {
            var editaccount =
            <div className="mt-6">
                <p className="text-lg text-center">Loading your account info</p>
                <div className="w-full flex text-center justify-center">
                    <LinearProgress className="mt-3 w-full"/>
                </div>
            </div>
        } 
        // HTML for edit account form ///////////////
        else {
        var editaccount=
            <form onSubmit={EditAccountForm} className="grid grid-cols-6 w-11/12 md:w-3/5 2xl:w-1/3 mt-5 gap-x-4 gap-y-3 justify-center">
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
                
                <div className="col-span-1"/>
                <ColorButton type="submit" children="Update Account" className="col-span-4 text-lg py-2"/>
                <div className="col-span-1"/>
            </form>
        }
      
    }
      
  return (
    <PageBase>
        <div className="container flex flex-col items-center">
            <PageHeading className="w-11/12 md:w-3/5 2xl:w-1/3" children="Update Account"/>
            {errorDiv}
            {editaccount}
        </div>
    </PageBase>
    
  )
}

export default EditAccount