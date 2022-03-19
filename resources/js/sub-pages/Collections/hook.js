import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import camelCaseKeys from 'camelcase-keys';
import { useDispatch, useSelector } from 'react-redux';
import { setCollections } from '@reducers/collectionsSlice';

const useCollections = () => {
  const abortController = new AbortController();
  const collections = useSelector(state => state.collections.list);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (
      (Cookies.get('tab') !== 'notes' ||
      !Cookies.get('collectionId')) &&
      collections === null
    ) getCollections();
    return () => {
      dispatch(setCollections({ list: null }));
      abortController.abort();
    }
  }, []);

  const getCollections = async () => {
    const response = await fetch('/api/collections', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('token')}`
      },
      signal: abortController.signal
    });
    if (!response.ok) return;
    const collections = await response.json();
    dispatch(setCollections({ list: camelCaseKeys(collections) }));
    setIsLoading(false);
  }

  const searchCollection = async (value) => {
    if (value === '') return;
    const response = await fetch(`/api/collections/search?collection=${value}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('token')}`
      }
    });
    if (!response.ok) return;
    const collections = await response.json();
    dispatch(setCollections({ list: camelCaseKeys(collections) }));
  }

  return { getCollections, isLoading, searchCollection };
}

export default useCollections;