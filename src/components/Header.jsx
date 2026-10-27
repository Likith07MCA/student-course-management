import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Dashboard', end: true },
  { to: '/students', label: 'Students' },
  { to: '/courses', label: 'Courses' },
  { to: '/about', label: 'About' }
];

export default function Header() {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <NavLink to="/" className="brand"><span className="brand-mark">C</span><span>CampusFlow</span></NavLink>
        <nav aria-label="Main navigation">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
