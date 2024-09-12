

import { CSSProperties, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from './menu';

/* navbar styles */
const styles: { [key: string]: CSSProperties } = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: '#fff',
  },

  navbarLeft: {
    display: 'flex',
  },

  navButton: {
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    marginRight: '20px',
  },

  navButtonHover: {
    textDecoration: 'underline',
  },

  navbarRight: {
    display: 'flex',
    alignItems: 'center',
  },

  navbarAvatar: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    border: '2px solid white',
    cursor: 'pointer',
  },

  menuContainer: {
    position: 'relative',
    left: '-150px', // Adjust this value to position the menu to the left of the avatar
    top: '5px', // Adjust this value to position the menu below the avatar
    
    zIndex: 1000,
  },

  searchInput: {
    marginLeft: '10px',
    padding: '5px',
    borderRadius: '5px',
    border: 'none',
    fontSize: '14px'
  },

  
};

function Navigbar() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleCommunityClick = () => {
    navigate('/community');
  };

  const handleSearchClick = () => {
    //search someone eg by name
    // ...
  };

  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  const handleAvatarClick = () => {
    // inject the menu component
    setMenuVisible(!menuVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuVisible(false);
      }
    };

    if (menuVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuVisible]);

  return (
    <nav style={styles.navbar} className="navigatebar">
      <div style={styles.navbarLeft}>
        <button style={styles.navButton} onClick={handleHomeClick} className="homebutton"> Home</button>
        <button style={styles.navButton} onClick={handleCommunityClick} className="communitybutton">Community</button>
        <input
          type="text"
          placeholder="Search..."
          style={styles.searchInput}
          className="searchinput"
        />
        <button style={styles.navButton} onClick={handleSearchClick} className="searchbutton">Search</button>
      </div>
      <div style={styles.navbarRight}>
        <div style={styles.navbarAvatarContainer} className="navigateAvatar">
          <img
            src='./clown_kid.jpg'
            alt="user profile"
            style={styles.navbarAvatar}
            onClick={() => {
              handleAvatarClick()
            }}
          />
            {menuVisible && (
              <div 
              ref={menuRef}
                style={styles.menuContainer} 
                className='menu-container'
              > 
                <Menu />
              </div>
            )}
        </div>
      </div>
    </nav>
  );
}

export default Navigbar;
