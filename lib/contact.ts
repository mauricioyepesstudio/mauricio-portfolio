import { z } from "zod";

export function hasDeliveryReceipt(
  data: { id?: string } | null | undefined,
): data is { id: string } {
  return typeof data?.id === "string" && data.id.trim().length > 0;
}

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(120),
  email: z.string().trim().email("Please enter a valid email").max(254),
  company: z.string().trim().max(200).optional(),
  budget: z.enum(["", "<5k", "5k-15k", "15k-50k", "50k+"]).optional(),
  topic: z.string().trim().max(40).regex(/^[a-z-]*$/, "Unknown topic").optional(),
  message: z.string().trim().min(10, "Tell me a bit more about the project").max(10000),
});
