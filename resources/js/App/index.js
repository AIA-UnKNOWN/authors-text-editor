import useApp from './hook';
import PopupNotification from '@common/PopupNotification';
import Auth from '@pages/Auth';
import Home from '@pages/Home';

const App = () => {
  const { isAuthenticated } = useApp();

  return (
    <div>
      <PopupNotification />

      {isAuthenticated ? (
        <Home />
      ) : (
        <Auth />
      )} 
    </div>
  );
}

export default App;