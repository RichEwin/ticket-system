import { Suspense } from "react";
import Loading from "../components/Loading";
import TicketList from "./TicketList";
import ProtectedRoute from "./ProtectedRoute";

export default function Dashboard() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <ProtectedRoute>
          <TicketList />
        </ProtectedRoute>
      </Suspense>
    </>
  );
}
