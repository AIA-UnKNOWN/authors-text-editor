import { FaPlus } from 'react-icons/fa';
import useNoteList from './hook';
import Note from './Note';

const NoteList = ({ notes }) => {
  const { addNote } = useNoteList();

  return (
    <div className="overflow-y-auto bg-white absolute top-0 left-0 h-full w-full">
      <div>
        <div className="px-4">
          <div className="py-4 border-b border-dark-gray mb-4">
            <button
              className="w-[40px] h-[40px] flex justify-center items-center border border-dark-gray text-[25px] text-dark-gray rounded-md"
              onClick={addNote}
            >
              <FaPlus />
            </button>
          </div>

          {notes.length > 0 && (
            <div>
              {notes.map(note => (
                <Note
                  key={note.id}
                  data={note}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  ); 
}

export default NoteList;