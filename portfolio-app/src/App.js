import './App.css';
import {
  About,
  Contact,
  Experience,
  Main,
  Skills,
  Work,
  Footer,
  Navbar,
} from './components';
function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
