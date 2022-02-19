import { useEffect } from 'react';
import Cookies from 'js-cookie';
import camelCaseKeys from 'camelcase-keys';
import { useDispatch } from 'react-redux';
import { setCollections } from '@reducers/collectionsSlice';

const useCollections = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getCollections();
  }, []);

  const getCollections = async () => {
    const response = await fetch('/api/collections', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('token')}`
      }
    });
    if (!response.ok) return;
    const collections = await response.json();
    dispatch(setCollections({ list: camelCaseKeys(collections) }));
  }

  return { getCollections };
}

export default useCollections;