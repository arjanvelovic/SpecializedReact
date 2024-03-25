interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: any;
}

function ColorButton(props: ButtonProps) {
  const combinedClassName = 'bg-slate-700 text-white border hover:bg-gray-50 hover:text-slate-700 hover:border-slate-800 transition duration-700 rounded ' + props.className

  return (
    <button onClick={ props.onClick } className={combinedClassName} type={ props.type }>
    { props.children }
    </button>
  )
}

export default ColorButton