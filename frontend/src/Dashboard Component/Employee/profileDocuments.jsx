// 4) DOCUMENTS — list of uploaded files
export function EmployeeDetailsDocuments() {
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
            <h1 className="text-lg font-semibold mt-2">Documents</h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10">Export</button>
            <button className="px-3 py-2 rounded-xl bg-[#7c5cff] hover:bg-[#6b49ff] text-white">Upload</button>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-[#111827] border border-white/5 p-5">
          <div className="border-b border-white/10">
            <div className="flex gap-1 overflow-x-auto text-sm">
              <span className="px-3 py-2 hover:bg-white/5">Profile</span>
              <span className="px-3 py-2 hover:bg-white/5">Personal</span>
              <span className="px-3 py-2 hover:bg-white/5">Professional</span>
              <span className="px-3 py-2 rounded-t-lg bg-white/10 border-x border-t border-white/10">Documents</span>
              <span className="px-3 py-2 hover:bg-white/5">Projects</span>
              <span className="px-3 py-2 hover:bg-white/5">Attendance</span>
              <span className="px-3 py-2 hover:bg-white/5">Leaves</span>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
            <table className="min-w-full text-sm">
              <thead className="bg-white/5">
                <tr className="text-left text-slate-400">
                  <th className="px-4 py-3">File Name</th>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">Uploaded</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  ['Employment Contract.pdf', 'PDF', 'Aug 12, 2024'],
                  ['National ID.png', 'Image', 'Aug 12, 2024'],
                  ['Bank Details.docx', 'Docx', 'Sep 01, 2024']
                ].map(([name, type, date], i) => (
                  <tr key={i} className="hover:bg-white/[0.03]">
                    <td className="px-4 py-3">{name}</td>
                    <td className="px-4 py-3 text-slate-400">{type}</td>
                    <td className="px-4 py-3 text-slate-400">{date}</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button className="px-2 py-1 rounded-lg bg-white/5 border border-white/10">View</button>
                        <button className="px-2 py-1 rounded-lg bg-white/5 border border-white/10">Download</button>
                        <button className="px-2 py-1 rounded-lg bg-[#ef4444]/20 border border-[#ef4444]/30 text-[#ef4444]">Delete</button>
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