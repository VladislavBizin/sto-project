import React from 'react';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import UserCard from './components/UserCard/UserCard';

function App() {
  return (
    <div className="App">
      <MainPage/>
      <UserCard/>      
    </div>
  );
}

export default App;
