// import React from 'react';

// function Clientage() {
//   let data = [{
//     path: "/png/bescoUpd.jpg"
//   },
//   {
//     path: "/png/Brathwaite.png"
//   },
//   {
//     path: "/png/download.png"
//   },
//   {
//     path: "/png/JindalRail.gif"
//   },
//   {
//     path: "/png/jupiterUpd.jpg"
//   },
//   {
//     path: "/png/bemlUpd.jpg"
//   },
//   {
//     path: "/png/indRailUpd.jpg"
//   },
//   {
//     path: "/png/titagarhUpd.svg"
//   }
//   ]
//   return (
//     <div className="w-full flex flex-col bg-white gap-10 mt-[10%] pt-[2%]">
//       <span className="font-[600] text-[40px] text-center w-fit bg-white  border-red-200 mx-auto font-raleway text-transparent bg-clip-text bg-gradient-to-r from-[#0A173B] to-[#0025FF] sm:text-[40px] lg:text-[52px] xl:text-[62px]">
//         Our Clientage
//       </span>
//       <div className="w-[70%] flex flex-wrap justify-between rounded-sm border-red-300 bg-gray-200 mx-auto gap-6 px-[7%] py-12">

//         {
//           data?.map((item) => (
//             <div className=" border-green-500 w-[240px] px-3 py-2 rounded-sm shadow-lg bg-white">
//               <img className=" border-green-600 h-16 w-auto mx-auto " src={item.path} alt="BESCO" />
//             </div>
//           ))
//         }

//       </div>
//     </div>
//   );
// }

// export default Clientage;


import React from 'react';

function Clientage() {
  let data = [
    { path: "/png/bescoUpd.jpg" },
    { path: "/png/Brathwaite.png" },
    { path: "/png/download.png" },
    { path: "/png/JindalRail.gif" },
    { path: "/png/jupiterUpd.jpg" },
    { path: "/png/bemlUpd.jpg" },
    { path: "/png/indRailUpd.jpg" },
    { path: "/png/titagarhUpd.svg" }
  ];

  return (
    <div className="w-full flex flex-col bg-white gap-10 mt-[10%] pt-[2%]">
      <span className="font-[600] text-[40px] text-center w-fit bg-white border-red-200 mx-auto font-raleway text-transparent bg-clip-text bg-gradient-to-r from-[#0A173B] to-[#0025FF] sm:text-[40px] lg:text-[52px] xl:text-[62px]">
        Our Clientage
      </span>
      <div className="w-[90%] md:w-[80%] lg:w-[70%] flex flex-wrap justify-center md:justify-between rounded-sm border-red-300 bg-gray-200 mx-auto gap-6 px-6 md:px-[7%] py-12">

        {data?.map((item, index) => (
          <div key={index} className=" border-green-500 w-full sm:w-[180px] md:w-[200px] lg:w-[240px] px-3 py-2 rounded-sm shadow-lg bg-white">
            <img className=" border-green-600 h-16 w-auto mx-auto" src={item.path} alt="Client logo" />
          </div>
        ))}

      </div>
    </div>
  );
}

export default Clientage;
