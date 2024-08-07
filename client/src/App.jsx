import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <main className="p-2">
      <Header />
      <Outlet />
    </main>
  );
}

export default App;
