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
        width: '180px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        zIndex: 9999,
        padding: '5px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
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
        transition: 'background-color 0.2s',
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
            <button onClick={handleUserDashboardClick} style={styles.menuItem}>profile</button>
            <button onClick={handleSettingClick} style={styles.menuItem}>setting</button>
            <button onClick={handleLogoutClick} style={styles.menuItem}>log out</button>
        </div>
    );
}
export default Menu;