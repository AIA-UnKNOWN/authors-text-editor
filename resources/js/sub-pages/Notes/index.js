import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import useNotes from './hook';
import NoteList from './NoteList';
import TextEditor from './TextEditor';

const Notes = () => {
  const notes = useSelector(state => state.notes);
  const { isLoading } = useNotes(notes.collectionId || Cookies.get('collectionId'));

  return (
    <div className="bg-light-gray-1 relative flex flex-col flex-1">
      <NoteList
        isLoading={isLoading}
        notes={notes.list}
      />
      <TextEditor />
    </div>
  );
}

export default Notes;