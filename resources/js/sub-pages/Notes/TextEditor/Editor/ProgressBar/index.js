const ProgressBar = () => {
  return (
    <div className="flex flex-col items-center py-3">
      <span className="order-3 hidden lg:inline">Words</span>

      <div className="order-2 w-full h-[15px] rounded-full overflow-hidden shadow-inner">
        <div className="w-1/2 h-full bg-gradient-to-b from-light-pink to-pink"></div>
      </div>

      <div className="order-1 mb-3">
        <span className="font-bold text-[18px]">1000 </span>
        <span className="text-dark-gray text-[15px]">/ 2000</span>
      </div>
    </div>
  );
}

export default ProgressBar;