import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../components/Loading";
import Link from "next/link";

export default function Tickets() {
  return (
    <main>
      <Link href="/tickets/create">Create</Link>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}
