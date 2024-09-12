// 下来菜单，包括个人主页，设置，登出，

import React, { CSSProperties, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const styles: { [key: string]: CSSProperties } = {
    menu: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        position: 'absolute',
        backgroundColor: 'white',
        width: '150px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        zIndex: 9999,
        padding: '0 5px 5px 5px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    },
    userinfo: {
        padding: '4px',
        margin: '0 4px',
        border: '1px solid transparent',
        borderRadius: '4px',
        textAlign: 'center',
        color: '#333',
        backgroundColor: '#f0f0f0',
        fontSize: '14px',
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    menu_buttons: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: 'white',
        width: '100%',
        padding: '5px 0',
    },
    menuItem: {
        padding: '8px 12px',
        border: 'none',
        borderRadius: '3px',
        backgroundColor: 'transparent',
        color: '#555',
        fontSize: '20px',
        fontWeight: 'normal',
        cursor: 'pointer',
        textAlign: 'left',
       
        marginLeft: '20px',
    },
    menuItemHover: {
        backgroundColor: '#f5f5f5',
    }

}

function Menu() {
    const navigate = useNavigate();
    const location = useLocation();
    const curuser = location.state?.curUser;

    const handleLoginClick = () => {
        navigate('/');
    };

    if (!curuser) {
        return (
            <div style={styles.menu}>
                <button onClick={handleLoginClick} style={styles.menuItem}>login in</button>
            </div>
        );
    }

    const handleSettingClick = () => {
        navigate('/Setting');
    };
    const handleLogoutClick = () => {
        navigate('/');
    };

    const handleUserDashboardClick = () => {
        if (curuser) {
            navigate('/UserDashboard', { state: { curUser: curuser } });
        }
    }

    return (
        <div style={styles.menu}>
            <h1>Menu</h1>
            <div style={styles.userinfo}>
                <p>{curuser.username}</p>
            </div>
            <div  style={styles.menu_buttons}>
            <button onClick={handleUserDashboardClick} style={styles.menuItem}>profile</button>
            <button onClick={handleSettingClick} style={styles.menuItem}>setting</button>
            <button onClick={handleLogoutClick} style={styles.menuItem}>log out</button>
            </div>
            
        </div>
    );
}
export default Menu;