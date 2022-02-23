import { useState } from 'react';

const useActionPanelMobile = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return { isCollapsed, setIsCollapsed }
}

export default useActionPanelMobile;