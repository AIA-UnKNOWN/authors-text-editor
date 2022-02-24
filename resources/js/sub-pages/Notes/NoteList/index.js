import AddButton from './AddButton';
import Note from './Note';
import FetchLoading from '@animations/FetchLoading';

const NoteList = ({ isLoading, notes }) => {
  return (
    <div className="overflow-y-auto bg-white absolute lg:relative top-0 left-0 z-10 flex flex-col flex-1 lg:grow-0 lg:basis-[350px] h-full w-full lg:shadow-lg">
      <div className="flex flex-col flex-1">
        <div className="px-4 flex flex-col flex-1">
          <AddButton />

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