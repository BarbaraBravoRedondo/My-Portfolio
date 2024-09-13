//imports depencencies,images,styles*//
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import ProjectList from './ProjectsList';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import '../styles/App.scss';
import NotFound from './NotFound';
import BarChart from './BarChart';


import Home from './Home';

function App() {
  return (
    <>
      {' '}
      <Header />
      {/* <BarChart /> */}
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
            <div className="wrapper wrapper__structure">
              <ProjectList />
            </div>
          }
        />

        <Route
          path="/contact"
          element={
            <div className="wrapper wrapper__structure">
              <Contact />
            </div>
          }
        />
             <Route path="*" element={<NotFound />} /> 
      </Routes>{' '}
      <Footer />
    </>
  );
}

export default App;
