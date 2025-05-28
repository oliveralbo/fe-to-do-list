import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Layout } from "./components/Layout";

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Home />
      </Layout>
    </>
  );
}

export default App;
