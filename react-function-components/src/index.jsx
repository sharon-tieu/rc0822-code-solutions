import React from 'react';
import ReactDOM from 'react-dom/client';

function CustomButton() {
  return <button>click me!</button>;
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
// const element = <CustomButton />;
// root.render(element);
root.render(<CustomButton />);
