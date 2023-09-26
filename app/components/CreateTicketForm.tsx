"use client";

import { useForm } from "react-hook-form";
import { CreateTicketFormState, createTicketSchema } from "../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateTicket } from "../hooks/hooks";
import { useRouter } from "next/navigation";

export default function CreateTicketForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<CreateTicketFormState>({
    resolver: zodResolver(createTicketSchema),
  });

  const onSubmit = async (data: CreateTicketFormState) => {
    const result = await useCreateTicket(data);

    if (result === "success") {
      router.refresh();
      router.push("/tickets");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input {...register("title")} placeholder="Title" />
        <input {...register("body")} placeholder="Body" />
        <input {...register("priority")} placeholder="Priority" />
        <input {...register("user_email")} placeholder="User Email" />
        <button type="submit" disabled={!isValid}>
          Create
        </button>
      </div>
    </form>
  );
}
