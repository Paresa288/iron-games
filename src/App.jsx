import { Routes, Route } from "react-router-dom";
import { GameDetailsPage, HomePage, LoginPage, RegisterPage } from "./pages";
import { Footer, NavBar } from "./components/ui";

function App() {
  return (
    <>
      <main className="flex-shrink-0 text-bg-dark">
        <NavBar />

        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/game-details/:gameSlug" element={<GameDetailsPage />} />
        </Routes>
      </main>

      <Footer className="mt-auto" />
    </>
  );
}

export default App;