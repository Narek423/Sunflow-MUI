import "./App.css";
import { Route, Routes } from "react-router-dom";
import Paths from "./constants/Paths";
import ProtectedRoute from "./components/Protected-route";
import ProfilePage from "./components/profile-page";
import LogInPage from "./components/login-page";

function App() {
  const { PROFILE_PATH } = Paths;
  return (
    <>
      <Routes>
        <Route
          path={PROFILE_PATH}
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route path='*' element={<LogInPage />} />
      </Routes>
    </>
  );
}

export default App;
