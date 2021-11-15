import React from 'react';
import './App.css';
import Markdown from './components/Markdown/index';
import Head from './components/Head/index';
import {Provider} from 'react-redux';
import store from './store/index';

function App() {
  return (
    <Provider store={store}>
      <Head />
      <div className="container">
        <Markdown />
      </div>
    </Provider>
  );
}

export default App;