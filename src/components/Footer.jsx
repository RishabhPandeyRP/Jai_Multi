import React from 'react';

function Footer() {
  return (
    <div className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap mb-8 justify-between  border-green-500 px-10">
          {/* About Us Section */}
          <div className="w-full md:w-1/4 lg:w-[20%] flex flex-col gap-4  border-red-500">
            <img src="/png/image_1.png" alt="Company Logo" className="w-32 h-auto mb-4" />
            <p className="text-gray-400 text-sm text-justify md:text-base">
              We are a leading manufacturer of high-quality train parts, specializing in the production of components that are critical to the safe and efficient operation of trains. With years of experience in the industry, we take pride in our commitment to excellence and our dedication to providing top-notch products to our customers.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className=' border-red-500 flex justify-between md:w-[90%] lg:w-[60%] mt-[10%] lg:mt-[6%]'>
            <div className="w-full md:w-1/4 lg:w-[33%] pl-2">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Products Line</a></li>
                <li><a href="#" className="hover:underline">Certifications</a></li>
                <li><a href="#" className="hover:underline">Quality</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
              </ul>
            </div>

            {/* SiteMap Section */}
            <div className="w-full md:w-1/4 lg:w-[33%]">
              <h3 className="text-lg font-semibold mb-4">SiteMap</h3>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li><a href="#" className="hover:underline">Couplers</a></li>
                <li><a href="#" className="hover:underline">Knuckles</a></li>
                <li><a href="#" className="hover:underline">Components</a></li>
                <li><a href="#" className="hover:underline">Yoke</a></li>
                <li><a href="#" className="hover:underline">Axile Box Housing</a></li>
                <li><a href="#" className="hover:underline">Infrastructure</a></li>
                <li><a href="#" className="hover:underline">CSR</a></li>
              </ul>
            </div>

            {/* Contact Us Section */}
            <div className="w-full md:w-1/4 lg:w-[33%]">
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="flex flex-col gap-4 text-gray-400 text-sm md:text-base">
                <div className="flex items-start">
                  <img src="/png/akar-icons_location.svg" alt="Location Icon" className="w-6 h-6 mr-3" />
                  <p>HWG2+4XM, Derabassi - Barwala Rd, Bhagwanpur, Punjab 140507.</p>
                </div>
                <div className="flex items-start">
                  <img src="/png/Group_41.svg" alt="Phone Icon" className="w-6 h-6 mr-3" />
                  <div>
                    <p>Monday - Friday: 10 am - 10pm</p>
                    <p>Sunday: 11 am - 9pm</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <img src="/png/Group.svg" alt="Email Icon" className="w-6 h-6 mr-3" />
                  <p>info@jaimultiengineering.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Legal Links Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row  justify-between border-red-500 items-center lg:items-baseline">
            {/* Follow Us On Section */}
            <div className="flex flex-col md:flex-row items-center mb-8 md:mb-0">
              <h3 className="text-lg font-semibold mb-4 md:mb-0 mr-4">Follow Us On</h3>
              <div className="flex space-x-4">
                <img src="/png/linkdin.png" alt="LinkedIn" className="w-6 h-6 hover:opacity-80 transition-opacity" />
                <img src="/png/Link.png" alt="Facebook" className="w-6 h-6 hover:opacity-80 transition-opacity" />
                <img src="/png/instadvksdv.png" alt="Instagram" className="w-6 h-6 hover:opacity-80 transition-opacity" />
                <img src="/png/xtwitter.png" alt="Twitter" className="w-6 h-6 hover:opacity-80 transition-opacity" />
              </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center text-gray-400 mb-8 md:mb-0">
              © 2024 JaiMulti Engineering Co. All Rights Reserved.
            </div>

            {/* Legal Links Section */}
            <div className="flex flex-col md:flex-row gap-4 text-center text-gray-400 md:mb-0">
              <p><a href="#" className="hover:underline">Disclaimer</a></p>
              <p><a href="#" className="hover:underline">Site Credit</a></p>
              <p><a href="#" className="hover:underline">Privacy Policy</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;