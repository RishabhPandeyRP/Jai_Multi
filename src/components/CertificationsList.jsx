// import React, { useState } from "react";
// import bgImage1 from '../assets/bg1.jpg';
// import bgImage2 from '../assets/bg2.jpg';
// import bgImage3 from '../assets/bg3.jpg';
// import img1 from '../assets/ISO CERTIFICATE PD STEELS_page-0001.jpg'
// import img2 from '../assets/ISO CERTIFICATE RINE ENGINEERING_page-0001.jpg'
// import img3 from '../assets/CLASS A FOUNDRY AUDIT RINE 16.12.22_page-0001.jpg'
// import img4 from '../assets/Jai Multi Class A Foundry Certificate_page-0002.jpg'
// import img5 from '../assets/JAI MULTI ISO CERTIFICATE_page-0001.jpg'
// import NavBar from "./NavBar";
// import Footer from "./Footer";

// const certificates = [
//   {
//     title: "ISO Certificates",
//     description: ``,
//     additionalInfo: ``,
//     imgPath: [img1, img2, img5],
//   },
//   {
//     title: "Class A Foundry Certificates",
//     description: ``,
//     additionalInfo: ``,
//     imgPath: [img3, img4],
//   },

// ];

// // Modal Component
// const ImageModal = ({ isOpen, onClose, imgPath }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50">
//       <div className="bg-gray-500 bg-opacity-45 backdrop-filter backdrop-blur-md fixed top-0 left-0 right-0 bottom-0" onClick={onClose}></div>
//       <div className="relative z-10  border-red-700">
//         <img src={imgPath} alt="Certificate" className="w-[1000px] h-auto object-contain rounded-lg" />
//         <button
//           className="absolute top-0 right-2 text-black text-3xl font-bold hover:text-gray-100  border-green-500"
//           onClick={onClose}
//         >
//           &times;
//         </button>
//       </div>
//     </div>

//   );
// };

// const Certificate = ({ title, description, additionalInfo, imgPath }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <>
//       <div className="certificate-container flex flex-col-reverse justify-center items-center bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out mb-8 gap-[50px] w-full">
//         {/* Certificate Image */}
//         <div className=" w-fit flex gap-[10%] h-fit mb-4 md:mb-0 border border-red-500">

//           {imgPath?.map((item) => (
//             <div>
//               <img
//                 src={item}
//                 alt={title}
//                 className="h-48 w-48 md:h-[200px] md:w-[200px] mx-auto rounded-lg cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out object-fill shadow-md shadow-black/50"
//                 onClick={openModal}
//               />
//             </div>
//           ))}

//         </div>

//         {/* Certificate Description */}
//         <div className=" w-fit text-left border border-red-500">
//           <h2 className="text-[30px] font-[600] text-[#312865] mb-2">{title}</h2>
//           <p className="font-raleway text-[15px] font-[400] text-justify mb-4">{description}</p>
//           <p className="font-raleway text-[12px] font-[400] text-justify text-gray-600">{additionalInfo}</p>
//           {/* <hr className="border-t w-full my-4" /> */}
//         </div>
//       </div>

//       {/* Modal for Image */}
//       <ImageModal isOpen={isModalOpen} onClose={closeModal} imgPath={imgPath} />
//     </>
//   );
// };

// const CertificationsList = () => {
//   return (
//     <div>
//       <NavBar></NavBar>
//       <div className="certifications-list max-w-6xl mx-auto p-8 pt-[8%]  border-green-500 flex flex-col justify-center gap-5">
//         <div className="w-full sticky top-[8%] z-10 bg-white  border-green-500 flex justify-center">
//           <span className="font-[600] text-[40px] text-center w-fit border-red-200 mx-auto font-raleway text-transparent bg-clip-text bg-gradient-to-r from-[#0A173B] to-[#0025FF] sm:text-[40px] lg:text-[52px] xl:text-[62px] mt-[1%]">
//             Recognitions
//           </span>
//         </div>
//         {certificates.map((cert, index) => (
//           <Certificate
//             key={index}
//             title={cert.title}
//             description={cert.description}
//             additionalInfo={cert.additionalInfo}
//             imgPath={cert.imgPath}
//           />
//         ))}
//       </div>
//       <Footer></Footer>
//     </div>
//   );
// };

// export default CertificationsList;



// import React, { useState } from "react";
// import bgImage1 from '../assets/bg1.jpg';
// import bgImage2 from '../assets/bg2.jpg';
// import bgImage3 from '../assets/bg3.jpg';
// import img1 from '../assets/ISO CERTIFICATE PD STEELS_page-0001.jpg';
// import img2 from '../assets/ISO CERTIFICATE RINE ENGINEERING_page-0001.jpg';
// import img3 from '../assets/CLASS A FOUNDRY AUDIT RINE 16.12.22_page-0001.jpg';
// import img4 from '../assets/Jai Multi Class A Foundry Certificate_page-0002.jpg';
// import img5 from '../assets/JAI MULTI ISO CERTIFICATE_page-0001.jpg';
// import NavBar from "./NavBar";
// import Footer from "./Footer";

// const certificates = [
//   {
//     title: "ISO Certificates",
//     description: ``,
//     additionalInfo: ``,
//     imgPath: [img1, img2, img5],
//   },
//   {
//     title: "Class A Foundry Certificates",
//     description: ``,
//     additionalInfo: ``,
//     imgPath: [img3, img4],
//   },
// ];

// // Modal Component
// const ImageModal = ({ isOpen, onClose, imgPath }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50">
//       <div className="bg-gray-500 bg-opacity-45 backdrop-filter backdrop-blur-md fixed top-0 left-0 right-0 bottom-0" onClick={onClose}></div>
//       <div className="relative z-10  border-red-700">
//         <img src={imgPath} alt="Certificate" className="w-[600px] h-[700px] object-contain rounded-lg" />
//         <button
//           className="absolute top-0 right-2 text-black text-3xl font-bold hover:text-gray-100  border-green-500"
//           onClick={onClose}
//         >
//           &times;
//         </button>
//       </div>
//     </div>
//   );
// };

// const Certificate = ({ title, description, additionalInfo, imgPath }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedImg, setSelectedImg] = useState(null);

//   const openModal = (img) => {
//     setSelectedImg(img);
//     setIsModalOpen(true);
//   };
//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <>
//       <div className="certificate-container flex flex-col-reverse justify-center items-center shadow-xl p-6 rounded-sm  hover:shadow-2xl transition-shadow duration-300 ease-in-out mb-0 gap-[50px] w-full bg-black bg-cover bg-fixed"
//         style={{
//           backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%25%27 height=%27100%25%27 viewBox=%270 0 1600 800%27%3E%3Cg %3E%3Cpolygon fill=%27%2302050c%27 points=%271600 160 0 460 0 350 1600 50%27/%3E%3Cpolygon fill=%27%23040918%27 points=%271600 260 0 560 0 450 1600 150%27/%3E%3Cpolygon fill=%27%23060e23%27 points=%271600 360 0 660 0 550 1600 250%27/%3E%3Cpolygon fill=%27%2308122f%27 points=%271600 460 0 760 0 650 1600 350%27/%3E%3Cpolygon fill=%27%230A173B%27 points=%271600 800 0 800 0 750 1600 450%27/%3E%3C/g%3E%3C/svg%3E')"
//         }}>
//         {/* Certificate Image */}
//         <div className=" w-fit flex gap-[10%] h-fit mb-4 md:mb-0  border-red-500">
//           {imgPath?.map((item, index) => (
//             <div key={index}>
//               <img
//                 src={item}
//                 alt={title}
//                 className="h-48  w-48 md:h-[200px] md:w-[200px] mx-auto rounded-lg cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out object-fill shadow-md shadow-black/50"
//                 onClick={() => openModal(item)}
//               />
//             </div>
//           ))}
//         </div>

//         {/* Certificate Description */}
//         <div className=" w-fit text-left  border-red-500 font-raleway">
//           <h2 className="text-[30px] font-[600] text-white mb-2 ">{title}</h2>
//           <p className="font-raleway text-[15px] font-[400] text-justify mb-4">{description}</p>
//           <p className="font-raleway text-[12px] font-[400] text-justify text-gray-600">{additionalInfo}</p>
//         </div>
//       </div>

//       {/* Modal for Image */}
//       <ImageModal isOpen={isModalOpen} onClose={closeModal} imgPath={selectedImg} />
//     </>
//   );
// };

// const CertificationsList = () => {
//   return (
//     <div>
//       <NavBar></NavBar>
//       <div className="certifications-list max-w-6xl mx-auto p-8 pt-[8%] xl:pt-[5%]  border-green-500 flex flex-col justify-center gap-0">
//         {/* <div className="w-full sticky top-[8%] z-10   border-green-500 flex justify-center font-raleway  xl:mb-[2%] backdrop-blur-md">
//           <span className="font-[600] text-[40px] text-center w-fit  border-red-200 mx-auto font-raleway text-transparent bg-clip-text bg-gradient-to-r from-[#0A173B] to-[#0025FF] sm:text-[40px] lg:text-[52px] xl:text-[62px] ">
//             Recognitions
//           </span>
//         </div> */}
//         {certificates.map((cert, index) => (
//           <Certificate
//             key={index}
//             title={cert.title}
//             description={cert.description}
//             additionalInfo={cert.additionalInfo}
//             imgPath={cert.imgPath}
//           />
//         ))}
//       </div>
//       <Footer></Footer>
//     </div>
//   );
// };

// export default CertificationsList;









import React, { useState } from "react";
import bgImage1 from '../assets/bg1.jpg';
import bgImage2 from '../assets/bg2.jpg';
import bgImage3 from '../assets/bg3.jpg';
import img1 from '../assets/ISO CERTIFICATE PD STEELS_page-0001.jpg';
import img2 from '../assets/ISO CERTIFICATE RINE ENGINEERING_page-0001.jpg';
import img3 from '../assets/CLASS A FOUNDRY AUDIT RINE 16.12.22_page-0001.jpg';
import img4 from '../assets/Jai Multi Class A Foundry Certificate_page-0002.jpg';
import img5 from '../assets/JAI MULTI ISO CERTIFICATE_page-0001.jpg';
import NavBar from "./NavBar";
import Footer from "./Footer";

// Certificates Data
const certificates = [
  {
    title: "ISO Certificates",
    description: "",
    additionalInfo: "",
    imgPath: [img1, img2, img5],
  },
  {
    title: "Class A Foundry Certificates",
    description: "",
    additionalInfo: "",
    imgPath: [img3, img4],
  },
];

// Modal Component
const ImageModal = ({ isOpen, onClose, imgPath }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50">
      <div className="bg-gray-500 bg-opacity-45 backdrop-filter backdrop-blur-md fixed top-0 left-0 right-0 bottom-0" onClick={onClose}></div>
      <div className="relative z-10">
        <img src={imgPath} alt="Certificate" className="w-[600px] h-[700px] object-contain rounded-lg" />
        <button
          className="absolute top-0 right-2 text-black text-3xl font-bold hover:text-gray-100"
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
  const [selectedImg, setSelectedImg] = useState(null);

  const openModal = (img) => {
    setSelectedImg(img);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="certificate-container flex flex-col-reverse justify-center items-center shadow-xl p-6 py-[5%] rounded-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out mb-0 gap-[50px] w-full bg-black bg-cover bg-fixed"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%25%27 height=%27100%25%27 viewBox=%270 0 1600 800%27%3E%3Cg %3E%3Cpolygon fill=%27%2302050c%27 points=%271600 160 0 460 0 350 1600 50%27/%3E%3Cpolygon fill=%27%23040918%27 points=%271600 260 0 560 0 450 1600 150%27/%3E%3Cpolygon fill=%27%23060e23%27 points=%271600 360 0 660 0 550 1600 250%27/%3E%3Cpolygon fill=%27%2308122f%27 points=%271600 460 0 760 0 650 1600 350%27/%3E%3Cpolygon fill=%27%230A173B%27 points=%271600 800 0 800 0 750 1600 450%27/%3E%3C/g%3E%3C/svg%3E')"
        }}
      >
        <div className="w-fit flex flex-col gap-[50px] md:flex-row md:gap-[10%] h-fit mb-4 md:mb-0">
          {imgPath.map((item, index) => (
            <div key={index}>
              <img
                src={item}
                alt={title}
                className="h-52 w-40 md:h-[300px] md:w-[300px] mx-auto rounded-lg cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out object-fill shadow-md shadow-black/50"
                onClick={() => openModal(item)}
              />
            </div>
          ))}
        </div>
        <div className="w-fit text-left font-raleway">
          <h2 className="text-[35px] font-[600] text-white">{title}</h2>
          <p className="font-raleway text-[15px] font-[400] text-justify mb-4">{description}</p>
          <p className="font-raleway text-[12px] font-[400] text-justify text-gray-600">{additionalInfo}</p>
        </div>
      </div>
      <ImageModal isOpen={isModalOpen} onClose={closeModal} imgPath={selectedImg} />
    </>
  );
};

const CertificationsList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === certificates.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? certificates.length - 1 : prevIndex - 1));
  };

  return (
    <div>
      <NavBar />
      <div className="w-full h-[100px]  border-green-500"></div>
      <div className="certifications-list max-w-6xl mx-auto p-8 pt-[8%] xl:pt-[1%] flex flex-col justify-center gap-0  border-red-500 mb-3">
        <Certificate
          title={certificates[currentIndex].title}
          description={certificates[currentIndex].description}
          additionalInfo={certificates[currentIndex].additionalInfo}
          imgPath={certificates[currentIndex].imgPath}
        />
        <div className="flex justify-between mt-9">
          <button
            onClick={handlePrevious}
            className="bg-[#111827] text-white py-3 px-7 rounded-lg shadow-lg hover:bg-gray-800 text-lg"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="bg-[#111827] text-white py-3 px-9 rounded-lg shadow-lg hover:bg-gray-800 text-lg"
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CertificationsList;
