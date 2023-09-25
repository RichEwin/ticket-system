import Link from "next/link";
import { useGetTickets } from "../hooks/hooks";

export default async function TicketList() {
  const tickets = await useGetTickets();

  return (
    <ul>
      {tickets.map((ticket) => (
        <Link href={`tickets/${ticket.id}`}>
          <li key={ticket.id}>{ticket.title}</li>
        </Link>
      ))}
    </ul>
  );
}
