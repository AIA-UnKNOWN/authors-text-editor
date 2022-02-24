import { FaCaretLeft } from 'react-icons/fa';
import Editor from './Editor';

const TextEditor = ({ isShowNotes, onClickShowNotesToggler }) => {
  return (
    <div className="lg:relative flex flex-col flex-1">
      <div className="flex flex-col flex-1 px-4 lg:px-8">
        <p className="py-4 text-[30px] text-center font-medium border-b border-dark-gray">
          Chapter 1: Introduction of the story
        </p>

        <div
          className={`flex justify-center items-center
          absolute top-1/2 left-0 
          bg-white text-[25px] text-dark-gray w-[20px]
          h-[50px] border border-dark-gray cursor-pointer
          ${!isShowNotes && 'rotate-180'}`}
          onClick={onClickShowNotesToggler}
        >
          <FaCaretLeft />
        </div>

        <Editor />
      </div>
    </div>
  );
}

export default TextEditor;