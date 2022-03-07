import useProfileInfo from './hook';
import Input from '@common/Input';
import Button from '@common/Button';

const ProfileInfos = () => {
  const { inputs, setInputs, updateProfileInfo } = useProfileInfo();

  return (
    <div className="mx-auto lg:max-w-[300px]">
      <div className="mb-2">
        <span className="text-[12px] mb-2 ml-1">Firstname</span>
        <Input
          onChange={e => setInputs(inputs => ({ ...inputs, firstName: e.target.value }))}
          value={inputs.firstName}
        />
      </div>
      <div className="mb-2">
        <span className="text-[12px] mb-2 ml-1">Lastname</span>
        <Input
          onChange={e => setInputs(inputs => ({ ...inputs, lastName: e.target.value }))}
          value={inputs.lastName}
        />
      </div>
      <div className="mb-2">
        <span className="text-[12px] mb-2 ml-1">Password</span>
        <Input
          type="password"
          onChange={e => setInputs(inputs => ({ ...inputs, password: e.target.value }))}
          value={inputs.password}
        />
      </div>
      <div className="mb-2">
        <span className="text-[12px] mb-2 ml-1">New Password</span>
        <Input
          type="password"
          onChange={e => setInputs(inputs => ({ ...inputs, newPassword: e.target.value }))}
          value={inputs.newPassword}
        />
      </div>
      <div className="mb-2">
        <span className="text-[12px] mb-2 ml-1">Confirm New Password</span>
        <Input
          type="password"
          onChange={e => setInputs(inputs => ({ ...inputs, confirmNewPassword: e.target.value }))}
          value={inputs.confirmNewPassword}
        />
      </div>
      <Button
        className="mt-8"
        label="Save"
        onClick={updateProfileInfo}
      />
    </div>
  );
}

export default ProfileInfos;