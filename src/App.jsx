import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Properties from "./pages/Properties";
import MaintenanceRequests from "./pages/MaintenanceRequests";
import Settings from "./pages/Settings";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/properties" element={<Properties />}/>
      <Route path="/maintenance-requests" element={<MaintenanceRequests />}/>
      <Route path="/settings" element={<Settings />}/>
    </Routes>
  );
}

export default App;
