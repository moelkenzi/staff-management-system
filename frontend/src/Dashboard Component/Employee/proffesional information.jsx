// Dark UI mockup – Add New Employee > Professional Information (pure UI)
export default function AddEmployeeProfessional() {
  return (
    <div className="min-h-screen bg-[#0B0B10] text-slate-200">
      <main className="max-w-6xl mx-auto px-4 py-6">
        <section className="border border-slate-800 rounded-2xl bg-[#0F0F16]">
          {/* Tabs */}
          <div className="px-4 sm:px-6 pt-4">
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <button className="pb-3 text-slate-400 hover:text-slate-200">Personal Information</button>
              <button className="relative pb-3 text-slate-200">
                <span>Professional Information</span>
                <span className="absolute -bottom-px left-0 right-0 h-[2px] bg-violet-500 rounded-full"></span>
              </button>
              <button className="pb-3 text-slate-400 hover:text-slate-200">Documents</button>
              <button className="pb-3 text-slate-400 hover:text-slate-200">Account Access</button>
            </div>
          </div>

          <div className="border-t border-slate-800"></div>

          {/* Form */}
          <div className="p-4 sm:p-6 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="ui-input" placeholder="Employee ID" />
              <input className="ui-input" placeholder="User Name" />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <select className="ui-select"><option>Select Employee Type</option></select>
              <input className="ui-input" placeholder="Email Address" />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <select className="ui-select"><option>Select Department</option></select>
              <input className="ui-input" placeholder="Enter Designation" />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <select className="ui-select"><option>Select Working Days</option></select>
              <div className="relative">
                <input className="ui-input pr-10" placeholder="Select Joining Date" />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4"><path d="M7 2v4"/><path d="M17 2v4"/><rect x="3" y="6" width="18" height="14" rx="2"/></svg>
                </span>
              </div>
            </div>

            <select className="ui-select"><option>Select Office Location</option></select>

            <div className="flex items-center justify-end gap-3 pt-8">
              <button className="btn-ghost">Cancel</button>
              <button className="btn-primary">Next</button>
            </div>
          </div>
        </section>
      </main>

      <style>{`
        .ui-input{ @apply w-full rounded-xl border border-slate-800 bg-[#14141d] px-3 py-2.5 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-600/60 focus:border-slate-700; }
        .ui-select{ @apply w-full appearance-none rounded-xl border border-slate-800 bg-[#14141d] px-3 py-2.5 text-sm text-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-600/60; }
        .btn-primary{ @apply inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium bg-violet-600 hover:bg-violet-500 text-white shadow-md; }
        .btn-ghost{ @apply rounded-xl px-4 py-2.5 text-sm text-slate-300 border border-slate-800 bg-[#14141d] hover:border-slate-700; }
      `}</style>
    </div>
  );
}

// Dark UI mockup – Add New Employee (Professional Information tab)
export function AddEmployeeProfessionalMockup() {
  return (
    <div className="min-h-screen bg-[#0B0B10] text-slate-200">
      {/* Topbar */}
      <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-[#0E0E15]/90 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
          <nav className="flex items-center gap-2 text-xs text-slate-400">
            <a className="hover:text-slate-200" href="#">All Employee</a>
            <span>/</span>
            <span className="text-slate-300">Add New Employee</span>
          </nav>

          <div className="ml-auto flex items-center gap-3">
            {/* Search */}
            <div className="hidden sm:flex items-center gap-2 bg-[#14141d] border border-slate-800 rounded-xl px-3 py-2 w-64">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 text-slate-500"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
              <input className="bg-transparent outline-none text-sm placeholder:text-slate-500 flex-1" placeholder="Search"/>
            </div>

            {/* Bell */}
            <button className="grid place-items-center size-10 rounded-xl border border-slate-800 bg-[#14141d] hover:border-slate-700">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 text-slate-400"><path d="M15 17h5l-1.4-1.4A2 2 0 0 1 18 14.2V11a6 6 0 1 0-12 0v3.2a2 2 0 0 1-.6 1.4L4 17h5"/><path d="M9 17a3 3 0 0 0 6 0"/></svg>
            </button>

            {/* User */}
            <div className="flex items-center gap-3 border border-slate-800 rounded-xl bg-[#14141d] px-2 py-1">
              <img src="https://i.pravatar.cc/40?img=12" alt="avatar" className="size-8 rounded-lg"/>
              <div className="leading-tight hidden sm:block">
                <div className="text-sm">Robert Allen</div>
                <div className="text-xs text-slate-500">HR Manager</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6">
        {/* Card */}
        <section className="border border-slate-800 rounded-2xl bg-[#0F0F16]">
          {/* Tabs */}
          <div className="px-4 sm:px-6 pt-4">
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <button className="pb-3 text-slate-400 hover:text-slate-200 transition">
                <span className="inline-flex items-center gap-2">
                  <span className="grid place-items-center size-6 rounded-md bg-[#1A1A24] border border-slate-800">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-3.5 h-3.5 text-slate-400"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Z"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>
                  </span>
                  Personal Information
                </span>
              </button>

              <button className="relative pb-3 text-slate-200">
                <span className="inline-flex items-center gap-2">
                  <span className="grid place-items-center size-6 rounded-md bg-[#1A1A24] border border-slate-800">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-3.5 h-3.5"><path d="M4 4h16v6H4z"/><path d="M4 14h8v6H4z"/></svg>
                  </span>
                  Professional Information
                </span>
                <span className="absolute -bottom-px left-0 right-0 h-[2px] bg-violet-500 rounded-full"></span>
              </button>

              <button className="pb-3 text-slate-400 hover:text-slate-200 transition">
                <span className="inline-flex items-center gap-2">
                  <span className="grid place-items-center size-6 rounded-md bg-[#1A1A24] border border-slate-800">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-3.5 h-3.5"><path d="M7 2v4"/><path d="M17 2v4"/><rect x="3" y="6" width="18" height="14" rx="2"/></svg>
                  </span>
                  Documents
                </span>
              </button>

              <button className="pb-3 text-slate-400 hover:text-slate-200 transition">
                <span className="inline-flex items-center gap-2">
                  <span className="grid place-items-center size-6 rounded-md bg-[#1A1A24] border border-slate-800">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-3.5 h-3.5"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Z"/><path d="M20.5 21.5 17 18"/></svg>
                  </span>
                  Account Access
                </span>
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-800"></div>

          {/* Form Body */}
          <div className="p-4 sm:p-6">
            <div className="space-y-5">
              {/* Row 1 */}
              <div className="grid sm:grid-cols-2 gap-4">
                <input className="ui-input" placeholder="Employee ID"/>
                <input className="ui-input" placeholder="User Name"/>
              </div>

              {/* Row 2 */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="relative">
                  <select className="ui-select"><option>Select Employee Type</option></select>
                  <span className="select-caret" />
                </div>
                <input className="ui-input" placeholder="Email Address"/>
              </div>

              {/* Row 3 */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="relative">
                  <select className="ui-select"><option>Select Department</option></select>
                  <span className="select-caret" />
                </div>
                <input className="ui-input" placeholder="Enter Designation"/>
              </div>

              {/* Row 4 */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="relative">
                  <select className="ui-select"><option>Select Working Days</option></select>
                  <span className="select-caret" />
                </div>
                <div className="relative">
                  <input className="ui-input pr-10" placeholder="Select Joining Date"/>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4"><path d="M7 2v4"/><path d="M17 2v4"/><rect x="3" y="6" width="18" height="14" rx="2"/></svg>
                  </span>
                </div>
              </div>

              {/* Office Location (full width) */}
              <div className="relative">
                <select className="ui-select"><option>Select Office Location</option></select>
                <span className="select-caret" />
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-3 pt-4">
                <button className="btn-ghost">Cancel</button>
                <button className="btn-primary">Next</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Utility styles reused from the first component */}
      <style>{`
        .ui-input{ @apply w-full rounded-xl border border-slate-800 bg-[#14141d] px-3 py-2.5 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-600/60 focus:border-slate-700; }
        .ui-select{ @apply w-full appearance-none rounded-xl border border-slate-800 bg-[#14141d] px-3 py-2.5 text-sm text-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-600/60; }
        .select-caret{ position:absolute; right:12px; top:50%; transform:translateY(-50%); width:0; height:0; border-left:5px solid transparent; border-right:5px solid transparent; border-top:6px solid rgb(148,163,184); }
        .btn-primary{ @apply inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium bg-violet-600 hover:bg-violet-500 text-white shadow-md; }
        .btn-ghost{ @apply rounded-xl px-4 py-2.5 text-sm text-slate-300 border border-slate-800 bg-[#14141d] hover:border-slate-700; }
      `}</style>
    </div>
  );
}

