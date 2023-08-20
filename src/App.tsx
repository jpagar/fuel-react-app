import SidebarContext from "./context/SideBarContext.tsx";
import { useState } from "react";
import { SidebarNavigation } from "./pages/SidebarNavigation.tsx";
import { Outlet } from "react-router-dom";

function App() {
  const [expand, setExpand] = useState(false);
  return (
    <>
      <div className="flex">
        <SidebarContext.Provider
          value={{ expand: expand, setExpand: setExpand }}
        >
          <SidebarNavigation />
          {/* TODO: Find a better solution to expand nav bar over content */}
          <Outlet />
        </SidebarContext.Provider>
      </div>
    </>
  );
}

export default App;
