import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Community = lazy(() => import('./pages/Community'));
const Main = lazy(() => import('./pages/Main'));
const UserDashboard = lazy(() => import('./pages/UserDashboard'));



function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/community" element={<Community />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;