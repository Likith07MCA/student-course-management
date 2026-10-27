import CourseCard from '../components/CourseCard';
import { useAppData } from '../context/AppContext';

export default function Courses() {
  const { courses, students, enrollStudent } = useAppData();
  return (
    <>
      <section className="page-title"><div><p className="eyebrow">LEARNING CATALOG</p><h1>Courses</h1><p>Explore available courses and enroll students.</p></div><span className="pill">{courses.length} courses available</span></section>
      <div className="notice"><strong>Tip:</strong> Choose a student in a course card to add an enrollment. A student cannot be enrolled in the same course twice.</div>
      <section className="course-grid course-grid-all">
        {courses.map((course) => <CourseCard key={course.id} course={{ ...course, students: students.filter((student) => student.courseIds.includes(course.id)).length }} studentOptions={students.filter((student) => !student.courseIds.includes(course.id))} onEnroll={enrollStudent} />)}
      </section>
    </>
  );
}
