// import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs'

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
    <div className="w-full mx-auto ">
      <button
        onClick={() => handleSetIndex(index)}
        className="py-[1em] flex flex-col justify-between w-full px-10 mt-2 bg-transparent border-b border-mid-grey"
      >
        <div className="flex">
          <div className="text-2xl font-semibold text-black hover:text-black-2">
            {title}
          </div>
        </div>
        <div className="flex justify-start space-y-10 items-between">
          {/* {
                (activeIndex === index) 
                ? <BsFillArrowDownCircleFill className='w-8 h-8' />
                : <BsFillArrowUpCircleFill className='w-8 h-8' />
                } */}
        </div>
        {activeIndex === index && (
          <div className="py-3 text-left ">{children}</div>
        )}
      </button>
    </div>
  );
};

export default AccordionLayout;
