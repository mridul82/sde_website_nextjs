import Image from "next/image";

const Service = ({ title, description, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 lg:p-10">
      <div className="flex flex-col items-center md:items-start">
        <Image src={link} alt={title} width={100} height={100} className="rounded-full mb-4" />
        <h3 className="text-lg font-bold text-gray-600 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="bg-primary text-white rounded-full py-2 px-4 hover:bg-primary-dark">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Service;