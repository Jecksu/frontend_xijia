import React, { useState } from 'react';
import { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom'; 
import user from '../utils/user';



// Styles for the Register component
const styles: { [key: string]: CSSProperties } = {
  h2: {
    fontSize: '28px',
    color: '#333',
    marginBottom: '30px',
    textAlign: 'left',
  },
  
  uploadAvatar: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  
  uploadAvatarLabel: {
    cursor: 'pointer',
  },
  
  avatarPreview: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #ddd',
  },
  
  fileInput: {
    display: 'none',
  },
  
  inputGroup: {
    marginBottom: '20px',
    textAlign: 'left',
  },
  
  label: {
    fontSize: '20px',
    display: 'block',
    marginBottom: '8px',
    color: '#555',
  },
  
  input: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '16px',
    boxSizing: 'border-box',
    backgroundColor: '#f7f7f7',
    transition: 'border-color 0.3s ease',
  },
  
  inputFocus: {
    borderColor: '#4CAF50',
    outline: 'none',
  },
  
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginTop: '10px',
    fontWeight: 'bold',
  },
  
  buttonHover: {
    backgroundColor: '#45a049',
  },
};

// Media query styles
const mediaStyles = {
  '@media (max-width: 768px)': {
    registerPage: {
      padding: 0,
    },
    registerContainer: {
      width: '100%',
      padding: '20px',
      borderRadius: 0,
      boxShadow: 'none',
    },
  },
};

// Merge styles
const mergedStyles = { ...styles, ...mediaStyles };

// Register component

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [passwordMatchError, setPasswordMatchError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setPasswordMatchError('Password not match');
      return;
    }
    const newUser = new user(
      username,
      profilePicture || require('../assets/clown_kid.jpg'),
      'male',
      'I am Alice',
      email,
      new Date(),
      new Date(),
      []
    )
    // link to userdashboard
    navigate('/userdashboard', { state: { curUser: newUser } });
    
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setProfilePicture(URL.createObjectURL(files[0]));
    }
  };

  
  return (
      <div className="register-container">
        <h2 style={styles.h2}>Become a clown in a minute</h2>
        <form onSubmit={handleRegister} >
          {/* upload avatar button */}
          <div className="input-group upload-avatar"  style={styles.uploadAvatar}>
            <label htmlFor="profile-picture" style={styles.uploadAvatarLabel}>
             {/* set default avatar */}
              <img
                src={profilePicture || require('../assets/clown_kid.jpg')}
                alt="avatar"
                className="avatar-preview"
                style={styles.avatarPreview}
              />
            </label>
            <input
              type="file"
              id="profile-picture"
              accept="image/*"
              onChange={handleFileChange}
              style={styles.fileInput}
            />
          </div>

          <div className="input-group" style={styles.inputGroup}>
            <label htmlFor="username" style={styles.label}>Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={styles.input}
            />
          </div>

          <div className="input-group" style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </div>

          <div className="input-group" style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>

          <div className="input-group" style={styles.inputGroup}>
            <label htmlFor="confirm-password" style={styles.label}>Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={styles.input}
            />
                 {passwordMatchError && <div className="error-message">{passwordMatchError}</div>}
          </div>

          <button type="submit" style={styles.button}>Register</button>
        </form>
      </div>
    
  );
}

export default Register;
