import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { setUser } from '@reducers/userSlice';

const useProfilePicture = () => {
  const user = useSelector(state => state.user.data);
  const dispatch = useDispatch();

  useEffect(() => {
    getProfilePicture();
  }, []);

  const getProfilePicture = async () => {
    const response = await fetch('/api/profile-picture', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('token')}`
      }
    });
    if (!response.ok) return;
    const profilePicture = await response.json();
    dispatch(setUser({
      data: { ...user, profilePicture: profilePicture.source }
    }));
  }

  return { getProfilePicture };
}

export default useProfilePicture;