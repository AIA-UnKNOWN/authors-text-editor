import { useSelector } from 'react-redux';
import Button from '@common/Button';
import Toggler from '@common/Toggler';

const Navigation = ({ className, onSwitchToCollections, onLogout }) => {
  const tab = useSelector(state => state.tabs.tab);

  return (
    <div className={`${className} bg-white lg:flex fixed lg:static left-0 top-[60px] self-start flex-col lg:flex-row justify-center items-center h-full w-full lg:w-fit`}>
      <Toggler
        className="absolute lg:static top-[20px] right-[20px]"
        onEnable={() => console.log('toggler ON')}
        onDisable={() => console.log('toggler OFF')}
      />
      
      {tab !== 'collections' && (
        <Button
          className="w-[150px] lg:h-[40px] lg:ml-8 lg:text-[15px] mb-4 lg:mb-0"
          onClick={() => onSwitchToCollections()}
          label="Collections"
        />
      )}
      <button
        className="block lg:ml-4 h-[50px] w-fit px-4 lg:text-[15px]"
        onClick={() => onLogout()}
      >
        Logout
      </button>
    </div>
  );
}

export default Navigation;