export default function AdminDashboard() {
    return (
      <div className="p-6 space-y-4">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <ul className="list-disc pl-6">
          <li><a href="/admin/hero">Manage Hero/About</a></li>
          <li><a href="/admin/education">Manage Education</a></li>
          <li><a href="/admin/experience">Manage Experience</a></li>
          <li><a href="/admin/projects">Manage Projects</a></li>
          <li><a href="/admin/achievements">Manage Achievements</a></li>
          <li><a href="/admin/skills">Manage Skills</a></li>
        </ul>
      </div>
    );
  }
  