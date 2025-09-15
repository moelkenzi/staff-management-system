export default function AllEmployeesDarkUI() {
  return (
    <div className="min-h-screen bg-[#0e0f13] text-slate-200">
      {/* Topbar */}
      <header className="border-b border-white/5 bg-[#0e0f13]">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold">All Employees</h1>
            <p className="text-xs text-slate-400 mt-0.5">All Employee Information</p>
          </div>

          <div className="flex items-center gap-3">
            {/* Search top-right */}
            <div className="relative hidden md:block">
              <input
                className="w-72 rounded-xl bg-[#141722] text-slate-200 border border-white/10 pl-10 pr-3 py-2.5 text-sm placeholder:text-slate-500 focus:outline-none"
                placeholder="Search"
              />
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>

            {/* Bell */}
            <button className="grid place-items-center h-10 w-10 rounded-xl border border-white/10 bg-[#141722] hover:bg-white/5">
              <svg className="h-4 w-4 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 01-3.46 0" />
              </svg>
            </button>

            {/* User */}
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#141722] px-2 py-1.5">
              <img className="h-8 w-8 rounded-full object-cover" src="https://i.pravatar.cc/48?img=13" alt="" />
              <div className="leading-tight">
                <p className="text-sm font-medium">Robert Allen</p>
                <p className="text-[11px] text-slate-400 -mt-0.5">HR Manager</p>
              </div>
              <svg className="h-4 w-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
            </div>
          </div>
        </div>
      </header>

      {/* Actions row */}
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:w-80">
            <input
              className="w-full rounded-xl bg-[#141722] text-slate-200 border border-white/10 pl-10 pr-3 py-2.5 text-sm placeholder:text-slate-500 focus:outline-none"
              placeholder="Search"
            />
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>

          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white shadow hover:opacity-95">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-white/20">+</span>
              Add New Employee
            </button>
            <button className="rounded-xl border border-white/10 bg-[#141722] px-3 py-2.5 text-sm text-slate-200 shadow-sm hover:bg-white/5">
              <span className="inline-flex items-center gap-2">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12 10 19 14 21 14 12 22 3"/></svg>
                Filter
              </span>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="mt-3 overflow-hidden rounded-2xl border border-white/10 bg-[#10131b] shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-white/5 text-slate-400">
                <tr>
                  <th className="px-4 py-3 font-medium">Employee Name</th>
                  <th className="px-4 py-3 font-medium">Employee ID</th>
                  <th className="px-4 py-3 font-medium">Department</th>
                  <th className="px-4 py-3 font-medium">Designation</th>
                  <th className="px-4 py-3 font-medium">Type</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium text-right">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-white/5">
                {[
                  ['Darlene Robertson','345321231','Design','UI/UX Designer','Office','Permanent','DR','bg-fuchsia-500'],
                  ['Floyd Miles','987890345','Developement','PHP Developer','Office','Permanent','FM','bg-amber-500'],
                  ['Cody Fisher','453367122','Sales','Sales Manager','Office','Permanent','CF','bg-sky-500'],
                  ['Dianne Russell','345321231','Sales','BDM','Remote','Permanent','DR','bg-emerald-500'],
                  ['Savannah Nguyen','453677881','Design','Design Lead','Office','Permanent','SN','bg-violet-500'],
                  ['Jacob Jones','009918765','Developement','Python Developer','Remote','Permanent','JJ','bg-indigo-500'],
                ].map((r, i) => (
                  <tr key={i} className="hover:bg-white/5">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className={`h-9 w-9 rounded-full ${r[7]} text-white grid place-items-center text-xs font-semibold`}>{r[6]}</div>
                        <div>
                          <p className="font-medium text-slate-200">{r[0]}</p>
                          <p className="text-[11px] text-slate-500">{r[3]}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-slate-300">{r[1]}</td>
                    <td className="px-4 py-3 text-slate-300">{r[2]}</td>
                    <td className="px-4 py-3 text-slate-300">{r[3]}</td>
                    <td className="px-4 py-3 text-slate-300">{r[4]}</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center rounded-full bg-indigo-500/15 px-2.5 py-1 text-xs font-semibold text-indigo-300 ring-1 ring-inset ring-indigo-500/30">
                        {r[5]}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-3 text-slate-400">
                        <button className="p-2 rounded-lg hover:bg-white/5" title="View">
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z"/><circle cx="12" cy="12" r="3"/></svg>
                        </button>
                        <button className="p-2 rounded-lg hover:bg-white/5" title="Edit">
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>
                        </button>
                        <button className="p-2 rounded-lg hover:bg-white/5" title="Delete">
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
                        </button>
                      </div>
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
