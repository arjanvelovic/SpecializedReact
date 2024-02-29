import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Drawer from "@mui/material/Drawer";
import NavButton from './NavButton';
//@ts-ignore
import WordLogoSmall from '../assets/images/navbar/WordLogoSmall.png'
//@ts-ignore
import RoadTrans from '../assets/images/navbar/RoadTrans.png'
//@ts-ignore
import MountainTrans from '../assets/images/navbar/MountainTrans.png'
//@ts-ignore
import ActiveTrans from '../assets/images/navbar/ActiveTrans.png'


function Navbar() {
    const [isVisible, setIsVisible] = useState(false)
    const [isVisible2, setIsVisible2] = useState(false)
    const [open, setState] = useState(false);
    const [token, setToken] = useState();

    const ClearToken = (event: any) => {
    event.preventDefault();
    localStorage.clear()
    window.location.href = "/"
    }

    useEffect(() => {
        //@ts-ignore
        const token = JSON.parse(localStorage.getItem('token'));
        if (token) {
        setToken(token);
        }
    }, []);

    const dropDown = () => {
        setIsVisible(!isVisible)
    }

    const pullUp = () => {
        setIsVisible(false)
        setIsVisible2(false);
    }

    const dropDown2 = () => {
        setIsVisible2(!isVisible2)
    }

    const toggleDrawer = (open:any) => (event:any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }
        setIsVisible(false)
        setState(open);
        setIsVisible2(false);
    };

    // Conditional Rendering if signed in ///////////////
    if (token === undefined){
        var user_options =
        <div>
        <NavButton className='mx-2'>
            <Link to="/signin">Sign In</Link>
        </NavButton>
        <button className='uppercase font-semibold text-red-600 underline-offset-4 hover:underline transition duration-500 mx-2'>
            <Link to="/signup">Sign Up</Link>
        </button>
        </div>

        var user_options2 =
        <div className='grid gap-y-2'>
        <NavButton className='pt-2 text-end border-t' onClick={toggleDrawer(false)}>
            <Link to="/signin">Sign In</Link>
        </NavButton>
        <button className='uppercase font-semibold text-red-600 underline-offset-4 hover:underline transition duration-500 pt-2 text-end border-t' onClick={toggleDrawer(false)}>
            <Link to="/signup">Sign Up</Link>
        </button>
        </div>
    } else{
        var user_options =
        <div>
        <Link to="/account" onClick={pullUp}><i className="fa-solid fa-user text-xl mx-2 hover:text-red-600 hover:opacity-90 transition duration-500"/></Link>
        <Link to="/cart" onClick={pullUp}><i className="fa-solid fa-cart-shopping text-xl mx-2 hover:text-red-600 hover:opacity-90 transition duration-500"/></Link>
        <NavButton className='mx-2' onClick={ClearToken}>
            Sign Out
        </NavButton>
        </div>

        var user_options2 =
        <div className='grid gap-y-2'>
            <NavButton className='pt-2 text-end border-t' onClick={toggleDrawer(false)}>
                <Link to="/account">Account</Link>
            </NavButton>
            <NavButton className='pt-2 text-end border-t' onClick={toggleDrawer(false)}>
                <Link to="/cart">Cart</Link>
            </NavButton>
            <NavButton className='pt-2 text-end border-t' onClick={()=>{
                ClearToken
                toggleDrawer(false)}}>
                Sign Out
            </NavButton>
        </div>
    }


    return (
    <nav className='flex bg-white h-full py-3 justify-center border-b border-slate-200'>
        <div className='grid grid-cols-2 md:grid-cols-4 w-10/12'>
            <div id='navlogo' className='flex items-center'>
                <Link to='/'><img src={WordLogoSmall} className='h-8 md:max-h-12 md:w-auto opacity-70 hover:opacity-100 transition duration-700'/></Link>
            </div>
            <div className='hidden md:flex col-span-2 items-center ms-2 gap-2'>
                <NavButton className='m-3' onClick={pullUp}>
                    <Link to='/'>Home</Link>
                </NavButton>
                <NavButton className='m-3' onClick={dropDown} children={'Bikes'}/>

            </div>
            <div className='hidden md:flex justify-self-end items-center'>
                {user_options}
            </div>
            <div className="md:hidden flex justify-end items-center">
                <NavButton children = {<i className='fas fa-bars'></i>} className={'py-2 px-4 text-xl'} onClick={toggleDrawer(true)}/>
            </div>
        </div>

        { isVisible ? (
            <div className='w-full border-b-2 bg-white hidden md:flex z-10 absolute mt-10 justify-center'>
                <div className='3/5 lg:w-1/2 grid grid-cols-3 gap-2'>
                    <Link to='/categories/Road' className='hover:opacity-70 transition duration-500 self-center justify-self-center text-center my-8' onClick={pullUp}>
                        <img src={RoadTrans} className='w-auto max-h-24'/>
                        Road Bikes
                    </Link>
                    <Link to='/categories/Mountain' className='hover:opacity-70 transition duration-500 self-center justify-self-center text-center my-8' onClick={pullUp}>
                        <img src={MountainTrans} className='w-auto max-h-24'/>
                        Mountain Bikes
                    </Link>
                    <Link to='/categories/Active' className='hover:opacity-70 transition duration-500 self-center justify-self-center text-center my-8' onClick={pullUp}>
                        <img src={ActiveTrans} className='w-auto max-h-24'/>
                        Active Bikes
                    </Link>
                </div>
            </div>
            ) : (
            <></>
        ) }

    <Drawer
        anchor="top"
        open={open}
        onClose={toggleDrawer(false)}
        //@ts-ignore
        onOpen={toggleDrawer(true)}
        className='md:hidden'
        transitionDuration= {500}
        >
        {/* The inside of the drawer */}
        <div className='bg-gray-50 md:hidden mb-2'>
            <div className='text-start my-3 mx-5'>
                <NavButton children = {<i className="fa-solid fa-x"></i>} className={'py-2 px-4'} onClick={toggleDrawer(false)}/>
            </div>
            
            <div className='mt-2 flex flex-col border-t-2 gap-y-2 justify-end mx-5'>
                <NavButton className='text-end pt-2 border-t'><Link to='/' onClick={toggleDrawer(false)}>Home</Link></NavButton>
                <NavButton className='text-end pt-2 border-t' onClick={dropDown2}>
                    Bikes
                </NavButton>
                
                { isVisible2 ? (
                    <div className='md:hidden grid gap-3'>
                        <Link to='/categories/Road' className='hover:opacity-70 transition duration-500 self-center justify-self-center text-center' onClick={toggleDrawer(false)}>
                        <img src={RoadTrans} className='w-auto max-h-28'/>
                        Road Bikes
                        </Link>
                        <Link to='/categories/Mountain' className='hover:opacity-70 transition duration-500 self-center justify-self-center text-center' onClick={toggleDrawer(false)}>
                            <img src={MountainTrans} className='w-auto max-h-28'/>
                            Mountain Bikes
                        </Link>
                        <Link to='/categories/Active' className='hover:opacity-70 transition duration-500 self-center justify-self-center text-center' onClick={toggleDrawer(false)}>
                            <img src={ActiveTrans} className='w-auto max-h-28'/>
                            Active Bikes
                        </Link>
                    </div>
                    ) : (
                    <></>
                ) }

                {user_options2}
            </div>
        </div>
    </Drawer>

    </nav>
);}

export default Navbar