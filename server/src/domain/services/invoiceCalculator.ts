import { InvoiceItem } from "../entities/Invoice.js";

export function calculateSubtotal(
    quantity:number,
    unitPrice:number,
):number{
    if(Number.isFinite(quantity)||quantity<=0){
        throw new Error("Quantity must be a positive number...")
    }
    if(Number.isFinite(unitPrice)||unitPrice<0){
        throw new Error("Unit price cannot be negative...")
    }

    return quantity * unitPrice
    
}

export function calculateInvoiceTotal(
    items:InvoiceItem[],
):number{
    if (items.length === 0) {
throw new Error("An invoice must contain at least one item.");
}


    return items.reduce((total,item)=>{
        const subtotal=calculateSubtotal(
            item.quantity,
            item.unitPrice
        );
        return total + subtotal;
    }, 0);
}

export function compareInvoiceTotals(
    calculatedTotal:number,
    statedTotal:number,
):number{
    return statedTotal-calculatedTotal;
}

export function checkInvoiceTotal(
    calculatedTotal:number,
    statedTotal:number,
){
    const difference=statedTotal-calculatedTotal;
    return{
        calculatedTotal,
        statedTotal,
        difference,
        matches:difference===0,
    }
}