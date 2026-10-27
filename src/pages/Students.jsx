import { useMemo, useState } from 'react';
import StudentForm from '../components/StudentForm';
import { useAppData } from '../context/AppContext';

export default function Students() {
  const { students, courses, addStudent, removeStudent } = useAppData();
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);
  const filteredStudents = useMemo(() => students.filter((student) =>
    `${student.name} ${student.email} ${student.department}`.toLowerCase().includes(search.toLowerCase())
  ), [students, search]);

  return (
    <>
      <section className="page-title"><div><p className="eyebrow">PEOPLE DIRECTORY</p><h1>Students</h1><p>Maintain student records and track course registrations.</p></div><button className="button" onClick={() => setShowForm((open) => !open)}>{showForm ? 'Cancel' : '＋ Add student'}</button></section>
      {showForm && <section className="panel"><div className="panel-heading"><h2>New student</h2><p>Fields marked by the browser as required must be completed.</p></div><StudentForm onAdd={(student) => { addStudent(student); setShowForm(false); }} /></section>}
      <section className="panel">
        <div className="list-toolbar"><div><h2>All students <span className="count">{filteredStudents.length}</span></h2><p className="muted">Search by name, email, or department.</p></div><input className="search-input" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="⌕  Search students…" aria-label="Search students" /></div>
        <div className="table-wrap"><table><thead><tr><th>Student</th><th>Department</th><th>Year</th><th>Enrolled courses</th><th>Action</th></tr></thead><tbody>
          {filteredStudents.map((student) => <tr key={student.id}><td><div className="student-cell"><span className="avatar">{student.name.split(' ').map((part) => part[0]).join('').slice(0, 2)}</span><span><strong>{student.name}</strong><small>{student.email}</small></span></div></td><td>{student.department}</td><td>{student.year}</td><td>{student.courseIds.length ? student.courseIds.map((id) => courses.find((course) => course.id === id)?.title).filter(Boolean).join(', ') : 'Not enrolled'}</td><td><button className="button button-danger button-small" onClick={() => { if (window.confirm(`Remove ${student.name}?`)) removeStudent(student.id); }}>Remove</button></td></tr>)}
          {filteredStudents.length === 0 && <tr><td colSpan="5" className="no-results">No students match that search.</td></tr>}
        </tbody></table></div>
      </section>
    </>
  );
}
