/*import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";*/
import "./App.css";
import "antd/dist/antd.css";
import { Layout } from "antd";
import { Profiles } from "./components/Profiles";
import { useState } from "react";
import { Start } from "./components/Start";
import { LevelOne } from "./components/LevelOne";
import "./App.css";
import "antd/dist/antd.css";
const { Header, Footer, Sider, Content } = Layout;

function App() {
  const [level, setLevel] = useState(0);

  const nextLevel = () => {
    setLevel((lvl) => lvl + 1);
  };

  const getLevel = () => {
    switch (level) {
      case 0:
        return <Start nextLevel={nextLevel} />;
      case 1:
        return <LevelOne nextLevel={nextLevel} />;
      default:
        return <h2>error</h2>;
    }
  };

  return (
    <div className="App">
      <Layout>
        <Sider style={{ padding: 10 }}>
          <Profiles />
        </Sider>
        <Layout>
          <Header>Header aka name/lvl</Header>
          <Content style={{ padding: 20 }}>{getLevel()}</Content>
          <Footer>enter answer here?</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
