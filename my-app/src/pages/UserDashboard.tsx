import React, { useState ,CSSProperties, useEffect} from 'react';

import { useLocation } from 'react-router-dom';
import Navigbar from '../components/navigbar';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



const styles: { [key: string]: CSSProperties } = {
  UserDashboard_page: {
    fontFamily: 'Arial, sans-serif',
  },

  dashboardContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    boxSizing: 'border-box',
  },

  userInfo: {
    width: '25%',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  avatarSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  avatar: {
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '10px',
  },

  avatarhover:{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '300px',
    height: '300px',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    opacity: 0,
    transition: 'opacity 0.3s',
    borderRadius: '50%',
    cursor: 'pointer',
  },

  userDetails: {
    position: 'relative',
    alignContent: 'center',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    top: '-300px',
  },

  userDetailsH2: {
    margin: '0',
    fontSize: '24px',
  },

  userDetailsP: {
    margin: '5px 0 0 0',
    color: '#666',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: '16px',
  },

  retireButton: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#ff5e57',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },

  retireButtonHover: {
    backgroundColor: '#e04c4b',
  },

  activityBoard: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: '20px',
  },

  likeCount: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: '100%',
    height: '50%',
  },

  likeCircle: {
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    backgroundColor: '#4caf50',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '36px',
    fontWeight: 'bold',
    margin: '0 auto',
  },

  likeCircleSpan: {
    lineHeight: '150px',
  },

  contributionChart: {
    height: '60%',
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },

  chartGrid: {
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 60px)',
    gridTemplateRows: 'repeat(5, 60px)',
    gap: '10px',
  },

  contributionDay: {
    width: '50px',
    height: '50px',
    backgroundColor: '#e0e0e0',
    borderRadius: '5px',
  },

  contributionDayActive: {
    backgroundColor: '#4caf50',
  },
};

// Media query styles
const mediaStyles = {
  '@media (max-width: 768px)': {
    dashboardContainer: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    userInfo: {
      width: '100%',
      marginBottom: '20px',
    },
    activityBoard: {
      width: '100%',
      marginBottom: '20px',
    },
    likeCount: {
      width: '100%',
    },
    contributionChart: {
      width: '100%',
    },
  },
};

const combinedStyles = { ...styles, ...mediaStyles };

const UserDashboard = () => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [avatar, setAvatar] = useState('');
  const [likeCount] = useState(256);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.curUser) {
      setAvatar(location.state.curUser.avatar || '');
      setIsLoading(false);
    }else{
      navigate('/');
    }
  }, [location.state, navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const currentUser = location.state?.curUser;

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setAvatar(URL.createObjectURL(file));
    }
  };
   
  const handleAvatarClick = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.onchange = (event: Event) => {
      const target = event.target as HTMLInputElement;
      const files = target.files;
      if (files && files.length > 0) {
        const file = files[0];
        setAvatar(URL.createObjectURL(file));
        handleAvatarChange(event as unknown as React.ChangeEvent<HTMLInputElement>);
      }
    };
    fileInput.click();
  };
  

  const handleRetire = () => {
    alert('Are you sure to retire?');
  };

  return (
    <div className="UserDashboard_page">
      <Navigbar />
      <div className="dashboard-container" style={styles.dashboardContainer}>
        
      {/* 左侧：用户基本信息 */}
      <div className="user-info" style={styles.userInfo}>
        <div className="avatar-section" style={styles.avatarSection}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <img src={avatar} alt="user avatar" style={styles.avatar} onClick={handleAvatarClick}/>
            <div className="avatar-hover"
              style={styles.avatarhover}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
              onClick={handleAvatarClick}
            >
              New Profile
            </div>
          </div>
        </div>
        <div className="user-details" style={styles.userDetails}>
          <h2 style={styles.userDetailsH2}>{currentUser.username}</h2>
          <p  style={styles.userDetailsP}>age: {currentUser.age}</p>
          <p  style={styles.userDetailsP}>join date: {currentUser.joinDate.toLocaleDateString().split('T')[0]}</p>
        </div>
        <button className="retire-button" onClick={handleRetire} style={styles.retireButton}>
          Retire
        </button>
      </div>

      {/* 右侧：总点赞数和每日贡献看板 */}
      <div className="activity-board" style={styles.activityBoard}>
        <div className="like-count" style={styles.likeCount}>
          <h3>Total Likes</h3>
          <div className="like-circle" style={styles.likeCircle}>
            <span style={styles.likeCircleSpan}>{likeCount}</span>
          </div>
        </div>

        <div className="contribution-chart" style={styles.contributionChart}>
          <h3>Performance day</h3>
          <div >
            <Calendar />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default UserDashboard;
