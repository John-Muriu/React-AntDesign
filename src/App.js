// import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.
import AppHeader from './components/common/header'
import AppHome from './views/home'

import { Layout } from 'antd';

// import { getInputClassName } from 'antd/lib/input/Input';

const { Header, Content } = Layout;


function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <AppHome />
      </Content>

    </Layout>

  )



}

export default App;
