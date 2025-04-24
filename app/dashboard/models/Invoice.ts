import type { Database } from "@/types/supabase";

export type InvoiceRow = Database["public"]["Tables"]["invoices"]["Row"];

export class Invoice {
  id!: string;
  created_at!: string;
  updated_at!: string;
  customer_id!: string;
  subscription_id!: string;
  amount!: number;
  status!: InvoiceRow["status"];
  due_date!: string;
  paid_date!: string | null;
  invoice_number!: string;

  constructor(data: InvoiceRow) {
    Object.assign(this, data);
  }
}
