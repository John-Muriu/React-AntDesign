// import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.
import AppHeader from './components/common/header'
import { Layout } from 'antd';
// import { getInputClassName } from 'antd/lib/input/Input';

const { Header } = Layout;


function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>

    </Layout>

  )



}

export default App;
