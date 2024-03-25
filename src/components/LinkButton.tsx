import { useNavigate } from "react-router-dom";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  link?: string;
  type?: any;
}

function LinkButton(props: ButtonProps) {
  const link = props.link!
  const navigate = useNavigate()
  const combinedClassName = 'bg-slate-700 text-white border hover:bg-gray-50 hover:text-slate-700 hover:border-slate-800 transition duration-700 rounded ' + props.className

  return (
    <button onClick={() => {navigate(link)}} className={combinedClassName} type={ props.type }>

    { props.children}

    </button>
  )
}

export default LinkButton