import React from 'react';
import ReactDOM from 'react-dom';

//componentes imports
import Header from './components/header';
import HelloWorld from './components/HelloWorld';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<HelloWorld />, document.getElementById('app'));
