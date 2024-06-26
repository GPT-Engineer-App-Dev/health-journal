import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import LogWorkout from "./pages/LogWorkout.jsx"; // Import the new LogWorkout page
import ProgressTracking from "./pages/ProgressTracking.jsx"; // Import the new ProgressTracking page

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/log-workout" element={<LogWorkout />} />
        <Route path="/progress-tracking" element={<ProgressTracking />} /> // Add route for progress tracking
      </Routes>
    </Router>
  );
}

export default App;