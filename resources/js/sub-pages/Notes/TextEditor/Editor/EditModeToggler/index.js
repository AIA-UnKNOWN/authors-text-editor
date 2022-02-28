import Toggler from '@common/Toggler';

const EditModeToggler = ({ className, onEditModeEnable, onEditModeDisable }) => {
  return (
    <div className={`${className}`}>
      <span className="text-[15px] mr-2">Edit Mode</span>
      <Toggler
        onEnable={() => onEditModeEnable()}
        onDisable={() => onEditModeDisable()}
      />
    </div>
  );
}

export default EditModeToggler;