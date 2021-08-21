import React from 'react';
import Content from './Content';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = (): React.ReactElement => (
  <div>
    <Header />
    <Sidebar />
    <Content />
  </div>
);

export default Layout;
