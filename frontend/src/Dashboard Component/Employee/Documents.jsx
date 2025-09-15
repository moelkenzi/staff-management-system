export default function AddEmployeeDocumentsUI() {
  return (
    <div className="min-h-screen bg-[#0e0f13] text-slate-200">
      {/* Top bar */}
      <header className="border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <div>
            <nav className="text-xs text-slate-500">
              <span>All Employee</span>
              <span className="mx-2">›</span>
              <span className="text-slate-300">Add New Employee</span>
            </nav>
            <h1 className="text-lg font-semibold mt-1">Add New Employee</h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <input
                className="w-72 rounded-xl bg-[#141722] text-slate-200 border border-white/10 pl-10 pr-3 py-2.5 text-sm placeholder:text-slate-500 focus:outline-none"
                placeholder="Search"
              />
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>

            <button className="grid place-items-center h-10 w-10 rounded-xl border border-white/10 bg-[#141722] hover:bg-white/5">
              <svg className="h-4 w-4 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 01-3.46 0" />
              </svg>
            </button>

            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#141722] px-2 py-1.5">
              <div className="h-8 w-8 rounded-full bg-white/10" />
              <div className="leading-tight">
                <p className="text-sm font-medium">Robert Allen</p>
                <p className="text-[11px] text-slate-400 -mt-0.5">HR Manager</p>
              </div>
              <svg className="h-4 w-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-7xl px-4 py-6">
        <div className="rounded-2xl border border-white/10 bg-[#10131b] shadow-sm">
          {/* Tabs */}
          <div className="flex flex-wrap gap-6 px-4 sm:px-6 border-b border-white/10">
            <button className="py-3 text-sm text-slate-400 hover:text-slate-200">
              <span className="inline-flex items-center gap-2">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a6.5 6.5 0 0113 0"/></svg>
                Personal Information
              </span>
            </button>
            <button className="py-3 text-sm text-slate-400 hover:text-slate-200">
              <span className="inline-flex items-center gap-2">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v4H4z"/><path d="M6 12h12M6 16h12M6 20h12"/></svg>
                Professional Information
              </span>
            </button>
            <button className="relative py-3 text-sm font-medium text-indigo-400">
              <span className="inline-flex items-center gap-2">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2h9l5 5v15a2 2 0 0 1-2 2H6z"/><path d="M14 2v6h6"/></svg>
                Documents
              </span>
              <span className="absolute left-0 -bottom-px h-0.5 w-full bg-indigo-500"></span>
            </button>
            <button className="py-3 text-sm text-slate-400 hover:text-slate-200">
              <span className="inline-flex items-center gap-2">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="3"/><path d="M6 21v-2a6 6 0 0 1 12 0v2"/><rect x="3" y="11" width="18" height="10" rx="2"/></svg>
                Account Access
              </span>
            </button>
          </div>

          {/* Upload grid with real inputs */}
          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* Appointment Letter */}
              <div className="space-y-3">
                <p className="text-sm text-slate-300">Upload Appointment Letter</p>
                <label
                  htmlFor="file-appoint"
                  className="cursor-pointer w-full rounded-xl border border-dashed border-indigo-500/40 bg-[#0e0f13] px-6 py-10 text-center grid place-items-center gap-2"
                  title="Choose files"
                >
                  <span className="mx-auto grid h-9 w-9 place-items-center rounded-xl bg-indigo-600/20 text-indigo-300">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a4 4 0 0 1-4 4H7a4 4 0 0 1 0-8h1"/><path d="M12 12V3m0 0l-3 3m3-3l3 3"/></svg>
                  </span>
                  <p className="text-sm text-slate-400">
                    Drag &amp; Drop or <span className="text-indigo-400 underline">choose file</span> to upload
                  </p>
                  <p className="text-xs text-slate-500">Supported formats : Jpeg, pdf</p>
                </label>
                <input id="file-appoint" type="file" multiple accept=".jpg,.jpeg,.png,.pdf" className="sr-only" />
              </div>

              {/* Salary Slips */}
              <div className="space-y-3">
                <p className="text-sm text-slate-300">Upload Salary Slips</p>
                <label
                  htmlFor="file-salary"
                  className="cursor-pointer w-full rounded-xl border border-dashed border-indigo-500/40 bg-[#0e0f13] px-6 py-10 text-center grid place-items-center gap-2"
                  title="Choose files"
                >
                  <span className="mx-auto grid h-9 w-9 place-items-center rounded-xl bg-indigo-600/20 text-indigo-300">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a4 4 0 0 1-4 4H7a4 4 0 0 1 0-8h1"/><path d="M12 12V3m0 0l-3 3m3-3l3 3"/></svg>
                  </span>
                  <p className="text-sm text-slate-400">
                    Drag &amp; Drop or <span className="text-indigo-400 underline">choose file</span> to upload
                  </p>
                  <p className="text-xs text-slate-500">Supported formats : Jpeg, pdf</p>
                </label>
                <input id="file-salary" type="file" multiple accept=".jpg,.jpeg,.png,.pdf" className="sr-only" />
              </div>

              {/* Reliving Letter */}
              <div className="space-y-3">
                <p className="text-sm text-slate-300">Upload Reliving Letter</p>
                <label
                  htmlFor="file-relive"
                  className="cursor-pointer w-full rounded-xl border border-dashed border-indigo-500/40 bg-[#0e0f13] px-6 py-10 text-center grid place-items-center gap-2"
                  title="Choose files"
                >
                  <span className="mx-auto grid h-9 w-9 place-items-center rounded-xl bg-indigo-600/20 text-indigo-300">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a4 4 0 0 1-4 4H7a4 4 0 0 1 0-8h1"/><path d="M12 12V3m0 0l-3 3m3-3l3 3"/></svg>
                  </span>
                  <p className="text-sm text-slate-400">
                    Drag &amp; Drop or <span className="text-indigo-400 underline">choose file</span> to upload
                  </p>
                  <p className="text-xs text-slate-500">Supported formats : Jpeg, pdf</p>
                </label>
                <input id="file-relive" type="file" multiple accept=".jpg,.jpeg,.png,.pdf" className="sr-only" />
              </div>

              {/* Experience Letter */}
              <div className="space-y-3">
                <p className="text-sm text-slate-300">Upload Experience Letter</p>
                <label
                  htmlFor="file-exper"
                  className="cursor-pointer w-full rounded-xl border border-dashed border-indigo-500/40 bg-[#0e0f13] px-6 py-10 text-center grid place-items-center gap-2"
                  title="Choose files"
                >
                  <span className="mx-auto grid h-9 w-9 place-items-center rounded-xl bg-indigo-600/20 text-indigo-300">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a4 4 0 0 1-4 4H7a4 4 0 0 1 0-8h1"/><path d="M12 12V3m0 0l-3 3m3-3l3 3"/></svg>
                  </span>
                  <p className="text-sm text-slate-400">
                    Drag &amp; Drop or <span className="text-indigo-400 underline">choose file</span> to upload
                  </p>
                  <p className="text-xs text-slate-500">Supported formats : Jpeg, pdf</p>
                </label>
                <input id="file-exper" type="file" multiple accept=".jpg,.jpeg,.png,.pdf" className="sr-only" />
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 flex items-center justify-end gap-3">
              <button className="h-10 rounded-xl border border-white/10 bg-[#141722] px-4 text-sm font-medium text-slate-200 hover:bg-white/5">Cancel</button>
              <button className="h-10 rounded-xl bg-indigo-600 px-6 text-sm font-medium text-white shadow hover:opacity-95">Next</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
