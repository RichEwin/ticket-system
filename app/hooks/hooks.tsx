import supabase from "@/utils/supabase";

export const getTickets = async () => {
  const { data } = await supabase.from("tickets").select("*");
  return data;
};
