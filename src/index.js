import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { Router, Route, hashHistory } from 'react-router'
import {observer} from 'mobx-react';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
