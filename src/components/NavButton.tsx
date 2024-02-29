interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function ColorButton(props: ButtonProps) {
  const combinedClassName = 'uppercase font-semibold hover:text-red-600 underline-offset-4 hover:underline transition duration-500  ' + props.className

  return (
    <button onClick={ props.onClick } className={combinedClassName}>
    { props.children}
    </button>
  )
}

export default ColorButton