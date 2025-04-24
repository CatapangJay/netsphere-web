import type { Database } from "@/types/supabase";

export type TicketRow = Database["public"]["Tables"]["tickets"]["Row"];

export class Ticket {
  id!: string;
  created_at!: string;
  updated_at!: string;
  customer_id!: string;
  subject!: string;
  description!: string;
  status!: TicketRow["status"];
  priority!: TicketRow["priority"];
  assigned_to!: string | null;

  constructor(data: TicketRow) {
    Object.assign(this, data);
  }
}
