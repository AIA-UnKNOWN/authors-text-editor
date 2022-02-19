import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Collections from '@sub-pages/Collections';

const useHome = () => {
  const DEFAULT_TAB = 'collections';
  const [currentTab, setCurrentTab] = useState(DEFAULT_TAB);
  
  useEffect(() => {
    const existingTab = Cookies.get('tab');
    if (existingTab) setCurrentTab(existingTab);
  }, []);

  const renderPage = tab => {
    switch (tab) {
      case 'profile':
        return (<h1>Profile</h1>);
      case 'notes':
        return (<h1>Notes</h1>);
      default:
        return (<Collections />);
    }
  }

  return { currentTab, setCurrentTab, renderPage };
}

export default useHome;