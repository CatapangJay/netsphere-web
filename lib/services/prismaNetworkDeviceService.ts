import { PrismaClient } from "@prisma/client"
import {
  NetworkDeviceService,
  NetworkDevice,
  NewNetworkDevice,
  UpdateNetworkDevice,
} from "./networkDeviceService.interface"

// Ensure your DATABASE_URL env var is set to your Supabase Postgres connection string.
export class PrismaNetworkDeviceService implements NetworkDeviceService {
  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  async getAllDevices(): Promise<NetworkDevice[]> {
    const devices = await this.prisma.networkDevice.findMany()
    return devices as unknown as NetworkDevice[]
  }

  async getDeviceById(id: string): Promise<NetworkDevice | null> {
    const device = await this.prisma.networkDevice.findUnique({ where: { id } })
    return device as unknown as NetworkDevice | null
  }

  async createDevice(device: NewNetworkDevice): Promise<NetworkDevice> {
    const created = await this.prisma.networkDevice.create({ data: device as any })
    return created as unknown as NetworkDevice
  }

  async updateDevice(id: string, device: UpdateNetworkDevice): Promise<NetworkDevice> {
    const updated = await this.prisma.networkDevice.update({
      where: { id },
      data: device as any,
    })
    return updated as unknown as NetworkDevice
  }

  async deleteDevice(id: string): Promise<void> {
    await this.prisma.networkDevice.delete({ where: { id } })
  }
}
