import { Routes, Route } from "react-router-dom";
import { GameDetailsPage, HomePage, LoginPage, ProfilePage, RegisterPage } from "./pages";
import { Footer, NavBar } from "./components/ui";

function App() {
  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
      <main className="flex-grow-1">
        <NavBar />

        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/game/:gameSlug" element={<GameDetailsPage />} />
        </Routes>
      </main> 
      <Footer />
    </div>
  );
}

export default App;