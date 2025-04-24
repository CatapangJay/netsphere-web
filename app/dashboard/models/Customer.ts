import type { Database } from "@/types/supabase";

export type CustomerRow = Database["public"]["Tables"]["customers"]["Row"];

export class Customer {
  id!: string;
  created_at!: string;
  updated_at!: string;
  name!: string;
  email!: string;
  phone!: string;
  address!: string;
  status!: CustomerRow["status"];
  notes!: string | null;
  user_id!: string | null;

  constructor(data: CustomerRow) {
    Object.assign(this, data);
  }
}
