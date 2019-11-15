import React from 'react';
import styles from './Header.module.css';
import icon from '../../assets/images/icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (
        <div className={styles.HeaderWrapper}>
            <img src={icon} alt="site-icon"/>
            <p>Ticklist</p>
            <FontAwesomeIcon icon={faBars} />
        </div>
    )
}
