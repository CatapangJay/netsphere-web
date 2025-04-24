import type { Database } from "@/types/supabase";

export type ServicePlanRow = Database["public"]["Tables"]["service_plans"]["Row"];

export class ServicePlan {
  id!: string;
  created_at!: string;
  updated_at!: string;
  name!: string;
  description!: string;
  price!: number;
  bandwidth_up!: number;
  bandwidth_down!: number;
  is_active!: boolean;

  constructor(data: ServicePlanRow) {
    Object.assign(this, data);
  }
}
