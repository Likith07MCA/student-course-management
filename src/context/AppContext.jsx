import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { initialCourses, initialStudents } from '../data/initialData';

const AppContext = createContext(null);
const STORAGE_KEY = 'campusflow-demo-v1';

function readSavedData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch {
    // If browser storage is unavailable or malformed, start with demo data.
  }
  return { students: initialStudents, courses: initialCourses };
}

export function AppProvider({ children }) {
  const [data, setData] = useState(readSavedData);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      // The app remains usable for the current session if storage is blocked.
    }
  }, [data]);

  const addStudent = (student) => {
    setData((current) => ({
      ...current,
      students: [{ ...student, id: `S${Date.now().toString().slice(-7)}` }, ...current.students]
    }));
  };

  const removeStudent = (studentId) => {
    setData((current) => ({
      ...current,
      students: current.students.filter((student) => student.id !== studentId)
    }));
  };

  const enrollStudent = (studentId, courseId) => {
    setData((current) => ({
      ...current,
      students: current.students.map((student) =>
        student.id === studentId && !student.courseIds.includes(courseId)
          ? { ...student, courseIds: [...student.courseIds, courseId] }
          : student
      ),
      courses: current.courses.map((course) =>
        course.id === courseId ? {
          ...course,
          students: current.students.filter((student) =>
            student.id === studentId ? !student.courseIds.includes(courseId) : student.courseIds.includes(courseId)
          ).length
        } : course
      )
    }));
  };

  const value = useMemo(() => ({
    students: data.students,
    courses: data.courses,
    addStudent,
    removeStudent,
    enrollStudent
  }), [data]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppData() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppData must be used inside AppProvider');
  return context;
}
