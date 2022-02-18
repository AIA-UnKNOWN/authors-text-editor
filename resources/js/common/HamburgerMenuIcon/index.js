import './style.css';
import { useState } from 'react';

const HamburgerMenuIcon = ({ onToggle }) => {
  const [isToggle, setIsToggle] = useState(false);

  const toggle = () => {
    setIsToggle(!isToggle);
    onToggle();
  }

  return (
    <div
      className={`hamburger-menu-icon ${isToggle && 'toggled'}`}
      onClick={() => toggle()}
    >
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
}

export default HamburgerMenuIcon;