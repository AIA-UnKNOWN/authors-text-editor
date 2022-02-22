import { useState } from 'react';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { showNotification } from '@reducers/notificationSlice';
import { setIsAuthenticated } from '@reducers/userSlice';
import { setTab, TABS } from '@reducers/tabsSlice';

const useHeader = () => {
  const dispatch = useDispatch();
  const [showNav, setShowNav] = useState(false);

  const goToCollectionsTab = () => {
    dispatch(setTab({ tab: TABS[0] }));
    Cookies.remove('tab');
    Cookies.remove('collectionId');
  }

  const logout = async () => {
    const response = await fetch('/api/logout', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('token')}`,
        'X-CSRF-TOKEN': document.querySelector('meta[name=csrf_token]').content
      }
    });
    if (!response.ok) return;
    Cookies.remove('token');
    dispatch(setIsAuthenticated({ authenticate: false }));
    dispatch(showNotification({ label: 'Logged Out' }));
  }

  return { showNav, setShowNav, goToCollectionsTab, logout };
}

export default useHeader;