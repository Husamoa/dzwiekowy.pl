import styles from '../styles/TopBar.module.scss';
import React from "react";

interface IProps {
    phone: string;
    email: string;
}

const TopBar: React.FC<IProps> = ({ phone, email }) => {
    return (
        <div className={styles.TopBar}>
            <div className={styles.Container}>
                <div className={styles.InfoElement}>{email}</div>
                <div className={styles.InfoElement}>{phone}</div>
            </div>
        </div>
    );
}

export default TopBar;
