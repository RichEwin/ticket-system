import zod from "zod";

export const ticketsSchema = zod
  .object({
    id: zod.number(),
    created_at: zod.string(),
    title: zod.string(),
    body: zod.string(),
    priority: zod.union([
      zod.literal("low"),
      zod.literal("medium"),
      zod.literal("high"),
    ]),
    user_email: zod.string().email(),
  })
  .array();

export const createTicketFormSchema = zod.object({
  title: zod.string(),
  body: zod.string(),
  priority: zod.union([
    zod.literal("low"),
    zod.literal("medium"),
    zod.literal("high"),
  ]),
  user_email: zod.string().email(),
});

export type CreateTicketFormState = zod.infer<typeof createTicketFormSchema>;
export type Ticket = zod.infer<typeof ticketsSchema>;
