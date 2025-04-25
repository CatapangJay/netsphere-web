import type { Database } from "@/types/supabase"

// Types for network_devices table
export type NetworkDevice = Database["public"]["Tables"]["network_devices"]["Row"]
export type NewNetworkDevice = Database["public"]["Tables"]["network_devices"]["Insert"]
export type UpdateNetworkDevice = Database["public"]["Tables"]["network_devices"]["Update"]

// Service interface for network device CRUD operations
export interface NetworkDeviceService {
  getAllDevices(): Promise<NetworkDevice[]>
  getDeviceById(id: string): Promise<NetworkDevice | null>
  createDevice(device: NewNetworkDevice): Promise<NetworkDevice>
  updateDevice(id: string, device: UpdateNetworkDevice): Promise<NetworkDevice>
  deleteDevice(id: string): Promise<void>
}
