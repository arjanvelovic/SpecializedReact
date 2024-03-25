import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import TaxInfo from "../assets/info/TaxInfo"
import API_URL from '../assets/info/URLInfo'

import ColorButton from "../components/ColorButton";
import LinkButton from "../components/LinkButton";
import PageBase from "../components/PageBase";
import PageHeading from "../components/PageHeading";

import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CircularProgress from '@mui/material/CircularProgress';


function SignUp() {

    const [token, setToken] = useState();
    const [error, setError] = useState<any>();

    // HTML for errors ///////////
    if (error === undefined){
        var errorDiv =
        <></>
    } else {
        var errorDiv =
        <div className=" bg-red-400 text-white py-2 px-4 rounded mt-2">
            {error}
        </div> 
    }

    useEffect(() => {
        // @ts-ignore
        const token = JSON.parse(localStorage.getItem('token'));
        if (token) {
        setToken(token);
        }
    }, []);

    const Tax = TaxInfo
    const states = Object.keys(Tax)

    // Handles showing password ////////////////////////
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    // Handles loading while waiting for api //////////////////
    const [isLoading, setIsLoading] = useState(false);
    if (isLoading == false) {
        var loading_html = <></>
    } else {
        var loading_html = <CircularProgress color="primary" className="mt-4"/>
    }

    // Handles signup form /////////////////////////////
    const SignUpForm = (event: any) => {
        event.preventDefault();
        const target = event.target;
        const isAdmin = false;
        const first_name = target.first_name.value;
        const last_name = target.last_name.value;
        const email = target.email.value;
        const password = target.password.value
        const phone_number = target.phone_number.value;
        const address_street = target.address_street.value;
        const address_city = target.address_city.value;
        const address_state = target.address_state.value;
        const address_zipcode = target.address_zipcode.value;
        
        setIsLoading(true);
  
        fetch(`${API_URL}/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                isAdmin: isAdmin,
                first_name: first_name,
                last_name: last_name,
                email: email,
                password: password,
                phone_number: phone_number,
                address_street: address_street,
                address_city: address_city,
                address_state: address_state,
                address_zipcode: address_zipcode,
            })
            })
        .then((response) => {
            if (response.status === 500 ) {
                setError("This e-mail is already associated with an account")
            } else if (response.status !== 200) {
                setError("Something went wrong. Please try again")
            }
            return response.json()
        })
        .then((response) => {
            setIsLoading(false)
            localStorage.setItem('token', JSON.stringify(response.token))
            setCompletedFetch(true)
            })
      }
    
    // Navigates to homepage after signup ///////////////////////
    const [completedfetch, setCompletedFetch] = useState<boolean>(false);
    useEffect(() => {
        if (completedfetch){
            window.location.href = "/"
        }
    }, [completedfetch]);

    // html if not signed in ///////////////////////
    if (token === undefined){
        var signup_html =
        <form onSubmit={SignUpForm} className="grid grid-cols-6 w-11/12 md:w-3/5 2xl:w-1/3 mt-6 gap-x-4 gap-y-3 justify-center">
            <TextField name="first_name" label="First Name" className="col-span-6 md:col-span-3" required/>
            <TextField name="last_name" label="Last Name" className="col-span-6 md:col-span-3" required/>

            <div className="col-span-6 h-2"/>

            <TextField name="address_street" label="Address" className="col-span-6" required/>
            <TextField name="address_city" label="City" className="col-span-3" required/>
            <TextField name="address_state" label="State" className="col-span-1" required select>
                {states.map((state) => (
                    <MenuItem key={state} value={state}>
                        {state}
                    </MenuItem>
                ))}
            </TextField>
            <TextField name="address_zipcode" label="Zip Code" className="col-span-2" required inputProps={{ minLength:5, maxLength:5 }} type="number"/>
            <TextField name="phone_number" label="Phone Number" className="col-span-6" required type="number" inputProps={{ minLength: 10, maxLength: 15 }}/>

            <div className="col-span-6 h-2"/>

            <TextField name="email" label="e-mail" className="col-span-6" required type="email"/>

            <FormControl className="col-span-6">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                    label="Password"
                    required
                    name="password"
                    inputProps={{ minLength:6 }}
                />
            </FormControl>
            
            <div className="col-span-1"/>
            <ColorButton type="submit" children="Create Account" className="col-span-4 text-lg py-2 mt-3"/>
            <div className="col-span-1"/>
            <Link to="/signin" className="col-span-6 text-center text-xs hover:text-red-600 underline-offset-4 hover:underline transition duration-500">Already have an account? Sign In</Link>
            <div className="col-span-6 text-center text-small">{loading_html}</div>
        </form>
    } 
    
    // HTML if signed in ///////
    else{
        var signup_html =
        <>
        <h1 className="text-center text-lg mt-6 col-span-6">Your Are Already Signed In</h1>
        <div className="col-span-6 flex justify-center mt-2">
            <LinkButton className="py-2 px-4" children="Account" link="/account"/>
        </div>
        </>
    }

  return (
    <PageBase>
        <div className="container flex flex-col items-center">
            <PageHeading className="w-11/12 md:w-3/5 2xl:w-1/3" children="Sign Up"/>
            {errorDiv}
            {signup_html}
        </div>
    </PageBase>
  )
}

export default SignUp