// SettingsUI.jsx
export default function SettingsUI() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100">
      {/* Topbar */}
      <header className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold">Settings</h1>
          <p className="text-xs text-slate-400">All System Settings</p>
        </div>

        <div className="hidden md:flex items-center gap-3 w-full max-w-md">
          <div className="flex items-center gap-2 bg-white/5 rounded-xl px-3 py-2 w-full">
            <svg className="h-4 w-4 text-slate-400" viewBox="0 0 24 24" fill="none">
              <path d="M21 21l-4.3-4.3m1.3-5.2a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
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

      {/* Content */}
      <div className="px-6 py-6">
        <div className="overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] divide-y divide-white/5">
          {/* Row helper */}
          <Row
            title="Appearance"
            subtitle="Customize how your theme looks on your device"
            right={
              <Pill value="Light" />
            }
          />
          <Row
            title="Language"
            subtitle="Select your language"
            right={
              <Pill value="English" withChevron />
            }
          />
          <Row
            title="Two-factor Authentication"
            subtitle="Keep your account secure by enabling 2FA via mail"
            right={<ToggleOn />}
          />
          <Row
            title="Mobile Push Notifications"
            subtitle="Receive push notification"
            right={<ToggleOn />}
          />
          <Row
            title="Desktop Notification"
            subtitle="Receive push notification in desktop"
            right={<ToggleOn />}
          />
          <Row
            title="Email Notifications"
            subtitle="Receive email notification"
            right={<ToggleOn />}
          />
        </div>
      </div>
    </div>
  );
}

/* --------- small UI atoms (no logic) ---------- */

function Row({ title, subtitle, right }) {
  return (
    <div className="px-5 py-4 flex items-center justify-between">
      <div>
        <div className="text-sm font-medium">{title}</div>
        <div className="text-xs text-slate-400 mt-0.5">{subtitle}</div>
      </div>
      <div className="shrink-0">{right}</div>
    </div>
  );
}

function Pill({ value, withChevron }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-3 py-1.5 text-xs text-slate-200">
      <span>{value}</span>
      {withChevron && (
        <svg className="h-3.5 w-3.5 text-slate-400" viewBox="0 0 24 24" fill="none">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )}
    </div>
  );
}

function ToggleOn() {
  return (
    <div className="relative h-6 w-11 rounded-full bg-emerald-500/25 border border-emerald-400/30">
      <div className="absolute top-0.5 right-0.5 h-5 w-5 rounded-full bg-emerald-400 shadow" />
    </div>
  );
}
