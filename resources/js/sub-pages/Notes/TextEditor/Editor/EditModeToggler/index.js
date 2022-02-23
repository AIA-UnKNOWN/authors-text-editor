import Toggler from '@common/Toggler';

const EditModeToggler = ({ className }) => {
  return (
    <div className={`${className}`}>
      <span className="text-[15px] mr-2">Edit Mode</span>
      <Toggler
        onEnable={() => console.log('Edit Mode enabled')}
        onDisable={() => console.log('Edit Mode disabled')}
      />
    </div>
  );
}

export default EditModeToggler;