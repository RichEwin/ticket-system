import getTickets from "../hooks/hooks";

export default async function TicketList() {
  const tickets = await getTickets();
  return JSON.stringify(tickets);
}
