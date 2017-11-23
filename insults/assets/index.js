import React from 'react';
import ReactDOM from 'react-dom';
import PageComponent from '../components/page.jsx';

const components = {
  'page': PageComponent,
};

ReactDOM.render(
  React.createElement(components[window.reactComponent], window.reactData),
  document.getElementById('react'),
)
