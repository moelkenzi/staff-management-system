// Single React component — dark UI mockup for "Add New Employee → Account Access".
// UI-only: no imports, no props, no handlers/logic.
export default function AccountAccessDarkUI() {
  return (
    <div className="min-h-screen bg-[#0d0f16] text-slate-200 [--brand:#7C3AED]">
      {/* Top bar */}
      <header className="bg-[#0f1119]/80 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-4">
          <div className="mr-auto">
            <div className="text-xs text-slate-400">All Employee <span className="mx-1">›</span> Add New Employee</div>
            <h1 className="text-lg font-semibold">Add New Employee</h1>
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

      {/* Tabs + Form card */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="bg-[#121421] rounded-2xl border border-white/10 shadow-sm">
          {/* Tabs */}
          <div className="px-4 sm:px-6 pt-4">
            <div className="flex flex-wrap items-center gap-6 text-sm border-b border-white/10">
              <button className="relative px-1 py-3 text-slate-300 hover:text-white">
                <span className="inline-flex items-center gap-2">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/></svg>
                  Personal Information
                </span>
              </button>

              <button className="relative px-1 py-3 text-slate-300 hover:text-white">
                <span className="inline-flex items-center gap-2">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                  Professional Information
                </span>
              </button>

              <button className="relative px-1 py-3 text-slate-300 hover:text-white">
                <span className="inline-flex items-center gap-2">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/></svg>
                  Documents
                </span>
              </button>

              <button className="relative px-1 py-3 text-violet-300">
                <span className="inline-flex items-center gap-2">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  <span className="font-medium">Account Access</span>
                </span>
                <span className="absolute left-0 right-0 -bottom-px h-0.5 bg-[var(--brand)] rounded-full" />
              </button>
            </div>
          </div>

          {/* Form fields */}
          <div className="px-4 sm:px-6 py-6">
            <div className="grid md:grid-cols-2 gap-4">
              <label className="block">
                <input className="w-full rounded-xl border border-white/10 bg-[#0f1119] px-3 py-3 text-sm placeholder:text-slate-500" placeholder="Enter Email Address" />
              </label>
              <label className="block">
                <input className="w-full rounded-xl border border-white/10 bg-[#0f1119] px-3 py-3 text-sm placeholder:text-slate-500" placeholder="Enter Slack ID" />
              </label>

              <label className="block md:col-span-1">
                <input className="w-full rounded-xl border border-white/10 bg-[#0f1119] px-3 py-3 text-sm placeholder:text-slate-500" placeholder="Enter Skype ID" />
              </label>
              <label className="block md:col-span-1">
                <input className="w-full rounded-xl border border-white/10 bg-[#0f1119] px-3 py-3 text-sm placeholder:text-slate-500" placeholder="Enter Github ID" />
              </label>
            </div>

            {/* Actions */}
            <div className="mt-6 flex items-center justify-end gap-2">
              <button className="px-4 py-2 rounded-xl border border-white/10 bg-[#0f1119] text-slate-200 hover:bg-white/5">Cancel</button>
              <button className="px-5 py-2 rounded-xl bg-[var(--brand)] text-white shadow-sm">Add</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
