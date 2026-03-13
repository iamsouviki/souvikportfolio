import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from './config/constants';
import SplashScreen from './pages/SplashScreen';
import Home from './pages/Home';
import BackgroundWeb from './components/common/BackgroundWeb';

function App() {
  return (
    <div style={{ maxWidth: '100vw', overflowX: 'hidden', position: 'relative' }}>
      <BackgroundWeb />
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.splash} element={<SplashScreen />} />
          <Route path={ROUTES.home} element={<Home />} />
          <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
