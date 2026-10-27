const concepts = [
  ['Reusable components', 'Header, StatCard, StudentForm, and CourseCard are separate components. Props pass data and callbacks into them.'],
  ['Props and state', 'CourseCard and StatCard receive props; form inputs and search controls use local state.'],
  ['Hooks', 'useState manages interactive values, useEffect persists shared data, and useMemo avoids recalculating the filtered student list on unrelated renders.'],
  ['Context API', 'AppProvider shares student/course records and actions across pages without passing props through every route.'],
  ['Router and lists', 'React Router switches pages without full-page navigation. Lists use stable record IDs as React keys.'],
  ['Events and forms', 'Submit and change handlers update state; the form prevents a page reload and validates required values.']
];

export default function About() {
  return (
    <>
      <section className="page-title"><div><p className="eyebrow">ABOUT THIS PROJECT</p><h1>Built to learn React</h1><p>A compact demonstration of common frontend patterns.</p></div></section>
      <section className="concept-grid">{concepts.map(([title, description], index) => <article className="concept-card" key={title}><span className="concept-number">{String(index + 1).padStart(2, '0')}</span><h2>{title}</h2><p>{description}</p></article>)}</section>
      <section className="panel"><h2>Important project notes</h2><ul className="notes-list"><li>This is a frontend demo; it has no secure login or server-side database.</li><li>Data is stored in the current browser's local storage. Clearing browser storage resets demo data.</li><li>Before real deployment, add a backend API, server-side validation, authentication, authorization, and automated tests.</li></ul></section>
    </>
  );
}
