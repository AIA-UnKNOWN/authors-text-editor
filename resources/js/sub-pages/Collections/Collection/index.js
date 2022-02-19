import { FaBook, FaPen, FaTrashAlt } from 'react-icons/fa';
import useCollection from './hook';

const Collection = ({ data }) => {
  const { title, handleTitleChange, editModeDisable, setEditModeDisable, save, remove, buttonText } = useCollection(data);

  return (
    <div className="border border-dark-gray rounded-md px-4 mb-2">
      <div className="min-h-[100px] py-2 flex flex-wrap justify-center items-center">
        {editModeDisable ? (
          <span className="text-[20px] text-center">
            {title}
          </span>
        ) : (
          <>
            <input
              className="block bg-light-gray-1 text-[20px] text-center border border-pink rounded-md outline-none"
              value={title}
              onChange={handleTitleChange}
              disabled={editModeDisable}
            />
            <button
              className="bg-pink text-white rounded-md h-[30px] w-[100px]"
              onClick={() => save()}
            >
              {buttonText}
            </button>
          </>
        )}
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
            onClick={() => setEditModeDisable(!editModeDisable)}
            className="text-dark-gray flex items-center"
          >
            <FaPen />
            <span className="ml-1 text-[10px]">Edit</span>
          </button>
          <button
            onClick={() => remove(data.id)}
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