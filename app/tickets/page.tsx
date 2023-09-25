import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../components/Loading";

export default function Tickets() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}
