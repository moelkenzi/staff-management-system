// 3) PROFESSIONAL — job, compensation, access
export function EmployeeDetailsProfessional() {
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
            <h1 className="text-lg font-semibold mt-2">Professional Information</h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10">Export</button>
            <button className="px-3 py-2 rounded-xl bg-[#7c5cff] hover:bg-[#6b49ff] text-white">Edit</button>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-[#111827] border border-white/5 p-5">
          <div className="border-b border-white/10">
            <div className="flex gap-1 overflow-x-auto text-sm">
              <span className="px-3 py-2 hover:bg-white/5">Profile</span>
              <span className="px-3 py-2 hover:bg-white/5">Personal</span>
              <span className="px-3 py-2 rounded-t-lg bg-white/10 border-x border-t border-white/10">Professional</span>
              <span className="px-3 py-2 hover:bg-white/5">Documents</span>
              <span className="px-3 py-2 hover:bg-white/5">Projects</span>
              <span className="px-3 py-2 hover:bg-white/5">Attendance</span>
              <span className="px-3 py-2 hover:bg-white/5">Leaves</span>
            </div>
          </div>

          <div className="mt-6 grid lg:grid-cols-3 gap-6">
            <section className="rounded-xl bg-white/5 border border-white/10 p-5 lg:col-span-2">
              <h3 className="font-medium">Job Details</h3>
              <div className="mt-4 grid sm:grid-cols-2 gap-4 text-sm">
                <Field label="Job Title" value="Senior Product Designer" />
                <Field label="Level" value="IC4" />
                <Field label="Employment Type" value="Full-time" />
                <Field label="Office" value="Kismaayo HQ" />
                <Field label="Manager" value="Courtney Henry" />
                <Field label="Probation" value="Completed" />
              </div>
            </section>
            <section className="rounded-xl bg-white/5 border border-white/10 p-5">
              <h3 className="font-medium">Compensation</h3>
              <div className="mt-4 grid gap-4 text-sm">
                <Field label="Base Salary" value="$2,500 / mo" />
                <Field label="Allowance" value="$200 / mo" />
                <Field label="Currency" value="USD" />
              </div>
            </section>
            <section className="rounded-xl bg-white/5 border border-white/10 p-5 lg:col-span-3">
              <h3 className="font-medium">Skills</h3>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {["Figma", "Tailwind", "Design Systems", "Prototyping", "UX Research"].map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10">{t}</span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}