import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div>
      <nav className="fixed top-0 w-full z-40 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl sm:text-4xl text-white font-normal text-center">
              Smart Classroom Dashboard
            </h1>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className="sm:fixed top-0 left-0 z-30 w-64 h-screen pt-20 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {[
              { path: "/dashboard/lights", label: "Lights", icon: "💡" },
              { path: "/dashboard/fans", label: "Fans", icon: "🌀" },
              { path: "/dashboard/curtains", label: "Curtains", icon: "🏡" },
              { path: "/dashboard/security", label: "Security Camera", icon: "📷" },
              { path: "/dashboard/attendence", label: "Attendence", icon: "📝" },
            ].map(({ path, label, icon }) => (
              <li key={path} onClick={() => navigate(path)}>
                <div
                  className={`cursor-pointer flex items-center p-2 rounded-lg group 
                    ${
                      isActive(path)
                        ? "bg-gray-300 text-gray-900 dark:bg-gray-700 dark:text-white" // Subtle gray highlight
                        : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                >
                  <span className="size-6">{icon}</span>
                  <span className="flex-1 ms-3 whitespace-nowrap">{label}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
