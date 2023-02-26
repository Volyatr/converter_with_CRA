import Navigation from "./components/navigation/navigation";
import { Outlet } from "react-router-dom";

// import { useEffect, useState } from "react";

function App() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
