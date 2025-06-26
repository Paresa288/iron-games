import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages";
import { Footer, NavBar } from "./components/ui";

function App() {
  return (
    <>
      <main className="flex-shrink-0">
        <NavBar />

        <Routes>
          <Route index element={<HomePage />}></Route>
        </Routes>
      </main>

      <Footer className="mt-auto" />
    </>
  );
}

export default App;