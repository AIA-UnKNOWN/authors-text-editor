import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import camelCaseKeys from 'camelcase-keys';
import { setNotes } from '@reducers/notesSlice';

const useNotes = collectionId => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    const response = await fetch(`/api/notes/${collectionId}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('token')}`
      }
    });
    if (!response.ok) return;
    const notes = await response.json();
    dispatch(setNotes({ notes: camelCaseKeys(notes) }));
  }

  return { getNotes };
}

export default useNotes;