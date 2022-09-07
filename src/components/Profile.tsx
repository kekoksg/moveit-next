import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/kekoksg.png" alt="Kelvin Souza Gonçalves" />
            <div>
                <strong>Kelvin S. Gonçalves</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    );
}