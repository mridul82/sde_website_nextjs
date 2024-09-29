import SectionTitle from "@/components/common/SectionTitle"
import Service from "./Service"

const Features = () => {
  return (
    <>
    <section className="py-7 md:py-10">
    <div className='w-full text-center'>
        
        <SectionTitle title="Our Services" description="
        
        we provide innovative software solutions tailored to meet your business needs. 
        Our services include custom website design, development, and search engine optimization (SEO).
        "
        center
        />  

        <div className="flex flex-col md:flex-row gap-5 mt-5">
          <Service title={"Custom Web Development"} description={"We specialize in creating custom websites that are tailored made."} link={"/images/service.svg"} />
          <Service title={"Mobile App Development"} description={"We made mobile apps that are user-friendly and easy to use."} link={"/images/service.svg"} />
          <Service title={"Web App Development"} description={"Customer-focused web apps that provide a seamless user experience."} link={"/images/service.svg"} />
          <Service title={"SEO"} description={"We optimize your website to improve search engine rankings."} link={"/images/service.svg"} />
        </div>
        
    </div>    
    </section>
    
    </>
  )
}

export default Features
