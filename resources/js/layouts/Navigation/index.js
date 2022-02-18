import Button from '@common/Button';
import Toggler from '@common/Toggler';

const Navigation = ({ className, onSwtichToCollections, onLogout }) => {
  return (
    <div className={`${className} fixed left-0 top-[60px] self-start flex-col justify-center items-center h-full w-full`}>
      <Toggler
        className="absolute top-[20px] right-[20px]"
        onEnable={() => console.log('toggler ON')}
        onDisable={() => console.log('toggler OFF')}
      />
      <Button
        className="w-[150px]"
        onClick={() => onSwtichToCollections()}
        label="Collections"
      />
      <button
        className="block mt-4 h-[50px] w-fit px-4"
        onClick={() => onLogout()}
      >
        Logout
      </button>
    </div>
  );
}

export default Navigation;