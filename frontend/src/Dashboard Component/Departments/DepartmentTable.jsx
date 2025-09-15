export function DepartmentTableUI() {
  return (
    <div className="min-h-screen bg-[#0e0f13] text-slate-200">
      {/* Topbar */}
      <header className="sticky top-0 z-30 bg-[#11131a] border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <div>
            <nav className="text-xs text-slate-500">All Departments ▸ Design Department</nav>
            <h1 className="text-lg font-semibold mt-1">Design Department</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <div className="relative w-64">
                <span className="absolute inset-y-0 left-3 grid place-items-center text-slate-500">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 104.35 11.86l3.27 3.27a.75.75 0 101.06-1.06l-3.27-3.27A6.75 6.75 0 0010.5 3.75zm-5.25 6.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0z" clipRule="evenodd"/></svg>
                </span>
                <input className="w-full rounded-xl bg-[#151824] border border-white/10 pl-10 pr-3 py-2.5 text-sm placeholder:text-slate-500 focus:outline-none" placeholder="Search" />
              </div>
            </div>
            <button className="rounded-xl bg-[#151824] border border-white/10 px-3 py-2 text-sm">🔔</button>
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 grid place-items-center text-white text-xs font-semibold">RA</div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-7xl px-4 py-6">
        {/* Controls */}
        <div className="flex flex-wrap items-center gap-3 justify-between">
          <div className="relative w-64">
            <span className="absolute inset-y-0 left-3 grid place-items-center text-slate-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 104.35 11.86l3.27 3.27a.75.75 0 101.06-1.06l-3.27-3.27A6.75 6.75 0 0010.5 3.75zm-5.25 6.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0z" clipRule="evenodd"/></svg>
            </span>
            <input className="w-full rounded-xl bg-[#11131a] border border-white/10 pl-10 pr-3 py-2.5 text-sm placeholder:text-slate-500 focus:outline-none" placeholder="Search" />
          </div>

          <div className="flex items-center gap-2">
            <button className="rounded-lg bg-violet-600 px-3 py-2 text-sm font-semibold text-white">Add New Employee</button>
            <button className="rounded-lg bg-[#11131a] border border-white/10 px-3 py-2 text-sm">Filter</button>
          </div>
        </div>

        {/* Table */}
        <div className="mt-5 overflow-hidden rounded-2xl border border-white/5 bg-[#11131a]">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-slate-400">
                  <th className="px-4 py-3 font-medium">Employee ID</th>
                  <th className="px-4 py-3 font-medium">Employee Name</th>
                  <th className="px-4 py-3 font-medium">Designation</th>
                  <th className="px-4 py-3 font-medium">Type</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {/* Row 1 */}
                <tr>
                  <td className="px-4 py-3 text-slate-400">345271203</td>
                  <td className="px-4 py-3">Darlene Robertson</td>
                  <td className="px-4 py-3 text-slate-300">Lead UI/UX Designer</td>
                  <td className="px-4 py-3">Office</td>
                  <td className="px-4 py-3"><span className="rounded-full bg-sky-400/10 text-sky-300 px-2 py-1 text-xs">Remote</span></td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2 text-slate-400">
                      <button className="hover:text-white" title="View">👁️</button>
                      <button className="hover:text-white" title="Edit">✏️</button>
                      <button className="hover:text-white" title="Delete">🗑️</button>
                    </div>
                  </td>
                </tr>
                {/* Row 2 */}
                <tr>
                  <td className="px-4 py-3 text-slate-400">681974845</td>
                  <td className="px-4 py-3">Floyd Miles</td>
                  <td className="px-4 py-3 text-slate-300">Lead UI/UX Designer</td>
                  <td className="px-4 py-3">Office</td>
                  <td className="px-4 py-3"><span className="rounded-full bg-purple-400/10 text-purple-300 px-2 py-1 text-xs">Remote</span></td>
                  <td className="px-4 py-3"><div className="flex items-center gap-2 text-slate-400"><button className="hover:text-white">👁️</button><button className="hover:text-white">✏️</button><button className="hover:text-white">🗑️</button></div></td>
                </tr>
                {/* Row 3 */}
                <tr>
                  <td className="px-4 py-3 text-slate-400">453677842</td>
                  <td className="px-4 py-3">Cody Fisher</td>
                  <td className="px-4 py-3 text-slate-300">Sr. UI/UX Designer</td>
                  <td className="px-4 py-3">Office</td>
                  <td className="px-4 py-3"><span className="rounded-full bg-purple-400/10 text-purple-300 px-2 py-1 text-xs">Remote</span></td>
                  <td className="px-4 py-3"><div className="flex items-center gap-2 text-slate-400"><button className="hover:text-white">👁️</button><button className="hover:text-white">✏️</button><button className="hover:text-white">🗑️</button></div></td>
                </tr>
                {/* Row 4 */}
                <tr>
                  <td className="px-4 py-3 text-slate-400">345312231</td>
                  <td className="px-4 py-3">Dianne Russell</td>
                  <td className="px-4 py-3 text-slate-300">UI/UX Designer</td>
                  <td className="px-4 py-3">Office</td>
                  <td className="px-4 py-3"><span className="rounded-full bg-purple-400/10 text-purple-300 px-2 py-1 text-xs">Remote</span></td>
                  <td className="px-4 py-3"><div className="flex items-center gap-2 text-slate-400"><button className="hover:text-white">👁️</button><button className="hover:text-white">✏️</button><button className="hover:text-white">🗑️</button></div></td>
                </tr>
                {/* Row 5 */}
                <tr>
                  <td className="px-4 py-3 text-slate-400">453678891</td>
                  <td className="px-4 py-3">Savannah Nguyen</td>
                  <td className="px-4 py-3 text-slate-300">UI/UX Designer</td>
                  <td className="px-4 py-3">Office</td>
                  <td className="px-4 py-3"><span className="rounded-full bg-purple-400/10 text-purple-300 px-2 py-1 text-xs">Remote</span></td>
                  <td className="px-4 py-3"><div className="flex items-center gap-2 text-slate-400"><button className="hover:text-white">👁️</button><button className="hover:text-white">✏️</button><button className="hover:text-white">🗑️</button></div></td>
                </tr>
                {/* Row 6 */}
                <tr>
                  <td className="px-4 py-3 text-slate-400">009918409</td>
                  <td className="px-4 py-3">Jacob Jones</td>
                  <td className="px-4 py-3 text-slate-300">UI/UX Designer</td>
                  <td className="px-4 py-3">Office</td>
                  <td className="px-4 py-3"><span className="rounded-full bg-purple-400/10 text-purple-300 px-2 py-1 text-xs">Remote</span></td>
                  <td className="px-4 py-3"><div className="flex items-center gap-2 text-slate-400"><button className="hover:text-white">👁️</button><button className="hover:text-white">✏️</button><button className="hover:text-white">🗑️</button></div></td>
                </tr>
                {/* Row 7 */}
                <tr>
                  <td className="px-4 py-3 text-slate-400">238071222</td>
                  <td className="px-4 py-3">Marvin McKinney</td>
                  <td className="px-4 py-3 text-slate-300">UX Designer</td>
                  <td className="px-4 py-3">Remote</td>
                  <td className="px-4 py-3"><span className="rounded-full bg-sky-400/10 text-sky-300 px-2 py-1 text-xs">Remote</span></td>
                  <td className="px-4 py-3"><div className="flex items-center gap-2 text-slate-400"><button className="hover:text-white">👁️</button><button className="hover:text-white">✏️</button><button className="hover:text-white">🗑️</button></div></td>
                </tr>
                {/* Row 8 */}
                <tr>
                  <td className="px-4 py-3 text-slate-400">123450111</td>
                  <td className="px-4 py-3">Brooklyn Simmons</td>
                  <td className="px-4 py-3 text-slate-300">UI/UX Designer</td>
                  <td className="px-4 py-3">Office</td>
                  <td className="px-4 py-3"><span className="rounded-full bg-purple-400/10 text-purple-300 px-2 py-1 text-xs">Remote</span></td>
                  <td className="px-4 py-3"><div className="flex items-center gap-2 text-slate-400"><button className="hover:text-white">👁️</button><button className="hover:text-white">✏️</button><button className="hover:text-white">🗑️</button></div></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-4 py-3 text-xs text-slate-400 border-t border-white/5">
            <div className="flex items-center gap-2">
              <span>Showing</span>
              <select className="rounded-md bg-[#0f121a] border border-white/10 px-2 py-1 focus:outline-none"><option>10</option><option>20</option></select>
              <span>of 120 records</span>
            </div>
            <div className="flex items-center gap-1">
              <button className="h-8 w-8 rounded-lg bg-[#0f121a] border border-white/10">1</button>
              <button className="h-8 w-8 rounded-lg bg-[#0f121a] border border-white/10">2</button>
              <button className="h-8 w-8 rounded-lg bg-[#0f121a] border border-white/10">3</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}