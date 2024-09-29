
const SectionTitle = ({ title, description, center }) => {
  
  return (
    <>
    <div className={`w-full text-center ${center ? "mx-auto text-center" : ""}`}>
       <h2 className='text-4xl font-semibold mb-4 text-primary'>{title}</h2>
       <div className="flex justify-center">
       <p className="md:w-1/2 text-center text-base text-lightText ">
        {description}
       </p>
       </div>
      
    </div>
    </>
  )
}

export default SectionTitle
