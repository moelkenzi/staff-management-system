export function EmployeeDetailsProfile() {
  return (
    <div className="min-h-screen bg-[#0b0e14] text-slate-200">
      <div className="max-w-7xl mx-auto p-6">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <div>
            <nav className="text-xs text-slate-400">
              <span>HRMS</span>
              <span className="mx-2">›</span>
              <span>Employees</span>
              <span className="mx-2">›</span>
              <span className="text-slate-200">Brooklyn Simmons</span>
            </nav>
            <h1 className="text-lg font-semibold mt-2">Employee Details</h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10">Export</button>
            <button className="px-3 py-2 rounded-xl bg-[#7c5cff] hover:bg-[#6b49ff] text-white">Edit Profile</button>
          </div>
        </div>

        {/* Header card */}
        <div className="mt-6 rounded-2xl bg-[#111827] border border-white/5 p-5">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-[#7c5cff] grid place-items-center font-semibold">BS</div>
            <div>
              <h2 className="font-semibold">Brooklyn Simmons</h2>
              <p className="text-xs text-slate-400">UI/UX Designer · Employee ID: EMP-0142</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-6 border-b border-white/10">
            <div className="flex gap-1 overflow-x-auto text-sm">
              <span className="px-3 py-2 rounded-t-lg bg-white/10 border-x border-t border-white/10">Profile</span>
              <span className="px-3 py-2 hover:bg-white/5">Personal</span>
              <span className="px-3 py-2 hover:bg-white/5">Professional</span>
              <span className="px-3 py-2 hover:bg-white/5">Documents</span>
              <span className="px-3 py-2 hover:bg-white/5">Projects</span>
              <span className="px-3 py-2 hover:bg-white/5">Attendance</span>
              <span className="px-3 py-2 hover:bg-white/5">Leaves</span>
            </div>
          </div>

          {/* Content grid */}
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              ['Department', 'Design'],
              ['Role', 'Senior Product Designer'],
              ['Manager', 'Courtney Henry'],
              ['Email', 'brooklyn.simmons@example.com'],
              ['Phone', '+252 61 123 4567'],
              ['Join Date', 'Apr 12, 2023'],
              ['Location', 'Kismaayo, Jubaland'],
              ['Employment Type', 'Full-time'],
              ['Status', 'Active']
            ].map(([label, value], i) => (
              <div key={i} className="rounded-xl bg-white/5 border border-white/10 p-4">
                <p className="text-[11px] uppercase tracking-wide text-slate-400">{label}</p>
                <p className="mt-1 text-sm">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
