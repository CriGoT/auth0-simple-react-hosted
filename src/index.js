import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

export function render(element, config) {
  ReactDOM.render(<App {...config} />, element);
};
