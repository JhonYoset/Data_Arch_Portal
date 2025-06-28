import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Team from './pages/Team';
import TeamMember from './pages/TeamMember';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Announcements from './pages/Announcements';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team/:id" element={<TeamMember />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/announcements" element={<Announcements />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;