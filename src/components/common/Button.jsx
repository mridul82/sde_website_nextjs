
const Button = ({
    children,
    className=""
    
}) => {
  return (
    <button
        type='button'
       
        
      className="{className} bg-primary text-white rounded-full py-2 px-4 hover:bg-primary-dark" 
    >
{children}
    </button>
  )
}

export default Button
