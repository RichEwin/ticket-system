import useGetTickets from "../hooks/hooks";

export default async function TicketList() {
  const tickets = await useGetTickets();
  return JSON.stringify(tickets);
}
