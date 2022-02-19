import { FaBook, FaPen, FaTrashAlt } from 'react-icons/fa';

const Collection = ({ data }) => {
  return (
    <div className="border border-dark-gray rounded-md px-4 mb-2">
      <div className="min-h-[100px] py-2 flex justify-center items-center">
        <span className="text-[20px] text-center">
          {data.title}
        </span>
      </div>

      <div className="flex justify-between items-center border-t border-dark-gray h-[40px]">
        <div className="flex items-center">
          <div
            className="text-dark-gray flex items-center"
          >
            <FaBook />
            <span className="ml-1 text-[13px]">0</span>
          </div>
        </div>
        <div className="flex items-center">
          <button
            className="text-dark-gray flex items-center"
          >
            <FaPen />
            <span className="ml-1 text-[10px]">Edit</span>
          </button>
          <button
            className="text-dark-gray flex items-center ml-4"
          >
            <FaTrashAlt />
            <span className="ml-1 text-[10px]">Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Collection;