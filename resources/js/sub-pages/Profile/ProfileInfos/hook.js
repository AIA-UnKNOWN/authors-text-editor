import { useState, useEffect } from 'react';

const useProfileInfo = () => {
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    password: '',
    newPassword: '',
    confirmNewPassword: ''
  });

  useEffect(() => {
    getProfileInfo();
  }, []);

  const getProfileInfo = async () => {

  }
  
  const updateProfileInfo = async () => {

  }

  return { inputs, setInputs, updateProfileInfo };
}

export default useProfileInfo;