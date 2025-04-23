import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Activity, AlertCircle, ArrowUpDown, Download, RefreshCw, Router, Wifi, WifiOff } from "lucide-react"

export default function NetworkPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Network</h1>
        <p className="text-muted-foreground">Monitor and manage your network infrastructure.</p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex w-full sm:w-auto items-center gap-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh Status
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export Data
          </Button>
        </div>
        <div className="flex w-full sm:w-auto items-center gap-2">
          <Badge variant="outline" className="text-xs">
            Last updated: {new Date().toLocaleTimeString()}
          </Badge>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Devices Online</CardTitle>
            <Router className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15/16</div>
            <p className="text-xs text-muted-foreground">93.75% availability</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Bandwidth</CardTitle>
            <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.2 Gbps</div>
            <p className="text-xs text-muted-foreground">60% of capacity</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Connections</CardTitle>
            <Wifi className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,245</div>
            <p className="text-xs text-muted-foreground">+120 from yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Network Alerts</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">1 critical, 2 warnings</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="devices">Devices</TabsTrigger>
          <TabsTrigger value="traffic">Traffic</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Network Topology</CardTitle>
              <CardDescription>Visual representation of your network infrastructure</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                <div className="text-center">
                  <Router className="mx-auto h-16 w-16 text-muted" />
                  <p className="mt-4 text-sm text-muted-foreground">
                    Network topology visualization will be displayed here
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="devices" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Network Devices</CardTitle>
              <CardDescription>Status of all connected network devices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Card key={i}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                            {i !== 2 ? (
                              <Wifi className="h-4 w-4 text-primary" />
                            ) : (
                              <WifiOff className="h-4 w-4 text-destructive" />
                            )}
                          </div>
                          <div>
                            <p className="text-sm font-medium">Router {i + 1}</p>
                            <p className="text-xs text-muted-foreground">192.168.1.{i + 1}</p>
                          </div>
                        </div>
                        <Badge variant={i !== 2 ? "default" : "destructive"} className="text-xs">
                          {i !== 2 ? "Online" : "Offline"}
                        </Badge>
                      </div>
                      <div className="mt-4 space-y-2">
                        <div className="flex justify-between text-xs">
                          <span>Uptime</span>
                          <span>{i !== 2 ? "5d 12h 30m" : "0d 0h 0m"}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span>Load</span>
                          <span>{i !== 2 ? "45%" : "0%"}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span>Clients</span>
                          <span>{i !== 2 ? `${(i + 1) * 50}` : "0"}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="traffic" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Traffic Analysis</CardTitle>
              <CardDescription>Bandwidth usage and traffic patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                <div className="text-center">
                  <Activity className="mx-auto h-16 w-16 text-muted" />
                  <p className="mt-4 text-sm text-muted-foreground">
                    Traffic graphs and analytics will be displayed here
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="alerts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Network Alerts</CardTitle>
              <CardDescription>Recent network issues and warnings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-lg border p-4">
                  <AlertCircle className="mt-0.5 h-5 w-5 text-destructive" />
                  <div className="space-y-1">
                    <p className="font-medium">Router 3 Offline</p>
                    <p className="text-sm text-muted-foreground">
                      Device at 192.168.1.3 has been offline for 2 hours and 15 minutes.
                    </p>
                    <div className="flex items-center gap-2 pt-1">
                      <Badge variant="outline" className="text-xs">
                        Critical
                      </Badge>
                      <span className="text-xs text-muted-foreground">2 hours ago</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg border p-4">
                  <AlertCircle className="mt-0.5 h-5 w-5 text-yellow-500" />
                  <div className="space-y-1">
                    <p className="font-medium">High Bandwidth Usage</p>
                    <p className="text-sm text-muted-foreground">
                      Router 1 is experiencing unusually high bandwidth consumption.
                    </p>
                    <div className="flex items-center gap-2 pt-1">
                      <Badge variant="outline" className="text-xs">
                        Warning
                      </Badge>
                      <span className="text-xs text-muted-foreground">45 minutes ago</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg border p-4">
                  <AlertCircle className="mt-0.5 h-5 w-5 text-yellow-500" />
                  <div className="space-y-1">
                    <p className="font-medium">Intermittent Connection</p>
                    <p className="text-sm text-muted-foreground">
                      Router 5 is experiencing intermittent connectivity issues.
                    </p>
                    <div className="flex items-center gap-2 pt-1">
                      <Badge variant="outline" className="text-xs">
                        Warning
                      </Badge>
                      <span className="text-xs text-muted-foreground">1 hour ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
