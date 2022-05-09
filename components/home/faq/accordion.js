import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";

const AccordionLayout = ({
  title,
  children,
  index,
  activeIndex,
  setActiveIndex,
}) => {
  const handleSetIndex = (index) =>
    activeIndex === index ? setActiveIndex(null) : setActiveIndex(index);

  return (
    <div className="w-full px-10 mx-auto lg:px-0 ">
      <button
        onClick={() => handleSetIndex(index)}
        className={`${
          index === 2 ? "border-0" : "border-t"
        } w-full  overflow-hidden  py-[1.3em] flex flex-col justify-between   mt-2 bg-transparent  border-black-4 `}
      >
        <div className="flex items-center justify-between w-full">
          <div className="text-xl font-medium text-white lg:text-2xl hover:light-grey">
            {title}
          </div>
          <div className="flex justify-start space-y-10 transition-all duration-500 ease-in-out items-between text-mid-grey ">
            <AiOutlineDown
              size={24}
              className={`${
                activeIndex === index && "   scale-y-[-1]"
              } test transition-all duration-500 easein-out text-dark-grey font-semibold `}
            />
          </div>
        </div>

        <div
          className={`${
            activeIndex !== index ? "  max-h-0 overflow-hidden " : "max-h-40 "
          }  transition-all duration-500  ease-in-out text-left relative z-1 text-light-grey`}
        >
          <div className="py-5 lg:text-lg">{children}</div>
        </div>
      </button>
    </div>
  );
};

export default AccordionLayout;
