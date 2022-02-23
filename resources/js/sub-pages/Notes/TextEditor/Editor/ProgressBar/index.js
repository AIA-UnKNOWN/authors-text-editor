const ProgressBar = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center py-3">
      <span className="order-3 font-medium lg:order-1 hidden lg:inline">Words</span>

      <div className="order-2 w-full lg:w-[300px] h-[15px] rounded-full overflow-hidden shadow-inner lg:mx-4">
        <div className="w-1/2 h-full bg-gradient-to-b from-light-pink to-pink"></div>
      </div>

      <div className="order-1 lg:order-3 mb-3 lg:mb-0">
        <span className="font-bold text-[18px]">1000 </span>
        <span className="text-dark-gray text-[15px]">/ 2000</span>
      </div>
    </div>
  );
}

export default ProgressBar;