export default function CourseCard({ course, onEnroll, studentOptions = [] }) {
  return (
    <article className="course-card">
      <div className="course-card-head"><span className="course-category">{course.category}</span><span className="course-id">{course.id}</span></div>
      <h3>{course.title}</h3>
      <p className="muted">Instructor · {course.instructor}</p>
      <div className="course-meta"><span>◷ {course.duration}</span><span>♙ {course.students} enrolled</span></div>
      {onEnroll && studentOptions.length > 0 && (
        <form className="enroll-form" onSubmit={(event) => {
          event.preventDefault();
          const studentId = event.currentTarget.elements.studentId.value;
          if (studentId) onEnroll(studentId, course.id);
          event.currentTarget.reset();
        }}>
          <label className="sr-only" htmlFor={`student-${course.id}`}>Choose student to enroll</label>
          <select id={`student-${course.id}`} name="studentId" defaultValue="">
            <option value="">Enroll a student…</option>
            {studentOptions.map((student) => <option key={student.id} value={student.id}>{student.name}</option>)}
          </select>
          <button className="button button-small" type="submit">Enroll</button>
        </form>
      )}
    </article>
  );
}
