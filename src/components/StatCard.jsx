export default function StatCard({ label, value, detail, icon }) {
  return (
    <article className="stat-card">
      <div className="stat-top"><span className="stat-icon" aria-hidden="true">{icon}</span><span className="stat-detail">{detail}</span></div>
      <p className="stat-label">{label}</p>
      <p className="stat-value">{value}</p>
    </article>
  );
}
