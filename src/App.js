import "./App.css";
import "antd/dist/antd.css";
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Sider>Sider aka profiles</Sider>
        <Layout>
          <Header>Header aka name/lvl</Header>
          <Content>Content</Content>
          <Footer>enter answer here?</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
