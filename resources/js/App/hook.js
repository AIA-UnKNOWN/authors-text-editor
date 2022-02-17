import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useSelector, useDispatch } from 'react-redux';
import camelCaseKeys from 'camelcase-keys';
import { setUser, setIsAuthenticated } from '@reducers/userSlice';

const useApp = () => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  const dispatch = useDispatch();
  const token = Cookies.get('token');

  useEffect(() => {
    if (token) getCurrentLoggedUser(token);
  }, []);

  const getCurrentLoggedUser = async (token) => {
    const response = await fetch('/api/user', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        'X-CSRF-TOKEN': document.querySelector('meta[name=csrf_token]').content
      }
    });
    if (!response.ok) return;
    dispatch(setIsAuthenticated({ authenticate: true }));
    const data = await response.json();
    dispatch(setUser({ data: camelCaseKeys(data) }));
  }

  return { isAuthenticated, getCurrentLoggedUser };
}

export default useApp;