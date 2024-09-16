// import React from 'react';

// function Clientage() {
//   return (
//     <div className='flex flex-col bg-white gap-5 mt-[10%]'>
      
//       <span className="font-[600] text-[40px] text-center w-fit border  border-red-200 mx-auto font-raleway text-transparent bg-clip-text bg-gradient-to-r from-[#0A173B] to-[#0025FF]            sm:text-[40px] lg:text-[52px] xl:text-[62px]  ">
//         Our Client Age
//       </span>
//       <div className="w-full overflow-hidden text-center bg-[#b8b8b8] py-4">

//         <div className="flex items-center justify-start w-max">
//           {/* Logo list - First loop */}
//           <ul className="flex items-center">
//             <li className="mx-8">
//               <img className="h-16 w-auto drop-shadow-md" src="/png/besco.png" alt="BESCO" />
//             </li>
//             <li className="mx-8">
//               <img className="h-16 w-auto drop-shadow-md" src="/png/Brathwaite.png" alt="Brathwaite" />
//             </li>
//             <li className="mx-8">
//               <img className="h-16 w-auto drop-shadow-md" src="/png/download.png" alt="Download" />
//             </li>
//             <li className="mx-8">
//               <img className="h-16 w-auto drop-shadow-md" src="/png/JindalRail.gif" alt="Jindal Rail" />
//             </li>
//             <li className="mx-8">
//               <img className="h-16 w-auto drop-shadow-md" src="/png/jupiter_wagons.png" alt="Jupter Wagons" />
//             </li>
//             <li className="mx-8">
//               <img className="h-16 w-auto drop-shadow-md" src="/png/logo_beml.png" alt="BEML" />
//             </li>
//             <li className="mx-8">
//               <img className="h-16 w-auto drop-shadow-md" src="/png/main_logo.png" alt="Main logo" />
//             </li>
//             <li className="mx-8">
//               <img className="h-16 w-auto drop-shadow-md" src="/png/titagarh.png" alt="Titagarh" />
//             </li>
//           </ul>
//           {/* Logo list - Second loop (duplicate for continuous scroll) */}
//           <ul className="flex items-center">
//             <li className="mx-8">
//               <img className="h-16 w-auto drop-shadow-md" src="/png/besco.png" alt="BESCO" />
//             </li>
//             <li className="mx-8">
//               <img className="h-16 w-auto drop-shadow-md" src="/png/Brathwaite.png" alt="Brathwaite" />
//             </li>
//             <li className="mx-8">
//               <img className="h-16 w-auto drop-shadow-md" src="/png/download.png" alt="Download" />
//             </li>
//             <li className="mx-8">
//               <img className="h-16 w-auto drop-shadow-md" src="/png/JindalRail.gif" alt="Jindal Rail" />
//             </li>
//             <li className="mx-8">
//               <img className="h-16 w-auto drop-shadow-md" src="/png/jupiter_wagons.png" alt="Jupter Wagons" />
//             </li>
//             <li className="mx-8">
//               <img className="h-16 w-auto drop-shadow-md" src="/png/logo_beml.png" alt="BEML" />
//             </li>
//             <li className="mx-8">
//               <img className="h-16 w-auto drop-shadow-md" src="/png/main_logo.png" alt="Main logo" />
//             </li>
//             <li className="mx-8">
//               <img className="h-16 w-auto drop-shadow-md" src="/png/titagarh.png" alt="Titagarh" />
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Clientage;




import React from 'react';

function Clientage() {
  return (
    <div className="flex flex-col bg-white gap-5 mt-[10%]">
      <span className="font-[600] text-[40px] text-center w-fit  border-red-200 mx-auto font-raleway text-transparent bg-clip-text bg-gradient-to-r from-[#0A173B] to-[#0025FF] sm:text-[40px] lg:text-[52px] xl:text-[62px]">
        Our Client Age
      </span>

      <div className="w-full overflow-hidden text-center bg-gradient-to-r from-[#0A173B]/85 to-[#0025FF]/80 py-4">
        {/* Scrolling container */}
        <div className="flex items-center justify-start w-max animate-marquee">
          {/* Logo list - First loop */}
          <ul className="flex items-center">
            <li className="mx-8">
              <img className="h-16 w-auto drop-shadow-md" src="/png/besco.png" alt="BESCO" />
            </li>
            <li className="mx-8">
              <img className="h-16 w-auto drop-shadow-md" src="/png/Brathwaite.png" alt="Brathwaite" />
            </li>
            <li className="mx-8">
              <img className="h-16 w-auto drop-shadow-md" src="/png/download.png" alt="Download" />
            </li>
            <li className="mx-8">
              <img className="h-16 w-auto drop-shadow-md" src="/png/JindalRail.gif" alt="Jindal Rail" />
            </li>
            <li className="mx-8">
              <img className="h-16 w-auto drop-shadow-md" src="/png/jupiter_wagons.png" alt="Jupter Wagons" />
            </li>
            <li className="mx-8">
              <img className="h-16 w-auto drop-shadow-md" src="/png/logo_beml.png" alt="BEML" />
            </li>
            <li className="mx-8">
              <img className="h-16 w-auto drop-shadow-md" src="/png/main_logo.png" alt="Main logo" />
            </li>
            <li className="mx-8">
              <img className="h-16 w-auto drop-shadow-md" src="/png/titagarh.png" alt="Titagarh" />
            </li>
          </ul>

          {/* Logo list - Duplicate for seamless looping */}
          <ul className="flex items-center">
            <li className="mx-8">
              <img className="h-16 w-auto drop-shadow-md" src="/png/besco.png" alt="BESCO" />
            </li>
            <li className="mx-8">
              <img className="h-16 w-auto drop-shadow-md" src="/png/Brathwaite.png" alt="Brathwaite" />
            </li>
            <li className="mx-8">
              <img className="h-16 w-auto drop-shadow-md" src="/png/download.png" alt="Download" />
            </li>
            <li className="mx-8">
              <img className="h-16 w-auto drop-shadow-md" src="/png/JindalRail.gif" alt="Jindal Rail" />
            </li>
            <li className="mx-8">
              <img className="h-16 w-auto drop-shadow-md" src="/png/jupiter_wagons.png" alt="Jupter Wagons" />
            </li>
            <li className="mx-8">
              <img className="h-16 w-auto drop-shadow-md" src="/png/logo_beml.png" alt="BEML" />
            </li>
            <li className="mx-8">
              <img className="h-16 w-auto drop-shadow-md" src="/png/main_logo.png" alt="Main logo" />
            </li>
            <li className="mx-8">
              <img className="h-16 w-auto drop-shadow-md" src="/png/titagarh.png" alt="Titagarh" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Clientage;
