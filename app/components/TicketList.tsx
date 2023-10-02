"use client";

import React from "react";
import Link from "next/link";
import { useDeleteTicket, useGetTickets } from "../hooks/hooks";
import { useRouter } from "next/navigation";

export default async function TicketList() {
  const router = useRouter();

  const tickets = await useGetTickets();

  const onDeleteTicketCLick = async (id: number) => {
    const result = await useDeleteTicket(id);

    if (result === "success") {
      router.refresh();
      router.push("/");
    }
  };

  return (
    <>
      {tickets.length > 0 ? (
        tickets.map((ticket) => (
          <React.Fragment key={ticket.id}>
            <div style={{ display: "flex", gap: "1em" }}>
              <Link href={`tickets/${ticket.id}`}>
                <p>{ticket.title}</p>
              </Link>
              <button onClick={() => onDeleteTicketCLick(ticket.id)}>X</button>
            </div>
          </React.Fragment>
        ))
      ) : (
        <div>No Tickets</div>
      )}
    </>
  );
}
