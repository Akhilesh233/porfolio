import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact'
// import Skill from './components/Skill';
// import Project from './components/Project';
// import Admin from './components/Admin';
import { lazy } from 'react';

const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Skill = lazy(() => import('./components/Skill'));
const Project = lazy(() => import('./components/Project'));
const Admin = lazy(() => import('./components/Admin'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='skill' element={<Skill />} />
          <Route path='project' element={<Project />} />
          <Route path='admin' element={<Admin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
