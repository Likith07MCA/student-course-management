import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import Courses from './pages/Courses';
import About from './pages/About';

function NotFound() {
  return <section className="empty-state"><h2>Page not found</h2><p>Use the navigation above to return to CampusFlow.</p></section>;
}

export default function App() {
  return (
    <>
      <Header />
      <main className="page-shell">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="footer">CampusFlow · Student Course Management <span>React learning project</span></footer>
    </>
  );
}
