import React from "react";
import Link from "next/link";
import { useGetTickets } from "../hooks/hooks";

export default async function TicketList() {
  const tickets = await useGetTickets();

  return (
    <>
      {tickets.map((ticket) => (
        <React.Fragment key={ticket.id}>
          <Link href={`tickets/${ticket.id}`}>
            <li key={ticket.id}>{ticket.title}</li>
          </Link>
        </React.Fragment>
      ))}
    </>
  );
}
