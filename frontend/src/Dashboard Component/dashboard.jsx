// Single React component — UI only. No imports, no props, no logic.
export default function HRMSDashboardDark() {
  return (
    <div className="min-h-screen bg-[#0d0f16] text-slate-200 [--brand:#7C3AED] [--ink:#E5E7EB]">
      {/* Topbar */}
      <header className="sticky top-0 z-40 bg-[#0f1119]/80 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-[var(--brand)] grid place-items-center text-white font-bold">HR</div>
          <div className="mr-auto">
            <p className="text-xs text-slate-400">Hello Robert 👋</p>
            <h1 className="text-base font-semibold text-[var(--ink)]">Good Morning</h1>
          </div>
          <div className="hidden md:flex items-center bg-[#0f1119] border border-white/10 rounded-xl px-3 py-2 gap-2 w-72">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-slate-400"><circle cx="11" cy="11" r="7"/><path d="M21 21 16.65 16.65"/></svg>
            <input className="w-full bg-transparent outline-none text-sm placeholder:text-slate-500" placeholder="Search" />
          </div>
          <button className="grid place-items-center h-10 w-10 rounded-xl border border-white/10 bg-[#0f1119] hover:bg-white/5">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 text-slate-300"><path d="M12 22a2 2 0 0 0 2-2H10a2 2 0 0 0 2 2Z"/><path d="M8 10a4 4 0 1 1 8 0v4a4 4 0 0 0 1.2 2.8l.8.8H6l.8-.8A4 4 0 0 0 8 14Z"/></svg>
          </button>
          <div className="flex items-center gap-2 ml-1">
            <div className="h-9 w-9 rounded-full bg-violet-900/40 text-violet-300 grid place-items-center text-xs font-semibold">RA</div>
            <div className="hidden sm:block leading-tight">
              <div className="text-sm font-medium">Robert Allen</div>
              <div className="text-xs text-slate-400">HR Manager</div>
            </div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-slate-400"><path d="m6 9 6 6 6-6"/></svg>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* KPI Cards */}
        <section className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <div className="bg-[#121421] rounded-2xl border border-white/10 shadow-sm p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400">Total Employees</p>
                <div className="text-2xl font-semibold mt-1 text-white">560</div>
                <p className="text-[10px] text-slate-500 mt-1">Update: July 15, 2025</p>
              </div>
              <div className="h-10 w-10 rounded-xl bg-[var(--brand)]/15 text-[var(--brand)] grid place-items-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5"><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
            </div>
            <div className="mt-3 text-[10px] inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-400/10 text-emerald-300 border border-emerald-400/20">+2%</div>
          </div>

          <div className="bg-[#121421] rounded-2xl border border-white/10 shadow-sm p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400">Total Applicants</p>
                <div className="text-2xl font-semibold mt-1 text-white">1050</div>
                <p className="text-[10px] text-slate-500 mt-1">Update: July 14, 2025</p>
              </div>
              <div className="h-10 w-10 rounded-xl bg-[var(--brand)]/15 text-[var(--brand)] grid place-items-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5"><path d="M20 7H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"/><path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/></svg>
              </div>
            </div>
            <div className="mt-3 text-[10px] inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-400/10 text-emerald-300 border border-emerald-400/20">+6%</div>
          </div>

          <div className="bg-[#121421] rounded-2xl border border-white/10 shadow-sm p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400">Today Attendance</p>
                <div className="text-2xl font-semibold mt-1 text-white">470</div>
                <p className="text-[10px] text-slate-500 mt-1">Update: July 15, 2025</p>
              </div>
              <div className="h-10 w-10 rounded-xl bg-[var(--brand)]/15 text-[var(--brand)] grid place-items-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5"><path d="M3 12h18"/><path d="M12 3v18"/></svg>
              </div>
            </div>
            <div className="mt-3 text-[10px] inline-flex items-center gap-1 px-2 py-0.5 rounded bg-rose-400/10 text-rose-300 border border-rose-400/20">-1%</div>
          </div>

          <div className="bg-[#121421] rounded-2xl border border-white/10 shadow-sm p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400">Total Projects</p>
                <div className="text-2xl font-semibold mt-1 text-white">250</div>
                <p className="text-[10px] text-slate-500 mt-1">Update: July 15, 2025</p>
              </div>
              <div className="h-10 w-10 rounded-xl bg-[var(--brand)]/15 text-[var(--brand)] grid place-items-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
              </div>
            </div>
            <div className="mt-3 text-[10px] inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-400/10 text-emerald-300 border border-emerald-400/20">+4%</div>
          </div>
        </section>

        {/* Middle Row: Attendance Chart + Schedule */}
        <section className="grid lg:grid-cols-3 gap-4">
          {/* Attendance Overview (CSS bars) */}
          <div className="lg:col-span-2 bg-[#121421] rounded-2xl border border-white/10 shadow-sm p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-white">Attendance Overview</h3>
              <button className="text-xs px-2 py-1 rounded border border-white/10 bg-white/5 text-slate-300">Today</button>
            </div>
            <div className="h-64 p-4 grid grid-cols-7 gap-4 items-end">
              <div className="space-y-1"><div className="h-16 rounded-md bg-rose-500/80"/><div className="h-10 rounded-md bg-amber-400/80"/><div className="h-28 rounded-md bg-[var(--brand)]"/></div>
              <div className="space-y-1"><div className="h-12 rounded-md bg-rose-500/80"/><div className="h-9 rounded-md bg-amber-400/80"/><div className="h-32 rounded-md bg-[var(--brand)]"/></div>
              <div className="space-y-1"><div className="h-14 rounded-md bg-rose-500/80"/><div className="h-8 rounded-md bg-amber-400/80"/><div className="h-28 rounded-md bg-[var(--brand)]"/></div>
              <div className="space-y-1"><div className="h-10 rounded-md bg-rose-500/80"/><div className="h-7 rounded-md bg-amber-400/80"/><div className="h-36 rounded-md bg-[var(--brand)]"/></div>
              <div className="space-y-1"><div className="h-12 rounded-md bg-rose-500/80"/><div className="h-9 rounded-md bg-amber-400/80"/><div className="h-32 rounded-md bg-[var(--brand)]"/></div>
              <div className="space-y-1"><div className="h-14 rounded-md bg-rose-500/80"/><div className="h-10 rounded-md bg-amber-400/80"/><div className="h-24 rounded-md bg-[var(--brand)]"/></div>
              <div className="space-y-1"><div className="h-16 rounded-md bg-rose-500/80"/><div className="h-8 rounded-md bg-amber-400/80"/><div className="h-20 rounded-md bg-[var(--brand)]"/></div>
            </div>
            <div className="mt-2 flex items-center gap-4 text-xs text-slate-400">
              <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[var(--brand)]"/> Present</span>
              <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-amber-400"/> Late</span>
              <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-rose-500"/> Absent</span>
            </div>
            <div className="mt-3 text-xs text-slate-500">Mon • Tue • Wed • Thu • Fri • Sat • Sun</div>
          </div>

          {/* Schedule */}
          <div className="bg-[#121421] rounded-2xl border border-white/10 shadow-sm p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-white">My Schedule</h3>
              <div className="h-8 w-8 rounded-lg border border-white/10 grid place-items-center text-slate-300 bg-white/5">📅</div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="font-medium text-white">July, 2025</div>
              <div className="flex items-center gap-2">
                <button className="h-7 w-7 grid place-items-center rounded-lg border border-white/10 bg-white/5">‹</button>
                <button className="h-7 w-7 grid place-items-center rounded-lg border border-white/10 bg-white/5">›</button>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-7 gap-2 text-center text-xs">
              <div className="text-slate-400">Su</div><div className="text-slate-400">Mo</div><div className="text-slate-400">Tu</div><div className="text-slate-400">We</div><div className="text-slate-400">Th</div><div className="text-slate-400">Fr</div><div className="text-slate-400">Sa</div>
              <div className="py-2 rounded-lg border border-white/10 bg-white/5"></div>
              <div className="py-2 rounded-lg border border-white/10 bg-white/5">1</div>
              <div className="py-2 rounded-lg border border-white/10 bg-white/5">2</div>
              <div className="py-2 rounded-lg border border-white/10 bg-white/5">3</div>
              <div className="py-2 rounded-lg border border-white/10 bg-white/5">4</div>
              <div className="py-2 rounded-lg border border-white/10 bg-white/5">5</div>
              <div className="py-2 rounded-lg border border-white/10 bg-white/5">6</div>
              <div className="py-2 rounded-lg border border-white/10 bg-white/5">7</div>
              <div className="py-2 rounded-lg border border-white/10 bg-white/5">8</div>
              <div className="py-2 rounded-lg border border-white/10 bg-white/5">9</div>
              <div className="py-2 rounded-lg border border-white/10 bg-white/5">10</div>
              <div className="py-2 rounded-lg border border-white/10 bg-white/5">11</div>
              <div className="py-2 rounded-lg border border-white/10 bg-white/5">12</div>
              <div className="py-2 rounded-lg border border-white/10 bg-white/5">13</div>
              <div className="py-2 rounded-lg border bg-[var(--brand)] text-white">14</div>
              <div className="py-2 rounded-lg border border-white/10 bg-white/5">15</div>
              <div className="py-2 rounded-lg border border-white/10 bg-white/5">16</div>
              <div className="py-2 rounded-lg border border-white/10 bg-white/5">17</div>
              <div className="py-2 rounded-lg border border-white/10 bg-white/5">18</div>
              <div className="py-2 rounded-lg border border-white/10 bg-white/5">19</div>
              <div className="py-2 rounded-lg border border-white/10 bg-white/5">20</div>
              <div className="py-2 rounded-lg border border-white/10 bg-white/5">21</div>
              <div className="py-2 rounded-lg border border-white/10 bg-white/5">22</div>
              <div className="py-2 rounded-lg border border-white/10 bg-white/5">23</div>
              <div className="py-2 rounded-lg border border-white/10 bg-white/5">24</div>
              <div className="py-2 rounded-lg border border-white/10 bg-white/5">25</div>
              <div className="py-2 rounded-lg border border-white/10 bg-white/5">26</div>
              <div className="py-2 rounded-lg border border-white/10 bg-white/5">27</div>
              <div className="py-2 rounded-lg border border-white/10 bg-white/5">28</div>
              <div className="py-2 rounded-lg border border-white/10 bg-white/5">29</div>
              <div className="py-2 rounded-lg border border-white/10 bg-white/5">30</div>
              <div className="py-2 rounded-lg border border-white/10 bg-white/5">31</div>
              <div></div><div></div><div></div>
            </div>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10"><div className="w-16 text-xs text-slate-400">09:30</div><div className="flex-1"><div className="font-medium text-white">UI/UX Designer Practical Task Review</div><div className="text-xs text-slate-400">Room 201</div></div></div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10"><div className="w-16 text-xs text-slate-400">12:00</div><div className="flex-1"><div className="font-medium text-white">Frontend Developer Resume Review</div><div className="text-xs text-slate-400">Remote</div></div></div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10"><div className="w-16 text-xs text-slate-400">01:30</div><div className="flex-1"><div className="font-medium text-white">Sales Manager Final HR Round</div><div className="text-xs text-slate-400">Room B</div></div></div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10"><div className="w-16 text-xs text-slate-400">11:00</div><div className="flex-1"><div className="font-medium text-white">TL Meeting</div><div className="text-xs text-slate-400">Zoom</div></div></div>
            </div>
          </div>
        </section>

        {/* Attendance Table */}
        <section className="bg-[#121421] rounded-2xl border border-white/10 shadow-sm">
          <div className="p-4 pb-0 flex items-center justify-between">
            <h3 className="font-semibold text-white">Attendance Overview</h3>
            <button className="text-xs rounded-lg border border-white/10 px-3 py-1.5 bg-white/5 text-slate-300">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-slate-400 border-b border-white/10">
                  <th className="px-4 py-3 font-medium">Employee Name</th>
                  <th className="px-4 py-3 font-medium">Designation</th>
                  <th className="px-4 py-3 font-medium">Type</th>
                  <th className="px-4 py-3 font-medium">Check In Time</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="px-4 py-3"><div className="flex items-center gap-3"><div className="h-8 w-8 rounded-full bg-violet-900/40 text-violet-300 grid place-items-center text-xs font-semibold">LW</div><div className="font-medium text-white">Loais Watson</div></div></td>
                  <td className="px-4 py-3 text-slate-300">Team Lead - Design</td>
                  <td className="px-4 py-3 text-slate-300">Office</td>
                  <td className="px-4 py-3 text-slate-300">09:27 AM</td>
                  <td className="px-4 py-3"><span className="border bg-emerald-400/10 text-emerald-300 border-emerald-400/20 px-2.5 py-1 rounded-full text-xs">On Time</span></td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="px-4 py-3"><div className="flex items-center gap-3"><div className="h-8 w-8 rounded-full bg-violet-900/40 text-violet-300 grid place-items-center text-xs font-semibold">DR</div><div className="font-medium text-white">Darline Robertson</div></div></td>
                  <td className="px-4 py-3 text-slate-300">Web Designer</td>
                  <td className="px-4 py-3 text-slate-300">Office</td>
                  <td className="px-4 py-3 text-slate-300">10:24 AM</td>
                  <td className="px-4 py-3"><span className="border bg-amber-400/10 text-amber-300 border-amber-400/20 px-2.5 py-1 rounded-full text-xs">Late</span></td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="px-4 py-3"><div className="flex items-center gap-3"><div className="h-8 w-8 rounded-full bg-violet-900/40 text-violet-300 grid place-items-center text-xs font-semibold">JJ</div><div className="font-medium text-white">Jacob Jones</div></div></td>
                  <td className="px-4 py-3 text-slate-300">Medical Assistant</td>
                  <td className="px-4 py-3 text-slate-300">Remote</td>
                  <td className="px-4 py-3 text-slate-300">—</td>
                  <td className="px-4 py-3"><span className="border bg-rose-400/10 text-rose-300 border-rose-400/20 px-2.5 py-1 rounded-full text-xs">Absent</span></td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="px-4 py-3"><div className="flex items-center gap-3"><div className="h-8 w-8 rounded-full bg-violet-900/40 text-violet-300 grid place-items-center text-xs font-semibold">KM</div><div className="font-medium text-white">Kathryn Murphy</div></div></td>
                  <td className="px-4 py-3 text-slate-300">Marketing Coordinator</td>
                  <td className="px-4 py-3 text-slate-300">Office</td>
                  <td className="px-4 py-3 text-slate-300">09:04 AM</td>
                  <td className="px-4 py-3"><span className="border bg-emerald-400/10 text-emerald-300 border-emerald-400/20 px-2.5 py-1 rounded-full text-xs">On Time</span></td>
                </tr>
                <tr>
                  <td className="px-4 py-3"><div className="flex items-center gap-3"><div className="h-8 w-8 rounded-full bg-violet-900/40 text-violet-300 grid place-items-center text-xs font-semibold">LA</div><div className="font-medium text-white">Leslie Alexander</div></div></td>
                  <td className="px-4 py-3 text-slate-300">Data Analyst</td>
                  <td className="px-4 py-3 text-slate-300">Office</td>
                  <td className="px-4 py-3 text-slate-300">09:12 AM</td>
                  <td className="px-4 py-3"><span className="border bg-emerald-400/10 text-emerald-300 border-emerald-400/20 px-2.5 py-1 rounded-full text-xs">On Time</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="py-6 text-center text-xs text-slate-500">© 2025 HRMS • Dark UI mockup (UI only)</footer>
    </div>
  );
}
