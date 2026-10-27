import { Link } from 'react-router-dom';
import { useAppData } from '../context/AppContext';
import StatCard from '../components/StatCard';
import CourseCard from '../components/CourseCard';

export default function Dashboard() {
  const { students, courses } = useAppData();
  const enrollmentCount = students.reduce((total, student) => total + student.courseIds.length, 0);
  const departments = new Set(students.map((student) => student.department)).size;

  return (
    <>
      <section className="hero">
        <div><p className="eyebrow">CAMPUS ADMINISTRATION</p><h1>Good day, Admin <span>✦</span></h1><p>Manage students, courses, and learning progress in one place.</p></div>
        <Link className="button button-light" to="/students">＋ Add a student</Link>
      </section>
      <section className="stats-grid" aria-label="Overview statistics">
        <StatCard label="Total students" value={students.length} detail="Registered" icon="♙" />
        <StatCard label="Active courses" value={courses.length} detail="Available" icon="▤" />
        <StatCard label="Enrollments" value={enrollmentCount} detail="Across all courses" icon="↗" />
        <StatCard label="Departments" value={departments} detail="Represented" icon="⌂" />
      </section>
      <section className="section-heading"><div><p className="eyebrow">YOUR CATALOG</p><h2>Featured courses</h2></div><Link className="text-link" to="/courses">View all courses →</Link></section>
      <section className="course-grid">
        {courses.slice(0, 3).map((course) => <CourseCard key={course.id} course={course} />)}
      </section>
      <section className="section-heading"><div><p className="eyebrow">RECENT RECORDS</p><h2>Students</h2></div><Link className="text-link" to="/students">Manage students →</Link></section>
      <div className="table-wrap"><table><thead><tr><th>Student</th><th>Department</th><th>Year</th><th>Courses</th></tr></thead><tbody>
        {students.slice(0, 4).map((student) => <tr key={student.id}><td><div className="student-cell"><span className="avatar">{student.name.split(' ').map((part) => part[0]).join('').slice(0, 2)}</span><span><strong>{student.name}</strong><small>{student.email}</small></span></div></td><td>{student.department}</td><td>{student.year}</td><td><span className="pill">{student.courseIds.length} courses</span></td></tr>)}
      </tbody></table></div>
    </>
  );
}
