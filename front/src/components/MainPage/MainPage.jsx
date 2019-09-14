import React from 'react';
import styles from './MainPage.module.css'

function MainPage() {
  return (
    <div className={styles.container}>
        <input className={styles.userInput}></input>
        <button classname={styles.but} onClick={ addUser }>Add user</button>
    </div>
  );
}



export default MainPage;
