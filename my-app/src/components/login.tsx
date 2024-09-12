import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { CSSProperties } from 'react';

const styles: { [key: string]: CSSProperties } = {

  h2: {
    fontSize: 40,
    color: '#333',
    marginBottom: 30,
    textAlign: 'left',
  },
  
  inputGroup: {
    marginBottom: 20,
    textAlign: 'left',
  },
  
  label: {
    display: 'block',
    marginBottom: 8,
    fontSize: 30,
    color: '#555',
  },
  
  input: {
    width: '100%',
    padding: 12,
    border: '1px solid #ddd',
    borderRadius: 5,
    fontSize: 20,
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
    padding: 12,
    backgroundColor: '#0000ff',
    color: '#4CAF50',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: 5,
    fontSize: 20,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginTop: 10,
  },
  
  buttonHover: {
    backgroundColor: '#45a049',
  },
  
  registerBtn: {
    fontSize: 20,
    width: '100%',
    padding: 12,
    backgroundColor: 'transparent',
    color: '#0000ff',
    fontWeight: 'bold',
    border: '4px solid #4CAF50',
    marginTop: 15,
  },
  
  registerBtnHover: {
    backgroundColor: '#4CAF50',
    color: 'white',
  },
};

// Media query styles
const mediaStyles = {
  '@media (max-width: 768px)': {
    loginPage: {
      flexDirection: 'column' as const,
      alignItems: 'center',
    },
    imageContainer: {
      width: '100%',
      marginBottom: 20,
    },
    loginContainer: {
      marginRight: 0,
      width: '100%',
      padding: 20,
    },
  },
};

// Merge styles
const mergedStyles = { ...styles, ...mediaStyles };

function Login(props: {onRegister: () => void}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // navigate to profiles page when login successfully
    navigate('/community');
  };

  return (
      <div className="login-container" style={styles.loginContainer}>
        <h1 style={styles.h1}>Clown world</h1>
       
        <form onSubmit={handleLogin}>
          <div className="input-group" style={styles.inputGroup}>
            <label htmlFor="username" style={styles.label}>ID</label>
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
            <label htmlFor="password" style={styles.label}>password</label>
            <input
              type="password"
              id="password"      
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>Lets Go</button>
        </form>

        {/* register button */}
        <button className="register-btn" onClick={()=>props.onRegister()} style={styles.registerBtn}>
          sign up
        </button>
      </div>
    
  );
}

export default Login;
