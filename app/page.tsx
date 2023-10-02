import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";

export default function Home() {
  return (
    <main>
      <ProtectedRoute>
        <Header />
        <Dashboard />
      </ProtectedRoute>
    </main>
  );
}
