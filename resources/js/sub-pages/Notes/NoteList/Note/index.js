import { FaFileWord, FaPen, FaTrashAlt } from 'react-icons/fa';
import Title from '@sub-pages/Collections/Collection/Title';

const Note = ({ data }) => {
  return (
    <div className="border border-dark-gray rounded-md px-4 mb-2">
      <Title
        title={data.title}
        onTitleChange={() => null}
        onSave={() => null}
        isEditModeDisable={true}
        saveButtonLabel="Save"
      />

      <div className="flex justify-between items-center border-t border-dark-gray h-[40px]">
        <div className="flex items-center">
          <div
            className="text-dark-gray flex items-center"
          >
            <FaFileWord />
            <span className="ml-1 text-[13px]">5000</span>
          </div>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => null}
            className="bg-pink text-white flex justify-center items-center w-[50px] h-[25px] rounded-md"
          >
            <span className="text-[10px]">Open</span>
          </button>
          <button
            onClick={() => null}
            className="text-dark-gray flex items-center ml-4"
          >
            <FaPen />
            <span className="ml-1 text-[10px]">Edit</span>
          </button>
          <button
            onClick={() => null}
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

export default Note;