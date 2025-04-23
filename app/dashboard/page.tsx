import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import {
  Activity,
  AlertCircle,
  ArrowUpRight,
  BarChart3,
  CreditCard,
  DollarSign,
  Download,
  Users,
  Wifi,
} from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to your ISP management dashboard.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Subscribers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2,350</div>
            <p className="text-xs text-muted-foreground">+180 new subscribers</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Devices</CardTitle>
            <Wifi className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">98.5% uptime average</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Open Tickets</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">4 high priority</p>
          </CardContent>
        </Card>
      </div>

      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Setup Wizard</AlertTitle>
        <AlertDescription>
          Complete your ISP setup by connecting your first MikroTik device and configuring your service plans.
        </AlertDescription>
        <Button size="sm" variant="outline" className="mt-2">
          Continue Setup
        </Button>
      </Alert>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[200px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                  <BarChart3 className="h-16 w-16 text-muted" />
                </div>
              </CardContent>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Latest payment activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                        <CreditCard className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">Payment from Customer #{i}</p>
                        <p className="text-xs text-muted-foreground">{new Date().toLocaleDateString()}</p>
                      </div>
                      <div className="font-medium">+$129.00</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Network Status</CardTitle>
                <CardDescription>Current network performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-sm">Uptime</div>
                  <div className="font-medium">99.8%</div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="text-sm">Bandwidth Usage</div>
                  <div className="font-medium">78%</div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="text-sm">Active Connections</div>
                  <div className="font-medium">1,245</div>
                </div>
                <Button variant="outline" size="sm" className="mt-4 w-full">
                  View Details
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Recent Tickets</CardTitle>
                <CardDescription>Latest support requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {["Network Outage", "Billing Issue", "Speed Problem"].map((title, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div
                        className={`h-2 w-2 rounded-full ${i === 0 ? "bg-red-500" : i === 1 ? "bg-yellow-500" : "bg-green-500"}`}
                      />
                      <div className="text-sm">{title}</div>
                      <div className="flex-1 text-right text-xs text-muted-foreground">
                        {i === 0 ? "High" : i === 1 ? "Medium" : "Low"}
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="mt-4 w-full">
                  View All Tickets
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks and operations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" className="justify-start">
                    <Users className="mr-2 h-4 w-4" />
                    Add Customer
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Create Invoice
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    <Download className="mr-2 h-4 w-4" />
                    Export Data
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    <ArrowUpRight className="mr-2 h-4 w-4" />
                    Run Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="h-[400px] flex items-center justify-center bg-muted/20 rounded-md">
          <div className="text-center">
            <BarChart3 className="mx-auto h-12 w-12 text-muted" />
            <h3 className="mt-4 text-lg font-medium">Analytics Dashboard</h3>
            <p className="mt-2 text-sm text-muted-foreground">Detailed analytics will be displayed here</p>
          </div>
        </TabsContent>
        <TabsContent value="reports" className="h-[400px] flex items-center justify-center bg-muted/20 rounded-md">
          <div className="text-center">
            <Download className="mx-auto h-12 w-12 text-muted" />
            <h3 className="mt-4 text-lg font-medium">Reports Center</h3>
            <p className="mt-2 text-sm text-muted-foreground">Generate and download custom reports</p>
          </div>
        </TabsContent>
        <TabsContent
          value="notifications"
          className="h-[400px] flex items-center justify-center bg-muted/20 rounded-md"
        >
          <div className="text-center">
            <AlertCircle className="mx-auto h-12 w-12 text-muted" />
            <h3 className="mt-4 text-lg font-medium">Notification Center</h3>
            <p className="mt-2 text-sm text-muted-foreground">System alerts and notifications will appear here</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
