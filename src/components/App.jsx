import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import ProjectList from './ProjectsList';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import HomeButton from './HomeButton'; // Importa el componente
import '../styles/App.scss';
import NotFound from './NotFound';

function App() {
  return (
    <>
      <Header />
      <main>
        <HomeButton /> {/* Añade el botón de inicio aquí */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <div className="wrapper">
                <About />
              </div>
            }
          />
          <Route
            path="/projects"
            element={
              <ProjectList />
            }
          />
          <Route
            path="/contact"
            element={
              <Contact />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
