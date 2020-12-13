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
import LevelTwo from "./components/LevelTwo";
import LevelThree from "./components/LevelThree";
import "./App.css";
import "antd/dist/antd.css";
const { Header, Sider, Content } = Layout;

function App() {
  const [level, setLevel] = useState(0);

  const nextLevel = () => {
    setLevel((lvl) => lvl + 1);
  };

  const prevLevel = () => {
    setLevel((lvl) => lvl - 1);
  };

  const getLevel = () => {
    switch (level) {
      case 0:
        return <Start nextLevel={nextLevel} />;
      case 1:
        return <LevelOne nextLevel={nextLevel} prevLevel={prevLevel} />;
      case 2:
        return <LevelTwo nextLevel={nextLevel} prevLevel={prevLevel} />;
      case 3:
        return <LevelThree nextLevel={nextLevel} prevLevel={prevLevel} />;
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
          <Header>Who Done It?</Header>
          <Content style={{ padding: 20 }}>{getLevel()}</Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
