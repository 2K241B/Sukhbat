import './App.css';
import Main from './components/Main';
import Second from './components/About';
import Third from './components/Skills';
import Experience from './components/Experience';
import Work from './components/Work';
import Footer from './components/Contact';
import FooterSince from './components/FooterSince';

function App() {
  return (
    <div className="w-screen">
      <Main />
      <Second />
      <Third />
      <Experience />
      <Work />
      <Footer />
      <FooterSince />
    </div>
  );
}

export default App;
