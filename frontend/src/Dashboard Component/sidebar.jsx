// Single self-contained React component. No imports, no props, no logic.
export default function HRMSSidebarDark() {
  return (
    <aside className="w-64 min-h-screen bg-[#0d0f16] p-3 text-slate-200 [--accent:#7C3AED]">
      <div className="sticky top-3">
        {/* Shell */}
        <div className="bg-[#121421] rounded-2xl border border-white/5 shadow-[0_10px_30px_-10px_rgb(0_0_0_/0.6)] flex flex-col min-h-[92vh]">
          {/* Brand */}
          <div className="px-5 py-4 flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl grid place-items-center text-white font-semibold shadow ring-1 ring-white/10"
                 style={{ background: "var(--accent)" }}>∞</div>
            <div>
              <div className="text-xs text-slate-400">HRMS</div>
              <div className="font-semibold tracking-wide">HRMS</div>
            </div>
          </div>

          {/* Nav */}
          <nav className="px-3 pb-3 text-sm space-y-1">
            {/* Active: Dashboard */}
            <div className="relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-7 w-1 rounded-full" style={{ background: "var(--accent)" }} />
              <a href="#" className="flex items-center gap-3 pl-4 pr-3 py-2.5 rounded-lg border bg-white/5 border-white/10 text-slate-100">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/></svg>
                <span>Dashboard</span>
              </a>
            </div>

            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-slate-300">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              <span>All Employees</span>
            </a>

            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-slate-300">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18"/><path d="M6 21V8h12v13"/><path d="M9 8V5a3 3 0 0 1 6 0v3"/></svg>
              <span>All Departments</span>
            </a>

            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-slate-300">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
              <span>Attendance</span>
            </a>

            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-slate-300">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1v22"/><path d="M17 5H9a4 4 0 0 0-4 4v0a4 4 0 0 0 4 4h6a4 4 0 0 1 0 8H6"/></svg>
              <span>Payroll</span>
            </a>

            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-slate-300">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
              <span>Jobs</span>
            </a>

            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-slate-300">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 14a4 4 0 1 0-8 0"/><circle cx="12" cy="8" r="4"/></svg>
              <span>Candidates</span>
            </a>

            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-slate-300">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M8 2v4M16 2v4M3 10h18"/></svg>
              <span>Leaves</span>
            </a>

            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-slate-300">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6h-7l-1-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Z"/><path d="M8 13h8"/><path d="M8 17h6"/></svg>
              <span>Holidays</span>
            </a>

            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-slate-300">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 11v4"/><path d="M4.93 4.93l14.14 14.14"/><circle cx="12" cy="12" r="9"/></svg>
              <span>Settings</span>
            </a>
          </nav>

          {/* Footer: Theme toggle */}
          <div className="mt-auto p-4">
            <div className="flex items-center gap-2 bg-white/5 rounded-xl border border-white/10 p-1">
              <button className="flex items-center gap-2 text-xs font-medium px-3 py-2 rounded-lg text-slate-300 hover:bg-white/10">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
                Light
              </button>
              <button className="flex items-center gap-2 text-xs font-medium px-3 py-2 rounded-lg text-white shadow-sm"
                      style={{ background: "var(--accent)" }}>
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/></svg>
                Dark
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
