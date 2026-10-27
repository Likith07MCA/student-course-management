# CampusFlow — Student Course Management

A responsive React frontend for managing student records and course enrollments.

## Requirements
- Node.js 20 or newer
- npm

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Pages
- `/` — dashboard statistics, featured courses, recent students
- `/students` — search, add, and remove student records
- `/courses` — course catalog and student enrollment
- `/about` — explanation of the React concepts demonstrated

## How the requirements are demonstrated
| Requirement | Where to look |
|---|---|
| React project and structure | `src/`, `package.json`, `vite.config.js` |
| Reusable components | `src/components/` |
| Props | `StatCard.jsx`, `CourseCard.jsx`, `StudentForm.jsx` |
| State | `StudentForm.jsx`, `Students.jsx` |
| Forms and events | `StudentForm.jsx`, `CourseCard.jsx`, `Students.jsx` |
| Lists and keys | `Dashboard.jsx`, `Students.jsx`, `Courses.jsx`, `Header.jsx` |
| React Router | `src/App.jsx` and `Header.jsx` |
| Responsive CSS | `src/styles.css` |
| `useState` and `useEffect` | `AppContext.jsx`; local state in pages/forms |
| Context API | `src/context/AppContext.jsx` |
| Local persistence | `useEffect` saves shared data to `localStorage` |

## Data and limitations
This is a client-side educational prototype. Data is saved in the browser's local storage, not on a server. It has no production authentication, authorization, server-side validation, or database. Course enrollment is demonstrated locally.

## Suggested commit history
Create commits in small, meaningful increments as you build or review the project. Example messages:

1. `chore: scaffold Vite React application`
2. `feat: add shared student and course context`
3. `feat: build reusable student and course components`
4. `feat: add dashboard and router navigation`
5. `feat: add student form search and enrollment`
6. `style: make pages responsive`
7. `docs: explain React concepts and setup`

The ZIP contains a suggested sequence only; create actual commits with Git commands.
