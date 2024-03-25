import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import API_URL from '../assets/info/URLInfo'

import ColorButton from "../components/ColorButton";
import LinkButton from "../components/LinkButton";
import PageBase from "../components/PageBase";
import PageHeading from "../components/PageHeading";

import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CircularProgress from '@mui/material/CircularProgress';


function SignIn() {

    const [token, setToken] = useState();

    useEffect(() => {
        // @ts-ignore
        const token = JSON.parse(localStorage.getItem('token'));
        if (token) {
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

    // Handles Sign in form //////////////////////
    const SignIn = (event: any) => {
        event.preventDefault();
        const target = event.target;
        const email = target.email.value;
        const password = target.password.value;

        setIsLoading(true);
  
        fetch(`${API_URL}/token`, {
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' + btoa(email + ":" + password),
            },
            })
        .then((response) => {
            if (response.status !== 200) {
                setError("Incorrect e-mail and/or password")
            }
            return response.json()
        })
        .then((response) => {
            setIsLoading(false)
            if (response.token !== undefined){
                localStorage.setItem('token', JSON.stringify(response.token))
                setCompletedFetch(true)
            }
        })
        .catch((error) => {
            console.error(error);
            setError("Something went wrong. Please try again")
        })
    }

    // Navigates to homepage after signup ///////////////////////
    const [completedfetch, setCompletedFetch] = useState<boolean>(false);
    useEffect(() => {
        if (completedfetch){
            window.location.href = "/"
        }
    }, [completedfetch]);

    // HTML if not signed in ///////////////////
    if (token === undefined){
        var signin_html =
        <>
        <form onSubmit={SignIn} className="grid grid-cols-6 w-11/12 md:w-3/5 2xl:w-1/3 mt-4 gap-x-4 gap-y-3 justify-center">
                
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
                <ColorButton type="submit" children="Sign In" className="col-span-4 text-lg py-2 mt-3"/>
            </form>
            <Link to="/signup" className="text-xs mt-2 hover:text-red-600 underline-offset-4 hover:underline transition duration-500">Don't have an account? Sign Up</Link>
            {loading_html}
        </>
    } 
    // HTML if signed in /////////
    else{
        var signin_html =
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
            <PageHeading className="w-11/12 md:w-3/5 2xl:w-1/3" children="Sign In"/>
            {errorDiv}
            {signin_html}
        </div>
    </PageBase>
  )
}

export default SignIn