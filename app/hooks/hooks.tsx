import supabase from "@/utils/supabase";
import zod from "zod";

const ticketsSchema = zod
  .object({
    id: zod.number(),
    created_at: zod.string(),
    title: zod.string(),
    body: zod.string(),
    priority: zod.string(),
    user_email: zod.string().email(),
  })
  .array();

export default async function useGetTickets() {
  const getTickets = await supabase.from("tickets").select("*");

  const response = ticketsSchema.safeParse(getTickets.data);

  if (!response.success) {
    throw new Error(response.error.message);
  }

  return response;
}
