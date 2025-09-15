export default function DashboardHomePage() {
  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <div className="flex flex-row items-center px-4 lg:px-6 gap-4">
        <h1>Dashboard</h1>
      </div>
      <div className="px-4 lg:px-6">
        <p>Welcome to your dashboard. Select a page from the sidebar to get started.</p>
      </div>
    </div>
  );
};
