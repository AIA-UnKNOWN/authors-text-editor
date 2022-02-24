import Editor from './Editor';

const TextEditor = () => {
  return (
    <div className="lg:relative flex flex-col flex-1">
      <div className="flex flex-col flex-1 px-4">
        <p className="py-4 text-[30px] text-center font-medium border-b border-dark-gray">
          Chapter 1: Introduction of the story
        </p>

        <Editor />
      </div>
    </div>
  );
}

export default TextEditor;