import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import useNotes from '@sub-pages/Notes/hook';
import { showNotification } from '@reducers/notificationSlice';

const useNote = note => {
  const collectionId = useSelector(state => state.notes.collectionId);
  const dispatch = useDispatch();
  const { getNotes } = useNotes(collectionId || Cookies.get('collectionId'));
  const [title, setTitle] = useState('');
  const [editModeDisable, setEditModeDisable] = useState(true);
  const [buttonText, setButtonText] = useState('Save');

  useEffect(() => {
    setTitle(note.title);
  }, []);

  const handleTitleChange = e => {
    setTitle(e.target.value);
    setButtonText('Save');
  }

  const save = async () => {
    setButtonText('Saving...');
    const response = await fetch(`/api/note/${note.id}/update`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('token')}`,
        'X-CSRF-TOKEN': document.querySelector('meta[name=csrf_token]').content
      },
      body: JSON.stringify({ title })
    });
    if (!response.ok) return;
    setEditModeDisable(true);
    setButtonText('Saved!');
    dispatch(showNotification({ label: 'Saved!' }));
  }

  const remove = async () => {
    setButtonText('Saving...');
    const response = await fetch(`/api/note/${note.id}/delete`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('token')}`,
        'X-CSRF-TOKEN': document.querySelector('meta[name=csrf_token]').content
      }
    });
    if (!response.ok) return;
    getNotes();
    dispatch(showNotification({ label: 'Note deleted' }));
  }

  return { title, editModeDisable, setEditModeDisable, buttonText, handleTitleChange, save, remove };
}

export default useNote;