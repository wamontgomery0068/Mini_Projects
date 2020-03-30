import React from 'react';
// WAM: ** ReactDOM has to do with rendering in the broswer. **
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

