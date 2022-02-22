import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import useNotes from './hook';
import NoteList from './NoteList';
import TextEditor from './TextEditor';

const Notes = () => {
  const notes = useSelector(state => state.notes);
  useNotes(notes.collectionId || Cookies.get('collectionId'));

  return (
    <div>
      <NoteList notes={notes.list} />
      <TextEditor />
    </div>
  );
}

export default Notes;