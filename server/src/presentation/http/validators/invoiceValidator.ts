
import { z } from "zod";

export const invoiceItemSchema = z.object({
  description: z.string().trim().min(1, "Description is required"),
  quantity: z.number().positive("Quantity must be greater than zero"),
  unitPrice: z.number().nonnegative("Unit price cannot be negative"),
});

export const invoiceSchema = z.object({
  invoiceNumber: z.string().trim().min(1, "Invoice number is required"),

  vendorId: z.string().trim().min(1, "Vendor ID is required"),

  invoiceDate: z.iso.date(),

  items: z.array(invoiceItemSchema).min(1, "At least one invoice item is required"),

  totalAmount: z.number().nonnegative("Total amount cannot be negative"),
});

export type InvoiceItemInput = z.infer<typeof invoiceItemSchema>;

export type InvoiceInput = z.infer<typeof invoiceSchema>;

