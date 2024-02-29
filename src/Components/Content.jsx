// Import the Cards component if it's in a separate file

const Content = () => {
  return (
    <div className="max-w-full py-[24px] px-[16px] md:px-[50px] md:py-[50px]">
      <div className="flex items-start justify-between mb-[20px]">
        <div>
          <p className="">1234 Cleaners available in your location</p>
        </div>
        <div className="w-117 h-[48px] gap-8 rounded-8 flex border-1 px-16">
          <img src="2.png" className="h-6 w-6" alt="Filter Icon" />
          <p>Filter</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
