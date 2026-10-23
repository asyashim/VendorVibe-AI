export interface InvoiceItem {
    description: string;
    quantity: number;
    unitPrice: number;
    subtotal: number;
}

export interface Invoice {
    id: string;
    invoiceNumber: string;
    vendorId: string;
    invoiceDate: Date;
    items: InvoiceItem[];
    totalAmount: number;
    status: "pending" | "approved" | "rejected";
    paymentStatus: "unpaid" | "partially_paid" | "paid";
}