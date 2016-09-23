import React from 'react';
import {render} from 'react-dom';

import "../css/main.css";
import "bootstrap-webpack";

import User from './components/user.jsx';

render(<User/>, document.querySelector('#content'));
