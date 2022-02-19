import useCollection from './hook';
import ActionPanel from './ActionPanel';

const Collection = ({ data }) => {
  const { title, handleTitleChange, editModeDisable, setEditModeDisable, save, remove, buttonText } = useCollection(data);

  return (
    <div className="border border-dark-gray bg-white rounded-md px-4 mb-2">
      <div className="min-h-[100px] py-2 flex flex-wrap justify-center items-center">
        {editModeDisable ? (
          <span className="text-[20px] text-center">
            {title}
          </span>
        ) : (
          <>
            <input
              className="block bg-light-gray-1 text-[20px] text-center border border-pink rounded-md outline-none"
              value={title}
              onChange={handleTitleChange}
              disabled={editModeDisable}
            />
            <button
              className="bg-pink text-white rounded-md h-[30px] w-[100px]"
              onClick={() => save()}
            >
              {buttonText}
            </button>
          </>
        )}
      </div>

      <ActionPanel
        notesCount={0}
        onEdit={() => setEditModeDisable(!editModeDisable)}
        onDelete={() => remove(data.id)}
      />
    </div>
  );
}

export default Collection;