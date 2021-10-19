import React from 'react';
import './App.css';
import Markdown from './components/Markdown/index';
import Head from './components/Head/index';

function App() {
  return (
    <>
      <Head />
      <div className="container">
        <Markdown />
      </div>
    </>
  );
}

export default App;