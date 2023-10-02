import supabase from "@/utils/supabase";
import { CreateTicketFormState, ticketsSchema } from "../schema";

async function useGetTickets() {
  const getTickets = await supabase.from("tickets").select("*");

  const response = ticketsSchema.safeParse(getTickets.data);

  if (!response.success) {
    throw new Error(response.error.message);
  }

  return response.data;
}

async function useGetTicketById(id: number) {
  const getTicket = await supabase.from("tickets").select("*").eq("id", id);

  const response = ticketsSchema.safeParse(getTicket.data);

  if (!response.success) {
    throw new Error(response.error.message);
  }

  return response.data;
}

async function useCreateTicket(data: CreateTicketFormState) {
  const { error } = await supabase.from("tickets").insert([data]);

  if (error) {
    throw new Error(error.message);
  }

  return "success";
}

async function useDeleteTicket(id: number) {
  const { error } = await supabase.from("tickets").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  return "success";
}

export { useGetTickets, useGetTicketById, useCreateTicket, useDeleteTicket };
