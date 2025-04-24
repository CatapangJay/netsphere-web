import type { Database } from "@/types/supabase";

export type SubscriptionRow = Database["public"]["Tables"]["subscriptions"]["Row"];

export class Subscription {
  id!: string;
  created_at!: string;
  updated_at!: string;
  customer_id!: string;
  service_plan_id!: string;
  start_date!: string;
  end_date!: string | null;
  status!: SubscriptionRow["status"];
  ip_address!: string | null;
  mac_address!: string | null;

  constructor(data: SubscriptionRow) {
    Object.assign(this, data);
  }
}
