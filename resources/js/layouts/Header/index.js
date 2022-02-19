import { useSelector } from 'react-redux';
import useHeader from './hook';
import HamburgerMenuIcon from '@common/HamburgerMenuIcon';
import Navigation from '@layouts/Navigation';

const Header = () => {
  const user = useSelector(state => state.user.data);
  const { showNav, logout, setShowNav } = useHeader();

  return (
    <div className="px-4 shadow-sm">
      <div className="wrapper h-[60px] flex items-center justify-between">
        <div className="w-fit flex items-center">
          <img
            className="w-[40px] h-[40px] rounded-full"
            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="Profile picture"
          />
          <span className="text-[15px] ml-2 font-medium">{user.firstName} {user.lastName}</span>
        </div>

        <HamburgerMenuIcon
          onToggle={() => setShowNav(!showNav)}
        />

        <Navigation
          className={showNav ? 'flex' : 'hidden'}
          onSwitchToCollections={() => console.log('Collections')}
          onLogout={logout}
        />
      </div>
    </div>
  );
}

export default Header;