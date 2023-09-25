import zod from "zod";

export const ticketsSchema = zod
  .object({
    id: zod.number(),
    created_at: zod.string(),
    title: zod.string(),
    body: zod.string(),
    priority: zod.string(),
    user_email: zod.string().email(),
  })
  .array();

export const createTicketSchema = zod.object({
  title: zod.string(),
  body: zod.string(),
  priority: zod.union([
    zod.literal("low"),
    zod.literal("medium"),
    zod.literal("high"),
  ]),
  user_email: zod.string().email(),
});

export type CreateTicketFormState = zod.infer<typeof createTicketSchema>;
