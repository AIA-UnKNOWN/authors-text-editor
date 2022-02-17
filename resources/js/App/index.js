import useApp from './hook';
import PopupNotification from '@common/PopupNotification';
import Auth from '@pages/Auth';

const App = () => {
  const { isAuthenticated } = useApp();

  return (
    <div>
      <PopupNotification />

      {isAuthenticated ? (
        <h1>Welcome</h1>
      ) : (
        <Auth />
      )} 
    </div>
  );
}

export default App;