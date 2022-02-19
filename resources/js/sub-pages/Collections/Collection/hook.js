import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const useCollection = collection => {
  const [title, setTitle] = useState('');
  const [editModeDisable, setEditModeDisable] = useState(true);
  const [buttonText, setButtonText] = useState('Save');

  useEffect(() => {
    setTitle(collection.title);
  }, []);

  const handleTitleChange = e => {
    setTitle(e.target.value);
    setButtonText('Save');
  }

  const save = async () => {
    setButtonText('Saving...');
    const response = await fetch(`/api/collection/${collection.id}/update`, {
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
    setButtonText('Saved!')
  }

  const remove = async () => {
    const response = await fetch(`/api/collection/${collection.id}/delete`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('token')}`,
        'X-CSRF-TOKEN': document.querySelector('meta[name=csrf_token]').content
      }
    });
    if (!response.ok) return;
  }

  return { title, handleTitleChange, editModeDisable, setEditModeDisable, handleTitleChange, save, remove, buttonText };
}

export default useCollection;