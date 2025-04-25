import type { Database } from "@/types/supabase"
import { createServerSupabaseClient } from "../supabase"
import {
  NetworkDeviceService,
  NetworkDevice,
  NewNetworkDevice,
  UpdateNetworkDevice,
} from "./networkDeviceService.interface"

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
