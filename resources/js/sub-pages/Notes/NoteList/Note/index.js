import useNote from './hook';
import Title from '@sub-pages/Collections/Collection/Title';
import ActionPanel from './ActionPanel';

const Note = ({ data }) => {
  const { title, editModeDisable, setEditModeDisable, buttonText, handleTitleChange, save, remove } = useNote(data);

  return (
    <div className="border border-dark-gray rounded-md px-4 mb-2">
      <Title
        title={title}
        onTitleChange={handleTitleChange}
        onSave={save}
        isEditModeDisable={editModeDisable}
        saveButtonLabel={buttonText}
      />
      <ActionPanel
        wordCount={3000}
        onOpen={() => null}
        onEdit={() => setEditModeDisable(!editModeDisable)}
        onDelete={remove}
      />
    </div>
  );
}

export default Note;