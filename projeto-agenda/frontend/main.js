import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/Login';
import Agenda from './modules/Agenda';

const login = new Login('.form-login');
const cadastro = new Agenda('.form-cadastro');

login.init();
cadastro.init();

// import './assets/css/style.css';
