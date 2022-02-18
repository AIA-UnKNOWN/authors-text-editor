import { useState } from 'react';

const useHeader = () => {
  const [showNav, setShowNav] = useState(false);

  return { showNav, setShowNav };
}

export default useHeader;