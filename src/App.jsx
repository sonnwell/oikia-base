import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import PageLayout from "./ui/PageLayout";
import Dashboard from "./pages/Dashboard";
import Properties from "./pages/Properties";
import MaintenanceRequests from "./pages/MaintenanceRequests";
import Settings from "./pages/Settings";
import ErrorPage from "./pages/ErrorPage";
import "./App.css";

function App() {
  
  return (
    <div className="app-container">
      <Sidebar />
      <PageLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/properties" element={<Properties />} />
          <Route
            path="/maintenance-requests"
            element={<MaintenanceRequests />}
          />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </PageLayout>
    </div>
  );
}

export default App;
