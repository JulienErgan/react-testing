import React from 'react';
import ReactDOM from 'react-dom';

// components
import Hello from './components/hello';

import '../assets/stylesheets/application.scss';

// const Hello = ({ name }) => {
//   return (
//     <div>
//       Hello,
//       {name}
//     </div>
//   );
// };

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name={["Saki", "Julien"]}/>, root);
}
