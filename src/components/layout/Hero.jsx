import Image from "next/image"
import Link from "next/link"


const Hero = () => {
  
  return (
    <div className="min-h-[80vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-6 font-poppins-thin">
      
    {/* Image Container */}
    
      <Image
        src="/images/hero_image.png"
        alt="Innovative Web Solutions"
        width={600}
        height={500}
        loading="lazy"
        className="rounded-lg"
      />
    

    {/* Content Container */}
    <div className="w-full md:w-[50%] text-center md:text-left p-6 space-y-4">
      <h4 className="text-4xl md:text-5xl font-semibold leading-tight text-primary mb-4">
        Innovative Web Solutions for Your Digital Success
      </h4>
      <span className="text-xl font-semibold text-brightGreen">
        Empowering Businesses with Custom Website Design, Development, and SEO Services
      </span>
      
      <p className="text-lg text-lightText mt-6">
        At ITNex Solutions, we specialize in creating dynamic, user-friendly websites tailored to meet your business goals.
        From sleek, modern designs to seamless functionality, we provide end-to-end services including custom web development,
        responsive design, and search engine optimization (SEO). Let us turn your vision into reality!
      </p>
      
      {/* Button to navigate to another page */}
      <Link href="/contact" 
         className="mt-10 inline-block bg-primary text-white font-bold py-3 px-8 rounded-md hover:bg-secondary transition-all duration-300">
          Get Started
        
      </Link>
    </div>

  </div>
  )
}

export default Hero
