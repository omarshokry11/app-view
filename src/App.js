import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SidebarBlock from "./components/block/SidebarBlock";
import Home from "./pages/Home";
import Opportunity from "./pages/Opportunity";
import ApplicationView from "./pages/ApplicationView";

export default function App() {
  const [sidebar, setSidebar] = useState();
  return (
    <div className="main-app-container">
      <div className="main-sidebar-content">
        <Sidebar />
      </div>
      <div className="main-side-bar-block">
        {sidebar && <SidebarBlock />}
        <div className="dropdown-sidebar" onClick={() => setSidebar(!sidebar)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="main-pages-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/opportunity" element={<Opportunity />} />
          <Route path="/appview" element={<ApplicationView />} />
        </Routes>
      </div>
    </div>
  );
}
