import { Link } from 'react-router-dom'
//@ts-ignore
import FooterLogo from '../assets/images/footer/FooterLogo.png'

interface footerprops {
    id?: any;
  }

function Footer(props: footerprops) {

    return (
        <footer className="grid bg-gray-900 border-t border-gray-800 text-slate-300 grid-cols-3 p-0" id={ props.id }>
            <div className='flex text-xs items-center justify-center'>
                <a href='https://velovic.netlify.app/' className='opacity-70 hover:opacity-100 hover:underline duration-500'>©2024 Arjan Velovic</a>
            </div>
            <div className='flex items-center justify-center'>
            <Link to='/'><img src={FooterLogo} className='w-auto h-10 opacity-70 hover:opacity-100 transition duration-500'/></Link></div>

            <div className='flex items-center justify-center'>
                <a href='https://twitter.com/iamspecialized'><i className="fa-brands fa-x-twitter mx-2 hover:text-white transition duration-700"></i></a>
                <a href='https://www.instagram.com/iamspecialized/?hl=en'><i className="fa-brands fa-instagram mx-2 hover:text-white transition duration-700"></i></a>
                <a href='https://www.facebook.com/specializedbicycles/'><i className="fa-brands fa-facebook mx-2 hover:text-white transition duration-700"></i></a>
                <a href='https://www.youtube.com/channel/UCcrBtxD8xy2cxeXM7f-xihA'><i className="fa-brands fa-youtube mx-2 hover:text-white transition duration-700"></i></a>

            </div>
      </footer>
);}

export default Footer