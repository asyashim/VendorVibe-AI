
import { invoiceSchema } from "./invoiceValidator.js";

const invoice = {
  invoiceNumber: "INV-1001",
  vendorId: "VENDOR-001",
  invoiceDate: "2026-10-24",
  items: [
    {
      description: "Cement",
      quantity: -10,
      unitPrice: 300,
    },
    {
      description: "Steel",
      quantity: 5,
      unitPrice: 500,
    },
  ],
  totalAmount: 5500,
};

const result = invoiceSchema.safeParse(invoice);

console.log(result);

