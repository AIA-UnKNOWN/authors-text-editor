import { FaPlus } from 'react-icons/fa';
import useNoteList from './hook';
import Note from './Note';
import FetchLoading from '@animations/FetchLoading';

const NoteList = ({ isLoading, notes }) => {
  const { addNote } = useNoteList();

  return (
    <div className="overflow-y-auto bg-white absolute top-0 left-0 flex flex-col flex-1 h-full w-full">
      <div className="flex flex-col flex-1">
        <div className="px-4 flex flex-col flex-1">

          <div className="py-4 border-b border-dark-gray mb-4">
            <button
              className="w-[40px] h-[40px] flex justify-center items-center border border-dark-gray text-[25px] text-dark-gray rounded-md"
              onClick={addNote}
            >
              <FaPlus />
            </button>
          </div>

          {isLoading ? (
            <FetchLoading />
          ) : notes.length > 0 ? (
            <div>
              {notes.map(note => (
                <Note
                  key={note.id}
                  data={note}
                />
              ))}
            </div>
          ) : (
            <div className="pt-4 flex flex-col flex-1 justify-center items-center">
              <span>You don't have any notes.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  ); 
}

export default NoteList;