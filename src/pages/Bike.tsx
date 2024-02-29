import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ModelInfo from "../assets/info/ModelInfo"
import API_URL from '../assets/info/URLInfo'
import ColorButton from "../components/ColorButton";
//@ts-ignore
import sizechart from '../assets/images/Bikes/sizechart.jpg'
//@ts-ignore
import SizeChartSmall from '../assets/images/Bikes/SizeChartSmall.png'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type ModelParams = {
    model: any;
}

function Bike() {

    // Populates page info /////////////////////////////
    const{model} = useParams<ModelParams>()
    const bike = ModelInfo[model]
    const sizes = bike['sizes']
    

    // Get token and conditioanl rendering //////////////////
    const [token, setToken] = useState();
    useEffect(() => {
        //@ts-ignore
        const token = JSON.parse(localStorage.getItem('token'));
        if (token) {
        setToken(token);
        }
    }, []);

    if (token === undefined){
        var user_add_cart =
        <ColorButton className='text-lg py-2 px-4'>Sign In</ColorButton>
    } else{
        var user_add_cart =
        <ColorButton className="text-lg py-2 px-4" type="submit">Add to Cart</ColorButton>
    }

    // Adjust cost based on trim /////////////////////////
    const triminfo = bike['trims']
    const trims = Object.keys(triminfo)
    const[trim, setTrim] = useState<any>(trims[trims.length-1])

    function TrimSelected(trim:any){
        setTrim(trim)
    }

    var prices = []
    for (let trim in trims){
        prices.push(triminfo[trims[trim]]['cost'])
    }

    // Adjust Image Based on Color /////////////////////////
    const colorinfo = ModelInfo[model]['colors']
    const colors = Object.keys(colorinfo)
    const [pictures, setPictures] = useState<any>(colorinfo[colors[colors.length-1]])

    function ColorSelected(color:any){
        setPictures(colorinfo[color])
    }
    
    // Handles form submit /////////////////////
    const AddtoCart = (event: any)  => {
        event.preventDefault();
        const target = event.target;
        const color = target.colors.value;
        const trim = target.trims.value;
        const size = target.sizes.value;
        const quantity = 1
        
        return fetch(`${API_URL}/usercart/${token}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: model,
                color: color,
                trim: trim,
                size: size,
                quantity: quantity
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
    
    // Navigate after successful form submit ////////////////////
    const navigate = useNavigate()
    const [completedfetch, setCompletedFetch] = useState<boolean>(false);
    useEffect(() => {
        if (completedfetch){
            navigate("/cart")
        }
    }, [completedfetch]);

      
  return (
    <div className="py-10 flex justify-center">
        <div className="flex flex-col items-center container mx-2">
            <div className="grid grid-cols-5 gap-x-6 justify-center border border-slate-300 rounded p-2">
                <h1 className="text-2xl col-span-5 flex md:hidden">{model}</h1>
                <div className="col-span-5 md:col-span-3 xl:col-span-4 grid gap-y-3">

                    {pictures.map((picture:any) => (
                        <img src={picture} className='border-4 border-gray-100 rounded' key={picture}/>
                    ))}
                    
                </div>
                <div className="col-span-5 md:col-span-2 xl:col-span-1">
                    <h1 className="text-2xl hidden md:flex">{model}</h1>
                    <p className="text-xl mt-2 hidden md:flex"> ${triminfo[trim]['cost']}</p>

                    <form onSubmit={AddtoCart} className="">

                        <div className="mt-4 font-bold">Colors:</div>
                        <fieldset id = "colors" className="grid grid-cols-3 w-fit gap-3">
                        {colors.map((color:any) => (
                            <div className="" key={color}>
                                <input type="radio" id={color} value={color} defaultChecked name="colors" className="hidden peer" onClick={() => {
                                    ColorSelected(color)
                                }}/>
                                <label htmlFor={color} className="inline-flex w-full place-content-center p-2 text-gray-500 bg-white border border-gray-200 rounded cursor-pointer peer-checked:border-slate-800 peer-checked:text-slate-900 hover:text-slate-600 hover:bg-gray-100 ">{color}</label>
                            </div>
                        ))}
                        </fieldset>

                        <div className="mt-4 font-bold">Sizes:</div>

                        <fieldset id = "sizes" className="grid grid-cols-3 w-fit gap-3">
                        {sizes.map((size:any) => (
                            <div className="" key={size}>
                                <input type="radio" id={size} value={size} defaultChecked name="sizes" className="hidden peer" />
                                <label htmlFor={size} className="inline-flex py-2 px-5 text-gray-500 bg-white border border-gray-200 rounded cursor-pointer peer-checked:border-slate-800 peer-checked:text-slate-900 hover:text-slate-600 hover:bg-gray-100 ">{size}</label>
                            </div>
                        ))}
                        </fieldset>

                        <div className="mt-4 font-bold">Trims:</div>

                        <fieldset id = "trims" className="grid grid-cols-3 w-fit gap-3">
                        {trims.map((trim:any) => (
                            <div className="" key={trim}>
                                <input type="radio" id={trim} value={trim} defaultChecked name="trims" className="hidden peer" onClick={() => {
                                    TrimSelected(trim)
                                }}/>
                                <label htmlFor={trim} className="inline-flex w-full place-content-center p-2 text-gray-500 bg-white border border-gray-200 rounded cursor-pointer peer-checked:border-slate-800 peer-checked:text-slate-900 hover:text-slate-600 hover:bg-gray-100 "> {model} {trim}</label>
                            </div>
                        ))}
                        </fieldset>
                        <p className="text-xl mt-2 flex md:hidden"> ${triminfo[trim]['cost']}</p>

                        <div className="mt-2">
                            {user_add_cart}
                        </div>
                    </form>
                </div>
            </div>
            <div className="mt-5 mx-2 container">
                <Accordion defaultExpanded>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    >
                    <h1 className="uppercase text-xl">Description</h1>
                    </AccordionSummary>
                    <AccordionDetails>
                    <div>
                    {bike.descriptions.map((paragraph:any) => (
                        <p className="mb-3" key={paragraph}>
                            {paragraph}
                        </p>
                    ))}
                        {bike.description}
                    </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    >
                    <h1 className="uppercase text-xl">Technical Specifications</h1>
                    </AccordionSummary>
                    <AccordionDetails>
                    <div className="grid gap-y-5">
                        <div className="grid grid-cols-2 border-gray-500 border-b">
                            <h1 className="text-lg font-semibold">Cockpit</h1>
                            <div className="grid gap-y-3 mb-4">
                                <div>
                                    <h2>Stem</h2>
                                    <p className=" text-gray-400">{triminfo[trim]['stem']}</p>
                                </div>
                                <div>
                                    <h2>SeatPost</h2>
                                    <p className=" text-gray-400">{triminfo[trim]['seatpost']}</p>
                                </div>
                                <div>
                                    <h2>Saddle</h2>
                                    <p className=" text-gray-400">{triminfo[trim]['saddle']}</p>
                                </div>
                                <div>
                                    <h2>Handlebars</h2>
                                    <p className=" text-gray-400">{triminfo[trim]['handlebars']}</p>
                                </div>
                            </div> 
                        </div>
                        <div className="grid grid-cols-2 border-gray-500 border-b">
                            <h1 className="text-lg font-semibold">Drivetrain</h1>
                            <div className="grid gap-y-3 mb-4">
                                <div>
                                    <h2>Shift Levers</h2>
                                    <p className=" text-gray-400">{triminfo[trim]['shiftlevers']}</p>
                                </div>
                                <div>
                                    <h2>Crankset</h2>
                                    <p className=" text-gray-400">{triminfo[trim]['crankset']}</p>
                                </div>
                                <div>
                                    <h2>Derailleurs</h2>
                                    <p className=" text-gray-400">{triminfo[trim]['derailleurs']}</p>
                                </div>
                                <div>
                                    <h2>Cassette</h2>
                                    <p className=" text-gray-400">{triminfo[trim]['cassette']}</p>
                                </div>
                                <div>
                                    <h2>Brakes</h2>
                                    <p className=" text-gray-400">{triminfo[trim]['brakes']}</p>
                                </div>
                            </div> 
                        </div>
                        <div className="grid grid-cols-2 border-gray-500 border-b">
                            <h1 className="text-lg font-semibold">Wheels & Tires</h1>
                            <div className="grid gap-y-3 mb-4">
                                <div>
                                    <h2>Wheels</h2>
                                    <p className=" text-gray-400">{triminfo[trim]['wheels']}</p>
                                </div>
                                <div>
                                    <h2>Tires</h2>
                                    <p className=" text-gray-400">{triminfo[trim]['tires']}</p>
                                </div>
                            </div> 
                        </div>
                        <div className="grid grid-cols-2 border-gray-500">
                            <h1 className="text-lg font-semibold">Framset</h1>
                            <div className="grid gap-y-3 mb-4">
                                <div>
                                    <h2>Frame</h2>
                                    <p className=" text-gray-400">{triminfo[trim]['frame']}</p>
                                </div>
                                <div>
                                    <h2>Fork</h2>
                                    <p className=" text-gray-400">{triminfo[trim]['fork']}</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                    >
                    <h1 className="uppercase text-xl">Size Chart</h1>
                    </AccordionSummary>
                    <AccordionDetails className="flex justify-center">
                        <img src={sizechart} className='hidden md:block w-full border-2 border-gray-400 rounded'/>
                        <img src={SizeChartSmall} className='md:hidden w-full border-2 border-gray-400 rounded max-w-96'/>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    </div>
  )
}

export default Bike