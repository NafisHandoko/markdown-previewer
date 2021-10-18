import React from 'react';
import './App.css';
import Markdown from './Markdown/index';
import Head from './Head/index';

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