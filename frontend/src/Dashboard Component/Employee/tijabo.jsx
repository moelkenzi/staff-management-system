// PayrollUI.jsx
export function PayrollUI() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100">
      {/* Topbar */}
      <header className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold">Payroll</h1>
          <p className="text-xs text-slate-400">All Employee Payroll</p>
        </div>

        <div className="hidden md:flex items-center gap-3 w-full max-w-md">
          <div className="flex items-center gap-2 bg-white/5 rounded-xl px-3 py-2 w-full">
            <svg className="h-4 w-4 text-slate-400" viewBox="0 0 24 24" fill="none">
              <path d="M21 21l-4.3-4.3m1.3-5.2a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
            <input className="bg-transparent outline-none text-sm placeholder:text-slate-500 w-full" placeholder="Search" />
          </div>
          <button className="h-9 w-9 grid place-items-center rounded-xl bg-white/5 hover:bg-white/10 transition">
            <svg className="h-4 w-4 text-slate-300" viewBox="0 0 24 24" fill="none">
              <path d="M12 22a2 2 0 002-2H10a2 2 0 002 2zm6-6V11a6 6 0 10-12 0v5l-2 2h16l-2-2z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="flex items-center gap-3 bg-white/5 rounded-2xl px-3 py-2">
            <div className="h-8 w-8 rounded-full bg-indigo-500 grid place-items-center text-white text-xs font-semibold">RA</div>
            <div className="hidden sm:block">
              <div className="text-sm">Robert Allen</div>
              <div className="text-[11px] text-slate-400">HR Manager</div>
            </div>
            <svg className="h-4 w-4 text-slate-400" viewBox="0 0 24 24" fill="none">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </header>

      {/* Toolbar */}
      <div className="px-6 py-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 bg-white/5 rounded-xl px-3 py-2 w-full max-w-sm">
          <svg className="h-4 w-4 text-slate-400" viewBox="0 0 24 24" fill="none">
            <path d="M21 21l-4.3-4.3m1.3-5.2a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
          <input className="bg-transparent outline-none text-sm placeholder:text-slate-500 w-full" placeholder="Search" />
        </div>
        <button className="inline-flex items-center gap-2 rounded-xl bg-[#6B5BFF] hover:bg-[#5a49ff] px-4 py-2 text-sm font-medium shadow-sm">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
          Export
        </button>
      </div>

      {/* Table */}
      <div className="px-6 pb-10">
        <div className="overflow-x-auto bg-white/[0.02] border border-white/5 rounded-2xl">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-slate-400">
                <th className="text-left font-medium px-4 py-3">Employee Name</th>
                <th className="text-left font-medium px-4 py-3">CTC</th>
                <th className="text-left font-medium px-4 py-3">Salary Per Month</th>
                <th className="text-left font-medium px-4 py-3">Deduction</th>
                <th className="text-left font-medium px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                ["Leslie Watson", "$45000", "$3500", "-", "Completed"],
                ["Darlene Robertson", "$78000", "$6400", "$100", "Completed"],
                ["Jacob Jones", "$36000", "$3000", "$250", "Completed"],
                ["Kathryn Murphy", "$34000", "$2800", "-", "Pending"],
                ["Leslie Alexander", "$40000", "$3400", "-", "Pending"],
                ["Ronald Richards", "$45000", "$3500", "-", "Completed"],
                ["Guy Hawkins", "$35000", "$3000", "$50", "Pending"],
                ["Albert Flores", "$60000", "$5000", "$150", "Completed"],
              ].map((r, i) => (
                <tr key={i} className="hover:bg-white/[0.03]">
                  <td className="px-4 py-3">{r[0]}</td>
                  <td className="px-4 py-3">{r[1]}</td>
                  <td className="px-4 py-3">{r[2]}</td>
                  <td className="px-4 py-3">{r[3]}</td>
                  <td className="px-4 py-3">
                    {r[4] === "Completed" ? (
                      <span className="inline-flex items-center rounded-full bg-emerald-500/10 text-emerald-300 px-2 py-0.5 text-xs">Completed</span>
                    ) : (
                      <span className="inline-flex items-center rounded-full bg-amber-500/10 text-amber-300 px-2 py-0.5 text-xs">Pending</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
