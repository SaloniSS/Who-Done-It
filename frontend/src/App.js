import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import { Layout } from "antd";
import { Profiles } from "./components/Profiles";
import { MatchDetective } from "./pages/MatchDetective";
const { Header, Footer, Sider, Content } = Layout;

function App() {
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
