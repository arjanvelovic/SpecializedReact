import { Link } from "react-router-dom";
import CategoryInfo from "../assets/info/CategoryInfo"
import {useParams} from "react-router-dom"



function Category() {
    const{category} = useParams()
    //@ts-ignore
    const models = Object.keys(CategoryInfo[category])

  return (
    <div className="py-8 flex justify-center">
        <div className="container grid gap-3 justify-items-center">
            <h1 className="text-2xl text-center">{category} Bikes</h1>
            <h1 className="w-11/12 border-b-2 place-self-center"></h1>

            <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-4">
                {models.map((model:any) => (
                    
                <div className="grid gap-y-1" key={model}>
                    <Link to= {`/bike/${model}`} className="hover:opacity-70 transition duration-500">
                    {/* @ts-ignore */}
                        <img src={CategoryInfo[category][model][0]} className='rounded-lg'/>
                    </Link>
                    <Link to= {`/bike/${model}`} className="uppercase font-semibold hover:text-red-600 underline-offset-4 hover:underline transition duration-500 mt-2">{model}</Link>
                    {/* @ts-ignore */}
                    <p className="">Starting at ${CategoryInfo[category][model][1]}.00</p>

                </div> 
                ))}
            </div>
        </div>
    </div>

    
  )
}

export default Category