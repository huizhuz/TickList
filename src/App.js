import React from 'react';
import Header from './common/Header/Header';
import Folders from './containers/Folders/Folders'
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <style>
        @import url('https://fonts.googleapis.com/css?family=Julius+Sans+One|Quicksand:300,400,500,600&display=swap');
      </style>
      <Header></Header>
      <div className={styles.Content}>
        <Folders></Folders>
      </div>
    </div>
  );
}

export default App;
