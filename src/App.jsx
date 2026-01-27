import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from './config/constants';
import SplashScreen from './pages/SplashScreen';
import Home from './pages/Home';
import BackgroundWeb from './components/common/BackgroundWeb';

// Lazy load non-critical components for better loading performance
const CustomCursor = lazy(() => import('./components/common/CustomCursor'));
const FloatingParticles = lazy(() => import('./components/common/FloatingParticles'));

function App() {
  return (
    <>
      <BackgroundWeb />
      <Suspense fallback={null}>
        <FloatingParticles />
        <CustomCursor />
      </Suspense>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.splash} element={<SplashScreen />} />
          <Route path={ROUTES.home} element={<Home />} />
          <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


