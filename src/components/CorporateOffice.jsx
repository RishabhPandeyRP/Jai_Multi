import React from 'react';

const CorporateOffice = () => {
  const googleMapsUrl = "https://www.google.com/maps?q=30.577200391031667,76.89752493588219&z=15&output=embed";

  return (
    <div className="flex flex-col md:flex-row justify-between p-6 md:p-12 bg-white rounded-lg border border-[#111827] w-[90%] mx-auto mb-10 xl:mt-14">
      {/* Left Section with Company Details */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        {/* <h2 className="text-left text-xl font-semibold mb-2 text-gray-500">INDIA </h2> */}
        <h1 className="text-left text-3xl font-bold mb-4 text-indigo-800">JAI MULTI ENGINEERING CO.</h1>

        <div className="text-left mb-4">
          <p>
            <strong>Location:</strong><br />
            xyz Towers 756, Anandapur, India
          </p>
        </div>

        <div className="text-left mb-4">
          <p>
            <strong>Email Address:</strong><br />
            <a href="mailto:hsdfhshfs" className="text-blue-600 underline">
              support@jaimultiengineering.in
            </a>
          </p>
        </div>

        <div className="text-left mb-4">
          <p>
            <strong>Phone Number:</strong><br />
            <a href="tel:+919914211146" className="text-blue-600 underline">
              +91-9914211146
            </a>
          </p>
        </div>
      </div>

      {/* Right Section with Google Map */}
      <div className="w-full md:w-1/2 h-64 md:h-80 border border-neutral-300 rounded-lg shadow-xl">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3435.0137811298564!2d76.89490622561533!3d30.577156374659705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fbe15afabb1a1%3A0x5d81abe980653e93!2sJAI%20MULTI%20ENGG.%20CO!5e0!3m2!1sen!2sin!4v1728974510559!5m2!1sen!2sin" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
        <div className="mt-4 text-center">
          
        </div>
      </div>
    </div>
  );
};

export default CorporateOffice;



