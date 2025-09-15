export function EmployeeDetailsProjects() {
  return (
    <div className="min-h-screen bg-[#0b0e14] text-slate-200">
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex items-center justify-between">
          <div>
            <nav className="text-xs text-slate-400">
              <span>HRMS</span><span className="mx-2">›</span>
              <span>Employees</span><span className="mx-2">›</span>
              <span className="text-slate-200">Brooklyn Simmons</span>
            </nav>
            <h1 className="text-lg font-semibold mt-2">Projects</h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10">Export</button>
            <button className="px-3 py-2 rounded-xl bg-[#7c5cff] hover:bg-[#6b49ff] text-white">Assign Project</button>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-[#111827] border border-white/5 p-5">
          <div className="border-b border-white/10">
            <div className="flex gap-1 overflow-x-auto text-sm">
              <span className="px-3 py-2 hover:bg-white/5">Profile</span>
              <span className="px-3 py-2 hover:bg-white/5">Personal</span>
              <span className="px-3 py-2 hover:bg-white/5">Professional</span>
              <span className="px-3 py-2 hover:bg-white/5">Documents</span>
              <span className="px-3 py-2 rounded-t-lg bg-white/10 border-x border-t border-white/10">Projects</span>
              <span className="px-3 py-2 hover:bg-white/5">Attendance</span>
              <span className="px-3 py-2 hover:bg-white/5">Leaves</span>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
            <table className="min-w-full text-sm">
              <thead className="bg-white/5">
                <tr className="text-left text-slate-400">
                  <th className="px-4 py-3">Project</th>
                  <th className="px-4 py-3">Role</th>
                  <th className="px-4 py-3">Start</th>
                  <th className="px-4 py-3">End</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  ['Solar Farm West', 'Designer', 'Jan 08, 2024', '—', 'Ongoing'],
                  ['CityMart POS', 'Lead Designer', 'Mar 12, 2024', 'Aug 20, 2024', 'Completed'],
                  ['MOEWR Portal', 'Contributor', 'Aug 28, 2024', '—', 'Blocked']
                ].map(([p, r, s, e, st], i) => (
                  <tr key={i} className="hover:bg-white/[0.03]">
                    <td className="px-4 py-3">{p}</td>
                    <td className="px-4 py-3 text-slate-300">{r}</td>
                    <td className="px-4 py-3 text-slate-400">{s}</td>
                    <td className="px-4 py-3 text-slate-400">{e}</td>
                    <td className="px-4 py-3">
                      <span className={
                        'px-2 py-1 rounded-lg text-xs border ' +
                        (st === 'Completed'
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                          : st === 'Blocked'
                          ? 'bg-rose-500/10 border-rose-500/30 text-rose-300'
                          : 'bg-amber-500/10 border-amber-500/30 text-amber-300')
                      }>
                        {st}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}