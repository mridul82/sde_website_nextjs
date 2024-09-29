import Image from 'next/image'
import Link from 'next/link'

const Service = ({title, description, link}) => {
  return (
    
    <div className='flex md:flex-row flex-col justify-center items-center m-3'>
      <div className=" bg-white group flex flex-col items-center text-center gap-2 w-full   p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out">
      <div className=" bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]">
      <div className=" flex flex-row justify-center">
       <Image src={link} alt="img" width={50} height={50}  loading="lazy" />
      </div>
      </div>
      <h1 className=" font-semibold text-lg">{title}</h1>
      <p>
      {description}
      </p>
<Link href="/">
<h3 className="text-red-400 cursor-pointer hover:text-[#ade9dc] transition duration-300 ease-in-out" >
        Learn more
      </h3>
</Link>
      
    </div>


    </div>
  )
}

export default Service
