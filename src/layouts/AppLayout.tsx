import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
        <Navbar />

        <main className="page">
          <Outlet />
        </main>
      </div>
    </div>
  );
}