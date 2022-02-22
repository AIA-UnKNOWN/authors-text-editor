import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { setTab } from '@reducers/tabsSlice';
import Collections from '@sub-pages/Collections';
import Notes from '@sub-pages/Notes';

const useHome = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const existingTab = Cookies.get('tab');
    if (existingTab) {
      dispatch(setTab({ tab: existingTab }));
    }
  }, []);

  const renderPage = tab => {
    switch (tab) {
      case 'profile':
        return (<h1>Profile</h1>);
      case 'notes':
        return (<Notes />);
      default:
        return (<Collections />);
    }
  }

  return { renderPage };
}

export default useHome;