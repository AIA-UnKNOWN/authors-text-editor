import { FaSlidersH } from 'react-icons/fa';
import useActionPanelMobile from './hook';
import Button from '@common/Button';
import EditModeToggler from '../EditModeToggler';

const ActionPanelMobile = ({ saveButtonText, onSave }) => {
  const { isCollapsed, setIsCollapsed } = useActionPanelMobile();

  return (
    <div className="flex lg:hidden flex-col items-center fixed bottom-10 right-5">
      <div
        className="w-[50px] h-[50px] text-[25px] shadow-md bg-pink text-white flex justify-center items-center rounded-full"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <FaSlidersH />
      </div>

      {isCollapsed && (
        <div className="absolute -top-[200%] right-0 bg-white flex flex-col items-center w-[140px] p-2 shadow-md">
          <EditModeToggler
            className="flex mb-2"
          />
          <Button
            className="w-full h-10 text-[15px]"
            label={saveButtonText}
            onClick={onSave}
          />
        </div>
      )}
    </div>
  );
}

export default ActionPanelMobile;