import React from "react";
import { useGetTicket } from "@/app/hooks/hooks";

interface TicketDetailProps {
  params: {
    id: number;
  };
}

export default async function TicketDetail({ params }: TicketDetailProps) {
  const { id } = params;

  const ticket = await useGetTicket(id);

  return (
    <>
      {ticket.map((ticket) => (
        <React.Fragment key={ticket.id}>
          <p>{ticket.title}</p>
          <p>{ticket.body}</p>
          <p>{ticket.priority}</p>
          <p>{ticket.user_email}</p>
        </React.Fragment>
      ))}
    </>
  );
}
