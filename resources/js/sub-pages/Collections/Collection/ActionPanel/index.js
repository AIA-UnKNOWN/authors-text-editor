import { FaBook, FaPen, FaTrashAlt } from 'react-icons/fa';

const ActionPanel = ({ notesCount, onEdit, onDelete }) => {
  return (
    <div className="flex justify-between items-center border-t border-dark-gray h-[40px]">
      <div className="flex items-center">
        <div
          className="text-dark-gray flex items-center"
        >
          <FaBook />
          <span className="ml-1 text-[13px]">{notesCount}</span>
        </div>
      </div>
      <div className="flex items-center">
        <button
          onClick={onEdit}
          className="text-dark-gray flex items-center"
        >
          <FaPen />
          <span className="ml-1 text-[10px]">Edit</span>
        </button>
        <button
          onClick={onDelete}
          className="text-dark-gray flex items-center ml-4"
        >
          <FaTrashAlt />
          <span className="ml-1 text-[10px]">Delete</span>
        </button>
      </div>
    </div>
  );
}

export default ActionPanel;