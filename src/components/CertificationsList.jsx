import React, { useState } from "react";
import bgImage1 from '../assets/bg1.jpg';
import bgImage2 from '../assets/bg2.jpg';
import bgImage3 from '../assets/bg3.jpg';
import NavBar from "./NavBar";
import Footer from "./Footer";

const certificates = [
  {
    title: "Eleven-Time Honoree, Inc. 5000, Fastest Growing Companies in America",
    description: `Inc. has honored MAQ Software on its prestigious Inc. 5000 list eleven times, a rare achievement. Since 2007, Inc. magazine has recognized more than 35,000 unique companies on its Inc. 5000 list based on the sales growth of the companies. Less than 0.5% of Inc. 5000 companies demonstrate sustained growth by appearing eleven or more times.`,
    additionalInfo: `For more than 30 years, the Inc. list has served as evidence of the significant accomplishments of enterprises such as Intuit, Zappos, Under Armour, Microsoft, Jamba Juice, Timberland, Visa, Clif Bar, Patagonia, and Oracle.`,
    imgPath: bgImage1,
  },
  {
    title: "Another Certificate Title",
    description: `Details about the company's achievements for this certification. Explain the significance of this certification and how it showcases the company's success.`,
    additionalInfo: `Additional info about this recognition or other companies that have received this certification.`,
    imgPath: bgImage2,
  },
  {
    title: "Top 100 Best Places to Work",
    description: `Awarded for creating an inclusive and dynamic work culture, this recognition places us among the top companies that prioritize employee satisfaction.`,
    additionalInfo: `This list includes companies such as Google, Amazon, and other industry leaders, reflecting our commitment to an excellent work environment.`,
    imgPath: bgImage3,
  },
];

// Modal Component
const ImageModal = ({ isOpen, onClose, imgPath }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50">
      <div className="bg-gray-500 bg-opacity-45 backdrop-filter backdrop-blur-md fixed top-0 left-0 right-0 bottom-0" onClick={onClose}></div>
      <div className="relative z-10  border-red-700">
        <img src={imgPath} alt="Certificate" className="w-[1000px] h-auto object-contain rounded-lg" />
        <button
          className="absolute top-0 right-2 text-black text-3xl font-bold hover:text-gray-100  border-green-500"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>

  );
};

const Certificate = ({ title, description, additionalInfo, imgPath }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="certificate-container flex flex-col md:flex-row items-center bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out mb-8">
        {/* Certificate Image */}
        <div className="md:w-1/3 w-fit h-fit mb-4 md:mb-0">
          <img
            src={imgPath}
            alt={title}
            className="h-48 w-48 md:h-40 md:w-40 mx-auto rounded-lg cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out object-fill shadow-md shadow-black/50"
            onClick={openModal}
          />
        </div>

        {/* Certificate Description */}
        <div className="md:w-2/3 w-full text-left">
          <h2 className="text-[30px] font-[600] text-[#312865] mb-2">{title}</h2>
          <p className="font-raleway text-[15px] font-[400] text-justify mb-4">{description}</p>
          <p className="font-raleway text-[12px] font-[400] text-justify text-gray-600">{additionalInfo}</p>
          <hr className="border-t w-full my-4" />
        </div>
      </div>

      {/* Modal for Image */}
      <ImageModal isOpen={isModalOpen} onClose={closeModal} imgPath={imgPath} />
    </>
  );
};

const CertificationsList = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="certifications-list max-w-6xl mx-auto p-8 pt-[8%]  border-green-500 flex flex-col justify-center gap-5">
        <div className="w-full sticky top-[8%] z-10 bg-white  border-green-500 flex justify-center">
          <span className="font-[600] text-[40px] text-center w-fit border-red-200 mx-auto font-raleway text-transparent bg-clip-text bg-gradient-to-r from-[#0A173B] to-[#0025FF] sm:text-[40px] lg:text-[52px] xl:text-[62px] mt-[1%]">
            Recognitions
          </span>
        </div>
        {certificates.map((cert, index) => (
          <Certificate
            key={index}
            title={cert.title}
            description={cert.description}
            additionalInfo={cert.additionalInfo}
            imgPath={cert.imgPath}
          />
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CertificationsList;
