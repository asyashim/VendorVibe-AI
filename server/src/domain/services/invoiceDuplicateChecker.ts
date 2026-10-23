interface InvoiceReference{
    vendorId:string;
    invoiceNumber:string;
}


export function isDuplicateInvoice(
    newInvoice: InvoiceReference,
    existingInvoices:InvoiceReference[],
):boolean{
    return existingInvoices.some((invoice)=>{
        return(
            invoice.vendorId===newInvoice.vendorId&&
            invoice.invoiceNumber===newInvoice.invoiceNumber
        );
    });
};