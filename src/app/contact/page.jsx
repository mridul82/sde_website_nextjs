"use client";
import { useState } from "react";

const contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center py-10 px-5 bg-gray-50">
      {/* Page Title */}
      <h2 className="text-4xl font-bold text-primary mb-10">
        Contact Us
      </h2>

      <div className="flex flex-col md:flex-row md:justify-around w-full md:w-2/3 lg:w-1/2 bg-white shadow-lg rounded-lg p-8">
        
        {/* Contact Form */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-5">
          <form onSubmit={() => {}} className="space-y-4">
            <div>
              <label className="block text-lg font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold py-3 rounded-md hover:bg-secondary transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <h3 className="text-2xl font-semibold text-primary">
            Get in Touch
          </h3>
          <p className="text-gray-600">
            We'd love to hear from you! Reach out to us via email, phone, or visit us at our office.
          </p>
          <p className="text-lg font-semibold text-gray-800">Email: support@itnexsolutions.com</p>
          <p className="text-lg font-semibold text-gray-800">Phone: +1 (123) 456-7890</p>
          <p className="text-lg font-semibold text-gray-800">Address: 123 Business Street, City, Country</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default contact
contact