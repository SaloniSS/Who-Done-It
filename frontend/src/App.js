import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import { MatchDetective } from "./pages/MatchDetective";
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

  const getLevel = () => {
    switch (level) {
      case 0:
        return <Start />;
      case 1:
        return <LevelOne />;
      default:
        return <h2>error</h2>;
    }
  };

  return (
    <Router>
      <div className="App">
        <Layout>
          <Sider style={{ padding: 10 }}>
            <Profiles />
          </Sider>
          <Layout>
            <Header>Header aka name/lvl</Header>
            <Content>Content</Content>
            <Footer>enter answer here?</Footer>
          </Layout>
        </Layout>
        <Switch>
          <Route path="/lvl-1" exact>
            <MatchDetective />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
