//@ts-ignore
import NotFoundPic from '../assets/images/NotFound.jpg'
import { useNavigate } from 'react-router-dom'



function NotFound() {
    const navigate = useNavigate()
    
  return (
    <div className=''>
      <div className = 'container2'>
        <img src={NotFoundPic} className='object-cover w-full h-[88vh] md:h-[87vh]'/>
        <div className='overlap3 grid justify-center mb-24'>
            <h1 className='text-white text-2xl'>Looks like the end of the road!</h1>
            <button className="bg-slate-100 text-slate-900 border hover:bg-slate-700 hover:text-slate-100 hover:border-slate-700  transition duration-700 rounded py-2" onClick={() => {navigate("/")}}>
                Home Page
            </button>
        </div>
      </div>

    </div>
    
  )
}

export default NotFound