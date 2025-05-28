import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Layout } from "./components/Layout";

function App() {
  return (
    <div>
      <Header />
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
