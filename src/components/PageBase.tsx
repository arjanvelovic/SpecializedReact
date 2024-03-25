interface PageBaseProps {
    children?: React.ReactNode;
    className?: string;
  }
  
  function PageBase(props: PageBaseProps) {
    const combinedClassName = 'py-8 flex justify-center ' + props.className
  
    return (
      <div className={combinedClassName}>
        { props.children }
      </div>
    )
  }
  
  export default PageBase