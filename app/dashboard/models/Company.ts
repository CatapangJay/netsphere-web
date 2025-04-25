import type { Database } from "@/types/supabase";

export type CompanyRow = Database["public"]["Tables"]["companies"]["Row"];

export class Company {
  id!: string;
  created_at!: string;
  updated_at!: string;
  name!: string;
  address!: string;
  city!: string;
  country!: string;

  constructor(data: CompanyRow) {
    Object.assign(this, data);
  }
}
