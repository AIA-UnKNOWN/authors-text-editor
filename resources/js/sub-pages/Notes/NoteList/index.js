import { FaPlus } from 'react-icons/fa';

const NoteList = ({ notes }) => {
  return (
    <div>
      <div>
        <div>
          <button onClick={() => console.log('Add note')}>
            <FaPlus />
          </button>

          {notes.length > 0 && notes.map(note => (
            <div key={note.id}>
              <span>{note.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ); 
}

export default NoteList;