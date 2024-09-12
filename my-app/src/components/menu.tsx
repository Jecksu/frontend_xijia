// 下来菜单，包括个人主页，设置，登出，

import React, { CSSProperties, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const styles: { [key: string]: CSSProperties } = {
    menu: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: 'white',
        width: '200px',
        height: '200px',
        border: '2px solid #ccc',
        borderRadius: '5px',
        zIndex: 9999, // Added to ensure it's displayed above all other elements
    },
    menuItem: {
        margin: '0px',
        padding: '10px',
        border: '1px solid transparent',
        borderRadius: '5px',
        width: '200px', // Changed to match the menu width
        backgroundColor: 'white',
        color: 'black',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
        boxSizing: 'border-box', // Added to ensure padding is included in width
        zIndex: 10000, // Added to ensure it's displayed above the menu container
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
                <button onClick={handleLoginClick} style={styles.menuItem}>登陆</button>
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
            <button onClick={handleUserDashboardClick} style={styles.menuItem}>个人主页</button>
            <button onClick={handleSettingClick} style={styles.menuItem}>设置</button>
            <button onClick={handleLogoutClick} style={styles.menuItem}>登出</button>
        </div>
    );
}
export default Menu;