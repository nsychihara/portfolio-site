import './App.css';
import Header from './components/Header';
import Inicio from './components/Inicio';
import Competencias from './components/Competencias';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Inicio />
        <Competencias />
        <Projetos />
        <Contato />
      </main>
      <Footer />
    </>
  );
}

export default App;
