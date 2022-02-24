import useNote from './hook';
import Title from '@sub-pages/Collections/Collection/Title';
import ActionPanel from './ActionPanel';

const Note = ({ data, onOpen }) => {
  const {
    title, handleTitleChange,
    editModeDisable, setEditModeDisable,
    buttonText,
    save, remove, selectNote
  } = useNote(data);
  
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
        onOpen={() => {
          onOpen();
          selectNote();
        }}
        onEdit={() => setEditModeDisable(!editModeDisable)}
        onDelete={remove}
      />
    </div>
  );
}

export default Note;