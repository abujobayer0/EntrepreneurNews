import DashboardNavbar from "./_components/ui/DashboardNavbar";
import ClientSidebarWrapper from "./_components/ui/sidebar/ClientSidebarWrapper";
import Sidebar from "./_components/ui/sidebar/Sidebar";

export default function WithDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen h-screen flex flex-col lg:flex-row">
      {/* Sidebar (hidden on mobile, visible on md+) */}
      <div className="hidden lg:block lg:w-[230px] fixed left-0 top-0 h-screen z-30 bg-white border-r">
        <Sidebar isOpen={true} />
      </div>

      {/* Mobile Sidebar Toggle Wrapper */}
      <ClientSidebarWrapper />

      {/* Main content area */}
      <div className="flex-1 flex flex-col lg:ml-[230px] w-full">
        {/* Navbar */}
        <div className="fixed top-0 right-0 left-0 lg:left-[230px] z-20 bg-white py-2 px-6 border-b border-gray-100">
          <DashboardNavbar />
        </div>

        {/* Page content */}
        <div className="overflow-x-hidden bg-gray-50 mt-[82px] p-4 lg:p-5 h-screen">
          {children}
        </div>
      </div>
    </div>
  );
}
