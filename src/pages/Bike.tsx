import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ModelInfo from "../assets/info/ModelInfo"
import API_URL from '../assets/info/URLInfo'
//@ts-ignore
import SizeChartNumbersBig from '../assets/images/Bikes/SizeChartNumbersBig.png'
//@ts-ignore
import SizeChartNumbersSmall from '../assets/images/Bikes/SizeChartNumbersSmall.png'
//@ts-ignore
import SizeChartLettersBig from '../assets/images/Bikes/SizeChartLettersBig.png'
//@ts-ignore
import SizeChartLettersSmall from '../assets/images/Bikes/SizeChartLettersSmall.png'

import ColorButton from "../components/ColorButton";
import LinkButton from "../components/LinkButton";
import PageBase from "../components/PageBase";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';


type ModelParams = {
    model: any;
}

function Bike() {

    // Populates page info /////////////////////////////
    const{model} = useParams<ModelParams>()
    const bike = ModelInfo[model]
    const sizes = bike['sizes']

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [size, setSize] = useState()
    const [color, setColor] = useState()
    

    // Get tokens ////////////////////
    const [token, setToken] = useState();
    useEffect(() => {
        //@ts-ignore
        const token = JSON.parse(localStorage.getItem('token'));
        if (token) {
        setToken(token);
        }
    }, []);

    // HTML if not signed in /////////////
    if (token === undefined){
        var user_add_cart =
        <LinkButton className="text-lg py-2 px-4" link="/signin" children="Sign In to Add to Cart"></LinkButton>
    }
    // HTML if signed in ///////////// 
    else{
        var user_add_cart =
        <ColorButton className="text-lg py-2 px-4" type="submit" children="Add to Cart"/>
    }

    // Adjust cost based on trim /////////////////////////
    const triminfo = bike['trims']
    const trims = Object.keys(triminfo)
    const[trim, setTrim] = useState<any>(trims[0])

    function TrimSelected(trim:any){
        setTrim(trim)
    }

    var prices = []
    for (let trim in trims){
        prices.push(triminfo[trims[trim]]['cost'])
    }

    // Adjust Image Based on Color //////////////////////
    const colorinfo = ModelInfo[model]['colors']
    const colors = Object.keys(colorinfo)
    const [pictures, setPictures] = useState<any>(colorinfo[colors[0]])

    function ColorSelected(color:any){
        setPictures(colorinfo[color])
    }

    // Adjust Chart Based on Model /////////////////
    const roadmodels = ['Allez', 'Tarmac', 'Roubaix', 'Diverge', 'Crux']
    if(roadmodels.includes(model)){
        var ChartDiv = 
        <>
            <img src={SizeChartNumbersBig} className='hidden md:block w-full border-2 border-gray-400 rounded'/>
            <img src={SizeChartNumbersSmall} className='md:hidden w-full border-2 border-gray-400 rounded max-w-96'/>
        </>

    } else {
        var ChartDiv = 
        <>
            <img src={SizeChartLettersBig} className='hidden md:block w-full border-2 border-gray-400 rounded'/>
            <img src={SizeChartLettersSmall} className='md:hidden w-full border-2 border-gray-400 rounded max-w-96'/>
        </>

    }

    // Handles loading while waiting for api //////////////////
    const [isLoading, setIsLoading] = useState(false);
    if (isLoading) {
        var loading_html = <CircularProgress color="primary" className=""/>
    } else {
        var loading_html = <></>
    }
    
    // Handles form submit /////////////////////
    const AddtoCart = (event: any)  => {
        event.preventDefault();
        const target = event.target;
        const color = target.colors.value;
        const trim = target.trims.value;
        const size = target.sizes.value;
        const quantity = 1

        setColor(color)
        setSize(size)
        setIsLoading(true);
        
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
            setIsLoading(false)
            handleOpen()
            })
        .catch((error) => {
        console.error(error);
        });
      }
    

  return (
    <PageBase>
        <div className="flex flex-col items-center container mx-2">
            <div className="grid grid-cols-5 gap-x-6 justify-center border border-slate-300 rounded p-2">
                <h1 className="text-2xl col-span-5 flex md:hidden mb-3">{model} {trim}</h1>
                <div className="col-span-5 md:col-span-3 xl:col-span-4 grid gap-y-3">
                    {pictures.map((picture:any) => (
                        <img src={picture} className='border-4 border-gray-100 rounded' key={picture}/>
                    ))}
                </div>
                <div className="col-span-5 md:col-span-2 xl:col-span-1">
                    <h1 className="text-2xl hidden md:flex">{model} {trim}</h1>
                    <p className="text-xl mt-2 hidden md:flex"> ${triminfo[trim]['cost']}</p>

                    <form onSubmit={AddtoCart} className="">

                        {/* Color Selection */}
                        <div className="mt-4 font-bold">Colors:</div>
                        <fieldset id = "colors" className="grid grid-cols-4 md:grid-cols-3 w-fit gap-3">
                        {colors.map((color:any, i: number) => {
                            // Automatic selection of first color ///////
                            if (i == 0){
                                return(  
                                <div className="" key={color}>
                                    <input type="radio" id={color} value={color} defaultChecked name="colors" className="hidden peer" onClick={() => {
                                        ColorSelected(color)}}/>
                                    <label htmlFor={color} className="inline-flex w-full h-full text-center place-content-center place-items-center p-2 text-gray-500 bg-white border border-gray-200 rounded cursor-pointer peer-checked:border-slate-800 peer-checked:text-slate-900 hover:text-slate-600 hover:bg-gray-100 ">{color}</label>
                                </div>
                            )

                            }else{
                                return(  
                                    <div className="" key={color}>
                                        <input type="radio" id={color} value={color} name="colors" className="hidden peer" onClick={() => {
                                            ColorSelected(color)}}/>
                                        <label htmlFor={color} className="inline-flex w-full h-full text-center place-content-center place-items-center p-2 text-gray-500 bg-white border border-gray-200 rounded cursor-pointer peer-checked:border-slate-800 peer-checked:text-slate-900 hover:text-slate-600 hover:bg-gray-100 ">{color}</label>
                                    </div>
                                )

                            }
                        })}
                        </fieldset>

                        {/* Size Selection */}
                        <div className="mt-4 font-bold">Sizes:</div>
                        <fieldset id = "sizes" className="grid grid-cols-3 w-fit gap-3">
                        {sizes.map((size:any, i:number) => {
                            // Automatic selection of first size ///////
                            if (i == 0){
                                return(
                                    <div className="" key={size}>
                                        <input type="radio" id={size} value={size} defaultChecked name="sizes" className="hidden peer"/>
                                        <label htmlFor={size} className="inline-flex w-full h-full text-center place-content-center place-items-center py-2 px-5 text-gray-500 bg-white border border-gray-200 rounded cursor-pointer peer-checked:border-slate-800 peer-checked:text-slate-900 hover:text-slate-600 hover:bg-gray-100">{size}</label>
                                    </div>
                                )
                            } else {
                                return(
                                    <div className="" key={size}>
                                        <input type="radio" id={size} value={size} name="sizes" className="hidden peer"/>
                                        <label htmlFor={size} className="inline-flex w-full h-full text-center place-content-center place-items-center p-2 text-gray-500 bg-white border border-gray-200 rounded cursor-pointer peer-checked:border-slate-800 peer-checked:text-slate-900 hover:text-slate-600 hover:bg-gray-100">{size}</label>
                                    </div>
                                )

                            }
                        }
                        )}
                        </fieldset>

                        {/* Trim Selection */}
                        <div className="mt-4 font-bold">Trims:</div>
                        <fieldset id = "trims" className="grid grid-cols-3 w-fit gap-3">
                        {trims.map((trim:any, i:number) =>{
                            // Automatic selection of first trim ///////
                            if (i == 0){
                                return(
                                    <div className="" key={trim}>
                                        <input type="radio" id={trim} value={trim} defaultChecked name="trims" className="hidden peer" onClick={() => {
                                            TrimSelected(trim)}}/>
                                        <label htmlFor={trim} className="inline-flex w-full h-full text-center place-content-center place-items-center p-2 text-gray-500 bg-white border border-gray-200 rounded cursor-pointer peer-checked:border-slate-800 peer-checked:text-slate-900 hover:text-slate-600 hover:bg-gray-100">{trim}</label>
                                    </div>
                                )

                            }else{
                                return(
                                    <div className="" key={trim}>
                                        <input type="radio" id={trim} value={trim} name="trims" className="hidden peer" onClick={() => {
                                            TrimSelected(trim)}}/>
                                        <label htmlFor={trim} className="inline-flex w-full h-full text-center place-content-center place-items-center p-2 text-gray-500 bg-white border border-gray-200 rounded cursor-pointer peer-checked:border-slate-800 peer-checked:text-slate-900 hover:text-slate-600 hover:bg-gray-100">{trim}</label>
                                    </div>
                                )
                            }
                        })}
                        </fieldset>
                        <p className="text-xl mt-6 flex md:hidden"> ${triminfo[trim]['cost']}</p>

                        <div className="mt-6 flex">
                            {user_add_cart}
                            {loading_html}
                        </div>

                        {/* Modal after success add to cart */}
                        <Modal
                            open={open}
                            onClose={handleClose}
                        >
                            <div className="absolute h-screen w-screen flex justify-center items-center">
                                <div className="bg-white rounded-md py-7 px-5 max-w-full">
                                    <h1 className="text-lg">
                                        Specialized {model} {trim}
                                        <span className="text-gray-400">, {color} {size}</span>
                                    </h1>
                                    <p className="mt-1">
                                        has been added to your cart!
                                    </p>
                                    <div className="grid grid-cols-2 gap-2 mt-5">
                                        <LinkButton className="py-2 px-3" children="Go to Cart" link="/cart"/>
                                        <ColorButton className='py-2 px-3' onClick={() => {setOpen(false)}} children="Continue Shopping"/>
                                    </div>
                                </div>
                            </div>
                        </Modal>
                    </form>
                </div>
            </div>

            {/* Bike Detail Section */}
            <div className="mt-5 mx-2 container">

                {/* Bike Description */}
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

                {/* Spectification Section */}
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

                {/* Size Chart */}
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                    >
                    <h1 className="uppercase text-xl">Size Chart</h1>
                    </AccordionSummary>
                    <AccordionDetails className="flex justify-center">
                        {ChartDiv}
                    </AccordionDetails>
                </Accordion>

            </div>
        </div>
    </PageBase>
  )
}

export default Bike