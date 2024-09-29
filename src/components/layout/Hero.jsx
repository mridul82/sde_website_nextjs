
const Hero = () => {
  return (
    <div className='min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-25 mx-5 font:poppins-thin '>
        <div className="  w-full md:w-[45%] p-3 m-5">
      <img src="../images/hero_image.png" alt="img" style={{ maxHeight: '500px', width: '90%', height: 'auto' }}  loading="lazy" />
    </div>
      <div className="w-full md:w-[55%] text-center p-5">
      <h4 className="text-3xl md:text-5xl font-semibold leading-tight mb-4">
      Innovative Web Solutions for Your Digital Success</h4>
        <span className="text-brightGreen font-semibold"> "Empowering Businesses with Custom Website Design, Development, and SEO Services"</span>
      
      <p className=" text-lightText mt-5 text-start">
      At SDE Solutions, we specialize in creating dynamic, user-friendly websites that are tailored to meet your business goals. 
      From sleek, modern designs to seamless functionality, 
      we provide end-to-end services including custom web development, responsive design, and search engine optimization (SEO). 
      Our team of experts is dedicated to helping you establish a strong online presence, drive traffic, 
      and grow your brand in today's competitive digital landscape. Let us turn your vision into reality!
      </p>
      </div>
      
    </div>
  )
}

export default Hero
