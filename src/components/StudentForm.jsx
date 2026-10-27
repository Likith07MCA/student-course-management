import { useState } from 'react';

const blankForm = { name: '', email: '', department: 'Computer Science', year: '1st Year' };

export default function StudentForm({ onAdd }) {
  const [form, setForm] = useState(blankForm);
  const [error, setError] = useState('');

  function handleChange(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
    setError('');
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      setError('Please enter both a name and an email address.');
      return;
    }
    onAdd({ ...form, name: form.name.trim(), email: form.email.trim(), courseIds: [] });
    setForm(blankForm);
    setError('');
  }

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>Full name<input name="name" value={form.name} onChange={handleChange} placeholder="e.g. Sam Rao" required /></label>
        <label>Email address<input name="email" type="email" value={form.email} onChange={handleChange} placeholder="sam@example.com" required /></label>
        <label>Department<select name="department" value={form.department} onChange={handleChange}><option>Computer Science</option><option>Information Science</option><option>Electronics</option><option>Business Administration</option><option>Mechanical Engineering</option></select></label>
        <label>Academic year<select name="year" value={form.year} onChange={handleChange}><option>1st Year</option><option>2nd Year</option><option>3rd Year</option><option>4th Year</option></select></label>
      </div>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="button" type="submit">＋ Add student</button>
    </form>
  );
}
