import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TaxInfo from "../assets/info/TaxInfo"
import ColorButton from "../components/ColorButton";
import API_URL from '../assets/info/URLInfo'

import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function SignUp() {

    const [token, setToken] = useState();

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
        .then((response) => response.json())
        .then((response) => {
            // console.log(response.token);
            localStorage.setItem('token', JSON.stringify(response.token))
            setCompletedFetch(true)
            })
        .catch((error) => {
        console.error(error);
        });
      }
    
    // Navigates to homepage after signup ///////////////////////
    const [completedfetch, setCompletedFetch] = useState<boolean>(false);
    useEffect(() => {
        if (completedfetch){
            window.location.href = "/"
        }
    }, [completedfetch]);

    // Conditional rendering if signed in ///////////////////////
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

            <div className="col-span-6 h-2"></div>
            
            <div className="col-span-1"/>
            <ColorButton type="submit" children="Create Account" className="col-span-4 text-lg py-2"/>
            <div className="col-span-1"/>
        </form>
    } else{
        var signup_html =
        <>
        <h1 className="text-center text-lg mt-6 col-span-6">Your Are Already Signed In</h1>
        <div className="col-span-6 flex justify-center mt-2">
            <ColorButton className='py-2 px-4'>
                <Link to="/account">Account</Link>
            </ColorButton>
        </div>
        </>
    }

  return (
    <div className="py-10 flex justify-center">
        <div className="container flex flex-col items-center">
            <h1 className="text-2xl border-b-2 w-11/12 md:w-3/5 2xl:w-1/3 text-center">Create an Account</h1>
            {signup_html}
        </div>
    </div>
  )
}

export default SignUp