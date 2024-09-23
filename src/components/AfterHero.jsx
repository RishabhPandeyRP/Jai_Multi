
const AfterHero = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col gap-4 bg-white ">
        {/* Adjust the width, text size, and margins for different screen sizes */}
        <div className="w-[44%] sm:w-[37%] md:w-[30%] lg:w-[250px] mx-auto font-inter font-normal text-[13px] sm:text-[14px] md:text-[13px] lg:text-[14px] text-[#212529] text-center flex flex-col relative   border-green-400">
          <span className="bg-white   border-red-500 z-20">
            Manufacturing High Quality Goods
          </span>
          <div className="w-[150%] sm:w-[130%] lg:w-[200%] h-[10%] bg-black/70 absolute top-[44%] sm:top-[48%] lg:top-[44%] -left-[25%] sm:-left-[16%] lg:-left-[50%] border-green-500 rounded-[100px] sm:rounded-[90%] z-10 hidden md:block"></div>
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
