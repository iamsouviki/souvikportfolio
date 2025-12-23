import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from './config/constants';
import SplashScreen from './pages/SplashScreen';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.splash} element={<SplashScreen />} />
        <Route path={ROUTES.home} element={<Home />} />
        <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

