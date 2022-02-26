import Toggler from '@common/Toggler';

const EditModeToggler = ({ className }) => {
  return (
    <div className={`${className}`}>
      <span className="text-[15px] mr-2">Edit Mode</span>
      <Toggler
        onEnable={() => null}
        onDisable={() => null}
      />
    </div>
  );
}

export default EditModeToggler;