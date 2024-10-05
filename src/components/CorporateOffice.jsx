import React from 'react';

const CorporateOffice = () => {
  const googleMapsUrl = "https://www.google.com/maps?q=Titagarh+Towers+756,+Anandapur,+E.M.+Bypass,+Kolkata+-+700107,+West+Bengal,+India&z=15&output=embed";

  return (
    <div className="flex flex-col md:flex-row justify-between p-6 md:p-12 bg-white rounded-lg  border-red-500 w-[90%] mx-auto">
      {/* Left Section with Company Details */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <h2 className="text-left text-xl font-semibold mb-2 text-gray-500">INDIA - Corporate Office</h2>
        <h1 className="text-left text-3xl font-bold mb-4 text-indigo-800">XYZ SYSTEMS LIMITED</h1>

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
              xyz@abc.in
            </a>
          </p>
        </div>

        <div className="text-left mb-4">
          <p>
            <strong>Phone Number:</strong><br />
            <a href="tel:+913340190800" className="text-blue-600 underline">
              +91-333333333
            </a>
          </p>
        </div>
      </div>

      {/* Right Section with Google Map */}
      <div className="w-full md:w-1/2 h-64 md:h-80">
        <iframe
          src={googleMapsUrl}
          width="100%"
          height="100%"
          className="border-0 rounded-lg"
          allowFullScreen=""
          loading="lazy"
          title="Titagarh Rail Systems Map"
        ></iframe>
        
        <div className="mt-4 text-center">
          
        </div>
      </div>
    </div>
  );
};

export default CorporateOffice;
