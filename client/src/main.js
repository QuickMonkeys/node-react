import React from 'react';
import {render} from 'react-dom';

import "../css/main.css";
import "bootstrap-webpack";

import User from './components/user.jsx';

import {orderBy} from "./lib/orderBy.js";

render(<User data={orderBy(require("json!./data/users.json"))}/>, document.querySelector('#content'));
