interface PageHeadingProps {
    children?: React.ReactNode;
    className?: string;
  }
  
  function PageHeading(props: PageHeadingProps) {
    const combinedClassName = 'text-2xl text-center border-b-2 ' + props.className
  
    return (
      <h1 className={combinedClassName}>
        { props.children }
      </h1>
    )
  }
  
  export default PageHeading