import React from 'react';
import './App.scss';
import { Layout } from 'antd';
const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>你好，世界</Content>
    </Layout>
  );
}

export default App;
