import { IoMdSearch } from "react-icons/io";

const Header = () => {
  return (
    <div className="md:h-[476px] h-[534px] w-full bg-[#0B3E7B] pt-[40px] pb-[80px]">
      <div className="flex justify-between px-[16px] md:px-[80px]">
        <div className="text-white">LiteJob</div>
        <div className="flex gap-[8px]">
          <button className="w-[89px] rounded-[8px] h-[40px] text-white border-[1px] py-[8px] px-[20px]">
            Signin
          </button>
          <button className="w-[89px]  rounded-[8px] h-[40px] py-[8px] px-[20px] text-white bg-[#037783]">
            Signup
          </button>
        </div>
      </div>
      <div>
        <p className="text-white w-[428px] mx-auto md:w-[800px] md:h-[204px] h-[278px] font-bold text-[48px] mt-[60px] md:mt-[100px] leading-[54px] text-center">
          Top Businesses and Professionals Ready to Help
        </p>
        <div className=" w-[428px] flex justify-center md:w-[800px] mx-auto">
          <input
            className="w-[117px] h-[60px] rounded-tl-[16px] rounded-bl-[16px] py-[16px] px-[20px] border-[1px]"
            placeholder="Your City"
          ></input>
          <input
            placeholder="Profession"
            className="w-[117px] h-[60px] px-[20px] py-[16px] md:w-[319px] "
          ></input>
          <div className="w-[138px] bg-white   h-[60px] rounded-tr-[16px]  rounded-br-[16px]">
            <button className=" text-white mt-2 ml-2  w-[122px] h-[44px] gap-2 flex items-center rounded-[10px] px-[20px] py-[10px]  bg-[#037783]">
              <IoMdSearch className="text-white" />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
