import React from 'react';
import ReactDom from 'react-dom';

import Clock from './clock';
import Weather from './weather';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDom.render(<Clock/>, root);
  // ReactDom.render(<Weather/>,root);
});
