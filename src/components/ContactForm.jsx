import React, { useState } from 'react';
// import bgImage from './bg.png'; // Adjust the path as necessary

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    designation: '',
    organization: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div 
      className="flex justify-center items-center py-[0%]  border-green-500 font-raleway"
      // style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-slate-200/80 border p-8 rounded-lg shadow-xl max-w-4xl w-full">
        <div className="text-left mb-6">
          <h2 className="text-3xl font-bold mb-2 text-[#111827]">Send Message</h2>
          <p className="text-gray-600 mb-4">Effortlessly express your thoughts and ideas, and watch your conversations thrive.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your name *"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 p-3 w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email address *"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 p-3 w-full "
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <input
              type="tel"
              name="phone"
              placeholder="Phone number *"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 p-3 w-full"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject *"
              value={formData.subject}
              onChange={handleChange}
              className="border border-gray-300 p-3 w-full"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <input
              type="text"
              name="designation"
              placeholder="Designation *"
              value={formData.designation}
              onChange={handleChange}
              className="border border-gray-300 p-3 w-full"
              required
            />
            <input
              type="text"
              name="organization"
              placeholder="Organization *"
              value={formData.organization}
              onChange={handleChange}
              className="border border-gray-300 p-3 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 p-3 w-full h-32"
            />
          </div>
          <div className="text-left">
            <button type="submit" className="bg-[#111827] text-white px-8 py-2 rounded-md hover:bg-[#111827]/70 transition duration-300">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
