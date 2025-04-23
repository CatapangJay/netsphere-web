import { NextResponse } from "next/server"
import { mikrotikAPI } from "@/lib/mikrotik"
import { createServerSupabaseClient } from "@/lib/supabase"

export async function POST(req: Request) {
  try {
    const { deviceId, command } = await req.json()

    if (!deviceId || !command) {
      return NextResponse.json({ error: "Device ID and command are required" }, { status: 400 })
    }

    const supabase = createServerSupabaseClient()

    // Get the device from the database
    const { data: device, error } = await supabase.from("network_devices").select("*").eq("id", deviceId).single()

    if (error || !device) {
      return NextResponse.json({ error: "Device not found" }, { status: 404 })
    }

    // Execute the command on the MikroTik device
    const response = await mikrotikAPI(device, command)

    return NextResponse.json(response)
  } catch (error: any) {
    console.error("Error in MikroTik API route:", error)
    return NextResponse.json({ error: error.message || "An error occurred" }, { status: 500 })
  }
}
