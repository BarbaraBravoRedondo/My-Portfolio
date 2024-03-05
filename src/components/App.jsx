//imports depencencies,images,styles*//
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import ProjectList from './ProjectsList';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import '../styles/App.scss';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className="wrapper">
              <Header />
              <About />
              <Footer />
            </div>
          }
        />
        <Route
          path="/projects"
          element={
            <div className="wrapper wrapper__structure">
              <Header />
              <ProjectList />
              <Footer />
            </div>
          }
        />

        <Route
          path="/contact"
          element={
            <div className="wrapper wrapper__structure">
              <Header />
              <Contact />
              <Footer />
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
