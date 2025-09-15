// Eye‑catching Filter Panel UI (pure UI, no props/logic). TailwindCSS classes only.
export default function EmployeeFilterPanelUI() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0b0c10] via-[#0b0c10] to-[#0b0c10] grid place-items-center p-6 text-slate-200">
      {/* Panel */}
      <aside className="w-[360px] rounded-2xl bg-[#111218] p-5 shadow-[0_8px_40px_rgba(0,0,0,0.45)] border border-white/5">
        {/* Title */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold tracking-tight">Filter</h2>
        </div>

        {/* Divider */}
        <div className="my-4 h-px bg-white/10" />

        {/* Search */}
        <label className="relative block">
          <span className="absolute inset-y-0 left-3 grid place-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-slate-400">
              <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 104.35 11.86l3.27 3.27a.75.75 0 101.06-1.06l-3.27-3.27A6.75 6.75 0 0010.5 3.75zm-5.25 6.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0z" clipRule="evenodd"/>
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search Employee"
            className="w-full rounded-xl bg-[#151824] border border-white/10 pl-11 pr-3 py-2.5 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/60 focus:border-violet-500/60"
          />
        </label>

        {/* Department */}
        <section className="mt-5">
          <h3 className="text-sm font-medium text-slate-300">Department</h3>

          <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            {[
              { label: "Design", checked: true },
              { label: "Java", checked: true },
              { label: "HR", checked: false },
              { label: "Python", checked: true },
              { label: "Sales", checked: false },
              { label: "React JS", checked: false },
              { label: "Business Analyst", checked: false },
              { label: "Account", checked: false },
              { label: "Project Manager", checked: true },
              { label: "Nodes JS", checked: false },
            ].map((item, idx) => (
              <label key={idx} className="flex items-center gap-3 cursor-pointer select-none">
                <span className="relative inline-flex h-4 w-4 items-center justify-center rounded-md border border-white/15 bg-[#121422] shadow-inner">
                  {/* fake checkbox state purely visual */}
                  <span className={
                    "pointer-events-none h-2.5 w-2.5 rounded-[3px] transition " +
                    (item.checked ? "bg-violet-500" : "bg-transparent")
                  }/>
                </span>
                <span className={item.checked ? "text-slate-200" : "text-slate-400"}>{item.label}</span>
              </label>
            ))}
          </div>
        </section>

        {/* Select Type */}
        <section className="mt-6">
          <h3 className="text-sm font-medium text-slate-300">Select Type</h3>

          <div className="mt-3 flex items-center gap-6 text-sm">
            {[{label: "Office"}, {label: "Work from Home"}].map((r, i) => (
              <label key={i} className="flex items-center gap-3 cursor-pointer select-none">
                <span className="relative inline-flex h-4 w-4 items-center justify-center rounded-full border border-white/15 bg-[#121422] shadow-inner">
                  {/* radio inner dot (purely visual) */}
                  <span className={"h-2 w-2 rounded-full " + (i === 0 ? "bg-slate-500" : "bg-transparent")} />
                </span>
                <span className="text-slate-400">{r.label}</span>
              </label>
            ))}
          </div>
        </section>

        {/* Buttons */}
        <div className="mt-7 flex items-center gap-3">
          <button className="flex-1 rounded-xl border border-white/10 bg-[#141826] py-2.5 text-sm font-medium text-slate-300 shadow-sm hover:bg-[#171b2b] active:scale-[.99]">Cancel</button>
          <button className="flex-1 rounded-xl bg-violet-600 py-2.5 text-sm font-semibold text-white shadow hover:bg-violet-500 active:scale-[.99]">Apply</button>
        </div>
      </aside>
    </div>
  );
}
