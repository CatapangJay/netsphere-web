import type { Database } from "@/types/supabase"
import { createServerSupabaseClient } from "../supabase"

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

// Supabase implementation of the NetworkDeviceService
export class SupabaseNetworkDeviceService implements NetworkDeviceService {
  private supabase = createServerSupabaseClient()

  async getAllDevices(): Promise<NetworkDevice[]> {
    const { data, error } = await this.supabase
      .from("network_devices")
      .select("*")
    if (error) throw error
    return data ?? []
  }

  async getDeviceById(id: string): Promise<NetworkDevice | null> {
    const { data, error } = await this.supabase
      .from("network_devices")
      .select("*")
      .eq("id", id)
      .single()
    if (error) throw error
    return data
  }

  async createDevice(device: NewNetworkDevice): Promise<NetworkDevice> {
    const { data, error } = await this.supabase
      .from("network_devices")
      .insert(device)
      .single()
    if (error) throw error
    return data!
  }

  async updateDevice(id: string, device: UpdateNetworkDevice): Promise<NetworkDevice> {
    const { data, error } = await this.supabase
      .from("network_devices")
      .update(device)
      .eq("id", id)
      .single()
    if (error) throw error
    return data!
  }

  async deleteDevice(id: string): Promise<void> {
    const { error } = await this.supabase
      .from("network_devices")
      .delete()
      .eq("id", id)
    if (error) throw error
  }
}
