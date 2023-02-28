import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Header = React.lazy(() => import('./components/shared/Header'));

const Home = React.lazy(() => import('./pages/Home'));
const Login = React.lazy(() => import('./pages/Login'));
const Signup = React.lazy(() => import('./pages/Signup'));
const Film = React.lazy(() => import('./pages/Film'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/film/:id" element={<Header />} />
        </Routes>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/film/:id" element={<Film />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
