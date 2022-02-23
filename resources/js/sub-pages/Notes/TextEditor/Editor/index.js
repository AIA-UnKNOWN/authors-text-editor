import Button from '@common/Button';
import EditModeToggler from './EditModeToggler';
import ProgressBar from './ProgressBar';
import ActionPanelMobile from './ActionPanelMobile';

const Editor = () => {
  return (
    <div className="flex flex-col flex-1">
      <div className="border border-dark-gray mt-4 rounded-md flex flex-col flex-1">
        <textarea
          className="block w-full h-full resize-none p-2 text-[15px] rounded-md outline-pink"
          placeholder="What's on your mind?"
          onChange={e => console.log(e.target.value)}
        >
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        </textarea>
      </div>
      
      <div className="relative">
        <EditModeToggler
          className="hidden lg:flex"
        />
        <ProgressBar />
        <Button
          className="w-[100px] h-10 text-[15px] hidden lg:block"
          label="Save"
          onClick={() => null}
        />

        <ActionPanelMobile />
      </div>
    </div>
  );
}

export default Editor;