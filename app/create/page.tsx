import CreateTicketForm from "@/app/components/CreateTicketForm";
import ProtectedRoute from "../components/ProtectedRoute";

export default function page() {
  return (
    <>
      <ProtectedRoute>
        <CreateTicketForm />
      </ProtectedRoute>
    </>
  );
}
