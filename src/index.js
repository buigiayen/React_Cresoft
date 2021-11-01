import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {Redict_Pages} from "./pages/index";
import Login from "./pages/login";
import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
      <Redict_Pages />
  </React.StrictMode>,
  document.getElementById('root')
);
