
import user from '../utils/user';
import { CSSProperties, useState } from 'react';
import thumb from '../assets/thumb.svg';

const styles: { [key: string]: CSSProperties } = {
  userProfile: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    position: 'relative',
    flexDirection: 'row',
  },
  userDetails: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: '20px',
  },
  likeContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative',
    top: '10px',
    right: '10px',
  },
  likeButton: {
    padding: '5px 10px',
    //use svg as the button
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '1px',
    cursor: 'pointer',
    marginRight: '1px',
  },

  likeCount: {
    fontSize: '16px',
    color: '#333',
  },

  userAvatar: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginRight: '20px',
  },

  userDetailsH3: {
    margin: 0,
    fontSize: '20px',
    color: '#333',
  },

  userDetailsP: {
    margin: '5px 0',
    color: '#666',
  },

  userSlogan: {
    margin: '0px 100px',
    color: '#666',
    fontSize: '20px',
    fontWeight: 'bold',
    marginLeft: '200 px',  // Added marginLeft to move it further from left
  },
};

/* responsive design */
const mobileStyles: { [key: string]: CSSProperties } = {
  navbar: {
    flexDirection: 'column' as 'column',
    alignItems: 'flex-start' as 'flex-start',
  },
  navbarAvatar: {
    width: '40px',
    height: '40px',
  },
  userAvatar: {
    width: '80px',
    height: '80px',
  },
};

// Responsive styles
Object.keys(styles).forEach(key => {
  if (window.matchMedia('(max-width: 768px)').matches) {
    styles[key] = { ...styles[key], ...mobileStyles[key] };
  }
});

const responsiveStyles = (styles: { [key: string]: CSSProperties }): { [key: string]: CSSProperties } => {
  if (window.matchMedia('(max-width: 768px)').matches) {
    return {
      ...styles,
      navbar: { ...styles.navbar, ...mobileStyles.navbar },
      navbarAvatar: { ...styles.navbarAvatar, ...mobileStyles.navbarAvatar },
      userAvatar: { ...styles.userAvatar, ...mobileStyles.userAvatar },
    };
  }
  return styles;
};

// Apply responsive styles
const responsiveStylesApplied = responsiveStyles(styles);
function ProfileCard(user: user) {
  const [likes, setLikes] = useState(user.likes);

  const handleLike = () => {
    //update the user's likes
    //update the database
    setLikes(likes => likes + 1);
  
  };

  return (
    <div key={user.id} style={styles.userProfile}>
      <img src={user.avatar} alt={`${user.username} profile`} style={styles.userAvatar} />
      <div style={styles.userDetails}>
        <h3 style={styles.userDetailsH3}>{user.username}</h3>
        <p style={styles.userDetailsP}> {user.age} years old</p>
        <p style={styles.userDetailsP}> {user.gender}</p>
        <div style={styles.likeContainer}>
          <button style={styles.likeButton} onClick={handleLike} >
            <img src={thumb} alt="thumb" style={
              {
                width: '20px',
                height: '20px',
                objectFit: 'contain',
              }
            } />
          </button>
          <p style={styles.userDetailsP}>{likes}</p>
        </div>
        
        
       
      </div>
      <div style={styles.userSloganContainer}>
          <p style={styles.userSlogan}>{user.slogan}</p>
        </div>
    </div>

  )
}

export default ProfileCard;