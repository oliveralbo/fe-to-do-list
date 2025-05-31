import { Header } from './components/Layout/Header';
import { Home } from './components/Pages/Home';
import { Layout } from './components/Layout/Layout';

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
