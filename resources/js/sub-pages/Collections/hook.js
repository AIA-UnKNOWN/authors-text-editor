import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import camelCaseKeys from 'camelcase-keys';

const useCollections = () => {
  const [collections, setCollections] = useState([]);

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
    setCollections(camelCaseKeys(collections));
  }

  return { collections, setCollections, getCollections };
}

export default useCollections;