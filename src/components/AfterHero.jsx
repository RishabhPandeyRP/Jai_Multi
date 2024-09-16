
const AfterHero = () => {
    return (
      <div className="bg-white">
        <div className="flex flex-col gap-4 bg-white">
          {/* Adjust the width, text size, and margins for different screen sizes */}
          <div className="w-[90%] sm:w-[75%] lg:w-[235px] mx-auto font-inter font-normal text-[16px] sm:text-[18px] lg:text-[14px] text-[#212529] text-center">
            Manufacturing High Quality Goods
          </div>
          <div className="w-[90%] sm:w-[75%] lg:w-[760px]  border-blue-800 mx-auto font-raleway font-semibold text-[32px] sm:text-[40px] lg:text-[48px] text-[#0A173B] text-center">
            Crafting Critical Casting Products
          </div>
        </div>
        {/* Adjust height and width for responsiveness */}
        <div className="w-[90%] h-[400px] sm:h-[600px] lg:h-[800px]  border-blue-900 mx-auto">
          {/* Content inside this container */}
        </div>
      </div>
    );
  };
  
  export default AfterHero;
  