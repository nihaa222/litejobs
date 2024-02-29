import { FaStar } from "react-icons/fa6";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

const myArray = [
  {
    id: 1,
    photo: "male.png",
    title: "Josh Glover",
    des: "Josh is a professional cleaning service that provides high-quality cleaning services and business in Kent..",
    price: "$89/",
    rate: 4.2,
  },
  {
    id: 2,
    photo: "female2.png",
    title: "Some Other Title",
    des: "Josh is a professional cleaning service that provides high-quality cleaning services and business in Kent",
    price: "$89/",
    rate: 4.2,
  },
  {
    id: 3,
    photo: "male.png",
    title: "Josh Glover",
    des: "Josh is a professional cleaning service that provides high-quality cleaning services and business in Kent",
    price: "$89/",
    rate: 4.2,
  },
  {
    id: 4,
    photo: "female2.png",
    title: "Some Other Title",
    des: "Josh is a professional cleaning service that provides high-quality cleaning services and business in Kent",
    price: "$89/",
    rate: 4.2,
  },
  {
    id: 5,
    photo: "male.png",
    title: "Josh Glover",
    des: "Josh is a professional cleaning service that provides high-quality cleaning services and business in Kent",
    price: "$89/",
    rate: 4.2,
  },
  {
    id: 6,
    photo: "female2.png",
    title: "Some Other Title",
    des: "Josh is a professional cleaning service that provides high-quality cleaning services and business in Kent",
    price: "$89/",
    rate: 4.2,
  },
  {
    id: 7,
    photo: "male.png",
    title: "Josh Glover",
    des: "Josh is a professional cleaning service that provides high-quality cleaning services and business in Kent",
    price: "$89/",
    rate: 4.2,
  },
  {
    id: 8,
    photo: "female2.png",
    title: "Some Other Title",
    des: "Josh is a professional cleaning service that provides high-quality cleaning services and business in Kent",
    price: "$89/",
    rate: 4.2,
  },
  {
    id: 9,
    photo: "male.png",
    title: "Josh Glover",
    des: "Josh is a professional cleaning service that provides high-quality cleaning services and business in Kent",
    price: "$89/",
    rate: 4.2,
  },
  {
    id: 10,
    photo: "female2.png",
    title: "Some Other Title",
    des: "Josh is a professional cleaning service that provides high-quality cleaning services and business in Kent",
    price: "$89/",
    rate: 4.2,
  },
  {
    id: 9,
    photo: "male.png",
    title: "Josh Glover",
    des: "Josh is a professional cleaning service that provides high-quality cleaning services and business in Kent",
    price: "$89/",
    rate: 4.2,
  },
  {
    id: 10,
    photo: "female2.png",
    title: "Some Other Title",
    des: "Josh is a professional cleaning service that provides high-quality cleaning services and business in Kent",
    price: "$89/",
    rate: 4.2,
  },
];

const Cards = () => {
  return (
    <>
      <div className="flex gap-16  flex-wrap px-[16px]  md:px-[50px]">
        {myArray.map((item) => (
          <div
            key={item.id}
            className="w-[396px]  rounded-[20px] mx-auto md:mx-0 "
          >
            <img src={item.photo}></img>
            <div className="flex">
              <p className="w-[396px] text-[18px] font-bold  mb-5">
                {item.title}
              </p>
              <p className="mr-3">{item.rate}</p>
              <FaStar />
            </div>
            <p className="">{item.des}</p>
            <div className="flex justify-between mt-5">
              <p className="text-[18px] font-bold">{item.price}</p>
              <button className="bg-[#037783] text-white rounded-[8px] py-[12px] px-[20px]">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className=" flex justify-between">
        <div className="px-[16px] pt-[80px] gap-1 pb-[20px]  md:px-[50px] flex items-center">
          <FaLongArrowAltLeft />
          Previous
        </div>
        <div className="px-[16px] pt-[80px]  gap-1 pb-[20px] md:px-[50px] flex items-center">
          Next
          <FaLongArrowAltRight />
        </div>
      </div>
    </>
  );
};

export default Cards;
