//@ts-ignore
import HomeVideo from '../assets/images/home/HomeVideo.mp4'
//@ts-ignore
import scrollgif from '../assets/images/home/scrollgifwhite.gif'
//@ts-ignore
import RoadPic from '../assets/images/home/RoadPic.jpg'
//@ts-ignore
import MountainPic from '../assets/images/home/MountainPic.jpg'
//@ts-ignore
import ActivePic from '../assets/images/home/ActivePic.jpg'
import LinkButton from '../components/LinkButton'

function Home() {
  return (
    <div className='pb-10'>
      <div className = 'container2'>
        <video className='object-cover w-full h-[93vh]' muted autoPlay loop>
          <source src={HomeVideo} type="video/mp4" ></source>
        </video>
        <div className='overlap3 flex justify-center'>
          <img src={scrollgif} className='h-20 mb-6'/>
        </div>
      </div>

      <div className='flex justify-center mt-10 mx-4'>
        <div className='container grid grid-cols-1 md:grid-cols-5 gap-y-4 gap-x-10 items-center'>

          {/* Road Bikes */}
          <div className='col-span-2'>
            <h1 className='font-bold text-xl lg:text-2xl 2xl:text-3xl mb-1 uppercase'>Built For Speed</h1>
            <p className=' text-justify text-gray-500 text-sm md:text-base mb-1'>Whether it’s the alpine passes of the Tour or the rolling gravel roads outside of town, the Saturday club ride with friends or the crosswinds of Kona, our road bikes set the standard by which all others are measured.</p>
            <LinkButton className="py-2 px-5 text-sm md:text-base" children="Shop Road Bikes" link="/categories/Road"/>
          </div>
          <div className='col-span-3'>
            <img src={RoadPic} className='rounded-lg'/>
          </div>

          {/* Moutain Bikes for XS-S */}
          <div className='col-span-2 md:hidden mt-6'>
          <h1 className='font-bold text-xl lg:text-2xl 2xl:text-3xl mb-1 uppercase'>Conquer the Trails</h1>
            <p className='text-justify text-gray-500 text-sm md:text-base mb-1'>Embark on thrilling adventures with our top-notch mountain bikes! Engineered for rugged terrain, conquer any trail with precision and style. Reach new heights of performance and excitement!</p>
            <LinkButton className="py-2 px-5 text-sm md:text-base" children="Shop Mountain Bikes" link="/categories/Mountain"/>
          </div>

          <div className='col-span-3'>
            <img src={MountainPic} className='rounded-lg'/>
          </div>

          {/* Moutain Bikes for M-XL */}
          <div className='col-span-2 text-end hidden md:block'>
          <h1 className='font-bold text-xl lg:text-2xl 2xl:text-3xl mb-1 uppercase'>Conquer the Trails</h1>
            <p className=' text-end text-gray-500 text-sm md:text-base mb-1'>Embark on thrilling adventures with our top-notch mountain bikes! Engineered for rugged terrain, conquer any trail with precision and style. Reach new heights of performance and excitement!</p>
            <LinkButton className="py-2 px-5 text-sm md:text-base" children="Shop Mountain Bikes" link="/categories/Mountain"/>
          </div>
  
          {/* Active Bikes */}
          <div className='col-span-2 mt-6 md:mt-0'>
            <h1 className='font-bold text-xl lg:text-2xl 2xl:text-3xl mb-1 uppercase'>Bikes For Your Life</h1>
            <p className=' text-justify text-gray-500 text-sm md:text-base mb-1'>Navigate city streets effortlessly with our sleek and reliable commuting bikes. Designed for urban warriors, enjoy smooth rides and eco-friendly travel. Conquer the concrete jungle in style!</p>
            <LinkButton className="py-2 px-5 text-sm md:text-base" children="Shop Active Bikes" link="/categories/Active"/>
          </div>
          <div className='col-span-3'>
            <img src={ActivePic} className='rounded-lg'/>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Home