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
    <div className="flex flex-col bg-white gap-5 mt-[10%]">
      <span className="font-[600] text-[40px] text-center w-fit border-red-200 mx-auto font-raleway text-transparent bg-clip-text bg-gradient-to-r from-[#0A173B] to-[#0025FF] sm:text-[40px] lg:text-[52px] xl:text-[62px]">
        Our Clientage
      </span>
      <div className="w-[100%] md:w-[100%] lg:w-[100%] flex flex-wrap justify-center md:justify-between rounded-sm border-red-300 bg-gray-200 mx-auto gap-6 py-5">
        <div className="w-full overflow-hidden text-center bg-gradient-to-r from-[#0A173B]/85 to-[#0025FF]/80 py-4">
          {/* Scrolling container */}
          <div className="flex items-center justify-start w-max animate-marquee">
            {/* Logo list - First loop */}
            <ul className="flex items-center">
              <li className="mx-5  border-green-500 w-[200px] bg-white flex justify-center py-1  px-2 rounded-[3px] drop-shadow shadow-black">
                <img className="h-16 w-auto drop-shadow-md" src="/png/bescoUpd.jpg" alt="BESCO" />
              </li>
              <li className="mx-5  border-green-500 w-[200px] bg-white flex justify-center py-1  px-2 rounded-[3px] drop-shadow shadow-black">
                <img className="h-16 w-auto drop-shadow-md" src="/png/Brathwaite.png" alt="Brathwaite" />
              </li>
              <li className="mx-5 border-green-500 w-[200px] bg-white flex justify-center py-1  px-2 rounded-[3px] drop-shadow shadow-black">
                <img className="h-16 w-auto drop-shadow-md" src="/png/download.png" alt="Download" />
              </li>
              <li className="mx-5 border-green-500 w-[200px] bg-white flex justify-center py-1  px-2 rounded-[3px] drop-shadow shadow-black">
                <img className="h-16 w-auto drop-shadow-md" src="/png/JindalRail.gif" alt="Jindal Rail" />
              </li>
              <li className="mx-5 border-green-500 w-[200px] bg-white flex justify-center py-1  px-2 rounded-[3px] drop-shadow shadow-black">
                <img className="h-16 w-auto drop-shadow-md" src="/png/jupiterUpd.jpg" alt="Jupiter Wagons" />
              </li>
              <li className="mx-5 border-green-500 w-[200px] bg-white flex justify-center py-1  px-2 rounded-[3px] drop-shadow shadow-black">
                <img className="h-16 w-auto drop-shadow-md" src="/png/bemlUpd.jpg" alt="BEML" />
              </li>
              <li className="mx-5 border-green-500 w-[200px] bg-white flex justify-center py-1  px-2 rounded-[3px] drop-shadow shadow-black">
                <img className="h-16 w-auto drop-shadow-md" src="/png/indRailUpd.jpg" alt="Main logo" />
              </li>
              <li className="mx-5 border-green-500 w-[200px] bg-white flex justify-center py-1  px-2 rounded-[3px] drop-shadow shadow-black">
                <img className="h-16 w-auto drop-shadow-md" src="/png/titagarhUpd.svg" alt="Titagarh" />
              </li>
            </ul>
            {/* Client logos */}
            {/* {data?.map((item, index) => (
              <div key={index} className="border-green-500 w-full sm:w-[180px] md:w-[200px] lg:w-[240px] px-3 py-2 rounded-sm shadow-lg bg-white">
                <img className="border border-green-600 h-16 w-auto mx-auto bg-white" src={item.path} alt="Client logo" />
              </div>
            ))} */}

            {/* Logo list - Duplicate for seamless looping */}
            <ul className="flex items-center">
              <li className="mx-5 border-green-500 w-[200px] bg-white flex justify-center py-1  px-2 rounded-[3px] drop-shadow shadow-black">
                <img className="h-16 w-auto drop-shadow-md" src="/png/bescoUpd.jpg" alt="BESCO" />
              </li>
              <li className="mx-5 border-green-500 w-[200px] bg-white flex justify-center py-1  px-2 rounded-[3px] drop-shadow shadow-black">
                <img className="h-16 w-auto drop-shadow-md" src="/png/Brathwaite.png" alt="Brathwaite" />
              </li>
              <li className="mx-5 border-green-500 w-[200px] bg-white flex justify-center py-1  px-2 rounded-[3px] drop-shadow shadow-black">
                <img className="h-16 w-auto drop-shadow-md" src="/png/download.png" alt="Download" />
              </li>
              <li className="mx-5 border-green-500 w-[200px] bg-white flex justify-center py-1  px-2 rounded-[3px] drop-shadow shadow-black">
                <img className="h-16 w-auto drop-shadow-md" src="/png/JindalRail.gif" alt="Jindal Rail" />
              </li>
              <li className="mx-5 border-green-500 w-[200px] bg-white flex justify-center py-1  px-2 rounded-[3px] drop-shadow shadow-black">
                <img className="h-16 w-auto drop-shadow-md" src="/png/jupiterUpd.jpg" alt="Jupiter Wagons" />
              </li>
              <li className="mx-5 border-green-500 w-[200px] bg-white flex justify-center py-1  px-2 rounded-[3px] drop-shadow shadow-black">
                <img className="h-16 w-auto drop-shadow-md" src="/png/bemlUpd.jpg" alt="BEML" />
              </li>
              <li className="mx-5 border-green-500 w-[200px] bg-white flex justify-center py-1  px-2 rounded-[3px] drop-shadow shadow-black">
                <img className="h-16 w-auto drop-shadow-md" src="/png/indRailUpd.jpg" alt="Main logo" />
              </li>
              <li className="mx-5 border-green-500 w-[200px] bg-white flex justify-center py-1 drop-shadow-md px-2 rounded-[3px]">
                <img className="h-16 w-auto drop-shadow-md" src="/png/titagarhUpd.svg" alt="Titagarh" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clientage;



          {/* import React from 'react';

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
    <div className="w-full flex flex-col bg-white gap-10 mt-[2%] pt-[2%]">
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
*/}
