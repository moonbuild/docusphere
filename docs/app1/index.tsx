import React from 'react';
import { Redirect } from '@docusaurus/router';

const App1Redirect: React.FC = () => {
  return <Redirect to="/docs/app1/intro" />;
};

export default App1Redirect;
