import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from './config/constants';
import SplashScreen from './pages/SplashScreen';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Services from './pages/Services';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.splash} element={<SplashScreen />} />
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.about} element={<About />} />
        <Route path={ROUTES.experience} element={<Experience />} />
        <Route path={ROUTES.projects} element={<Projects />} />
        <Route path={ROUTES.services} element={<Services />} />
        <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

