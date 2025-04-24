import type { Database } from "@/types/supabase";

export type NetworkDeviceRow = Database["public"]["Tables"]["network_devices"]["Row"];

export class NetworkDevice {
  id!: string;
  created_at!: string;
  updated_at!: string;
  name!: string;
  ip_address!: string;
  api_port!: number;
  device_type!: NetworkDeviceRow["device_type"];
  credentials!: string;
  status!: NetworkDeviceRow["status"];
  last_checked!: string | null;

  constructor(data: NetworkDeviceRow) {
    Object.assign(this, data);
  }
}
