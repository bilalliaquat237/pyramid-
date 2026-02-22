import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Comments from "./pages/Comments";
import "./App.css";


function App() {
   const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  }
  return (
    <React.Fragment>
      <Sidebar isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
      <div className={`dashboard-wrapper ${isSidebarExpanded ? "shrink" : ""}`}>
        <Header isSidebarExpanded={isSidebarExpanded} />
        <Comments />
      </div>
    </React.Fragment>
  );
}

export default App;
