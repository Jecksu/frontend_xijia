import Login from "../components/login";
import { CSSProperties } from 'react';
import { useState } from 'react';
import Register from '../components/register';


const styles: { [key: string]: CSSProperties } = {
    mainPage: {
        display: 'flex',
        height: '100vh',
        justifyContent: 'space-between',
        backgroundColor: '#f0f0f0',
        fontFamily: 'Arial, sans-serif',
    },

    imageContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        height: '100%',
        backgroundImage: `url(${'./clown_kid.jpg'})`,
        backgroundSize: '100% 100%',
    },

    loginRegisterContainer: {
        flex: 1,
        maxWidth: 400,
        padding: 40,
        backgroundColor: '#b4cd26',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginRight: 50,
    },
};


const Main = () => {
    const [needRegister, setNeedRegister] = useState(false);

    const handleRegister = () => {
        setNeedRegister(true);
    }

    return (
        <div style={styles.mainPage}>
            <div style={styles.imageContainer}>
                <img src='./clown_kid.jpg' alt="Clown Kid" />
            </div >
            <div style={styles.loginRegisterContainer}>
                {needRegister ? <Register /> : <Login onRegister={handleRegister} />}
            </div>

        </div>
    );
};

export default Main;