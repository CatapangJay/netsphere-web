import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AlertCircle, Download, MoreHorizontal, Plus, RefreshCw, Router, Settings } from "lucide-react"

// Mock data for devices
const devices = [
  {
    id: "DEV-001",
    name: "Main Router",
    type: "mikrotik",
    model: "CCR1036-8G-2S+",
    ip: "192.168.1.1",
    status: "online",
    lastSeen: "2 minutes ago",
    uptime: "45 days, 12 hours",
  },
  {
    id: "DEV-002",
    name: "Office Switch",
    type: "mikrotik",
    model: "CRS326-24G-2S+",
    ip: "192.168.1.2",
    status: "online",
    lastSeen: "5 minutes ago",
    uptime: "30 days, 8 hours",
  },
  {
    id: "DEV-003",
    name: "Backup Router",
    type: "mikrotik",
    model: "RB4011iGS+",
    ip: "192.168.1.3",
    status: "offline",
    lastSeen: "2 hours ago",
    uptime: "0 days, 0 hours",
  },
  {
    id: "DEV-004",
    name: "Residential AP 1",
    type: "mikrotik",
    model: "wAP ac",
    ip: "192.168.1.4",
    status: "online",
    lastSeen: "10 minutes ago",
    uptime: "15 days, 6 hours",
  },
  {
    id: "DEV-005",
    name: "Residential AP 2",
    type: "mikrotik",
    model: "wAP ac",
    ip: "192.168.1.5",
    status: "online",
    lastSeen: "8 minutes ago",
    uptime: "12 days, 3 hours",
  },
]

export default function DevicesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Network Devices</h1>
        <p className="text-muted-foreground">Manage and monitor your MikroTik and other network devices.</p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex w-full sm:w-auto items-center gap-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh Status
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export List
          </Button>
        </div>
        <div className="flex w-full sm:w-auto items-center gap-2">
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Add Device
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="p-4 sm:p-6">
          <CardTitle>Device List</CardTitle>
          <CardDescription>Manage your network infrastructure devices</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Model</TableHead>
                <TableHead>IP Address</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Seen</TableHead>
                <TableHead>Uptime</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {devices.map((device) => (
                <TableRow key={device.id}>
                  <TableCell className="font-medium">{device.name}</TableCell>
                  <TableCell>{device.type}</TableCell>
                  <TableCell>{device.model}</TableCell>
                  <TableCell>{device.ip}</TableCell>
                  <TableCell>
                    <Badge variant={device.status === "online" ? "default" : "destructive"}>{device.status}</Badge>
                  </TableCell>
                  <TableCell>{device.lastSeen}</TableCell>
                  <TableCell>{device.uptime}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit Device</DropdownMenuItem>
                        <DropdownMenuItem>
                          <Settings className="mr-2 h-4 w-4" />
                          Configure
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <RefreshCw className="mr-2 h-4 w-4" />
                          Reboot Device
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          <AlertCircle className="mr-2 h-4 w-4" />
                          Remove Device
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Device Health</CardTitle>
            <CardDescription>Overview of device status and health metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Online Devices</div>
                <div className="text-sm">4/5 (80%)</div>
              </div>
              <div className="h-2 w-full rounded-full bg-muted">
                <div className="h-2 w-4/5 rounded-full bg-primary"></div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Average CPU Load</div>
                <div className="text-sm">32%</div>
              </div>
              <div className="h-2 w-full rounded-full bg-muted">
                <div className="h-2 w-1/3 rounded-full bg-primary"></div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Memory Usage</div>
                <div className="text-sm">45%</div>
              </div>
              <div className="h-2 w-full rounded-full bg-muted">
                <div className="h-2 w-[45%] rounded-full bg-primary"></div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Storage Usage</div>
                <div className="text-sm">28%</div>
              </div>
              <div className="h-2 w-full rounded-full bg-muted">
                <div className="h-2 w-[28%] rounded-full bg-primary"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Device Actions</CardTitle>
            <CardDescription>Common device management operations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <Router className="h-6 w-6 mb-2" />
                <span>Add Device</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <Settings className="h-6 w-6 mb-2" />
                <span>Batch Configure</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <RefreshCw className="h-6 w-6 mb-2" />
                <span>Reboot Devices</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <Download className="h-6 w-6 mb-2" />
                <span>Backup Configs</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
