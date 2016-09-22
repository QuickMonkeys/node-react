import React from 'react';
import {render} from 'react-dom';

import "../css/main.css";
import "bootstrap-webpack";

import User from './components/user.jsx';

//import {orderBy, byFirstName} from "./lib/orderBy.js";

//const data = orderBy(require("json!./data/users.json"));
//const data = orderBy(require("json!./data/users.json"), byFirstName);

render(<User/>, document.querySelector('#content'));
