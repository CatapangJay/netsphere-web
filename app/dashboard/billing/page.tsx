import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CreditCard, Download, FileText, Filter, MoreHorizontal, Plus, Search } from "lucide-react"

// Mock data for invoices
const invoices = [
  {
    id: "INV-001",
    customer: "John Smith",
    amount: "$129.99",
    status: "paid",
    date: "Jan 15, 2023",
    dueDate: "Jan 30, 2023",
  },
  {
    id: "INV-002",
    customer: "Sarah Johnson",
    amount: "$89.99",
    status: "paid",
    date: "Feb 3, 2023",
    dueDate: "Feb 18, 2023",
  },
  {
    id: "INV-003",
    customer: "Michael Brown",
    amount: "$199.99",
    status: "overdue",
    date: "Mar 22, 2023",
    dueDate: "Apr 6, 2023",
  },
  {
    id: "INV-004",
    customer: "Emily Davis",
    amount: "$59.99",
    status: "pending",
    date: "Apr 10, 2023",
    dueDate: "Apr 25, 2023",
  },
  {
    id: "INV-005",
    customer: "Robert Wilson",
    amount: "$149.99",
    status: "draft",
    date: "May 5, 2023",
    dueDate: "May 20, 2023",
  },
]

// Mock data for payment methods
const paymentMethods = [
  {
    id: "pm-001",
    name: "Stripe",
    status: "active",
    fee: "2.9% + $0.30",
    transactions: "1,245",
  },
  {
    id: "pm-002",
    name: "PayPal",
    status: "active",
    fee: "3.49% + $0.49",
    transactions: "856",
  },
  {
    id: "pm-003",
    name: "Bank Transfer",
    status: "active",
    fee: "$0.25 flat",
    transactions: "423",
  },
]

export default function BillingPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Billing</h1>
        <p className="text-muted-foreground">Manage invoices, payments, and billing settings.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,543.00</div>
            <p className="text-xs text-muted-foreground">15 invoices pending</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Overdue Payments</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$3,890.00</div>
            <p className="text-xs text-muted-foreground">8 invoices overdue</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Payment Success Rate</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <p className="text-xs text-muted-foreground">+2.4% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="invoices" className="space-y-4">
        <TabsList>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="payments">Payment Methods</TabsTrigger>
          <TabsTrigger value="plans">Service Plans</TabsTrigger>
        </TabsList>
        <TabsContent value="invoices" className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex w-full sm:w-auto items-center gap-2">
              <div className="relative w-full sm:w-[300px]">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search invoices..." className="w-full pl-8" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
            </div>
            <div className="flex w-full sm:w-auto items-center gap-2">
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Create Invoice
              </Button>
            </div>
          </div>

          <Card>
            <CardHeader className="p-4 sm:p-6">
              <CardTitle>Invoice List</CardTitle>
              <CardDescription>Manage and track customer invoices</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell className="font-medium">{invoice.id}</TableCell>
                      <TableCell>{invoice.customer}</TableCell>
                      <TableCell>{invoice.amount}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            invoice.status === "paid"
                              ? "default"
                              : invoice.status === "pending"
                                ? "outline"
                                : invoice.status === "overdue"
                                  ? "destructive"
                                  : "secondary"
                          }
                        >
                          {invoice.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{invoice.date}</TableCell>
                      <TableCell>{invoice.dueDate}</TableCell>
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
                            <DropdownMenuItem>View Invoice</DropdownMenuItem>
                            <DropdownMenuItem>Send Reminder</DropdownMenuItem>
                            <DropdownMenuItem>Mark as Paid</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">Delete Invoice</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="payments" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Payment Gateways</h2>
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Add Payment Method
            </Button>
          </div>
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Transaction Fee</TableHead>
                    <TableHead>Transactions</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paymentMethods.map((method) => (
                    <TableRow key={method.id}>
                      <TableCell className="font-medium">{method.name}</TableCell>
                      <TableCell>
                        <Badge variant="default">{method.status}</Badge>
                      </TableCell>
                      <TableCell>{method.fee}</TableCell>
                      <TableCell>{method.transactions}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          Configure
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="plans" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Service Plans</h2>
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Create Plan
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Residential Basic</CardTitle>
                <CardDescription>Entry-level residential internet plan</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold">
                  $59.99<span className="text-sm font-normal text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>25 Mbps Download</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>5 Mbps Upload</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Unlimited Data</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Basic Support</span>
                  </li>
                </ul>
                <Button className="w-full">Edit Plan</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Residential Plus</CardTitle>
                <CardDescription>Mid-tier residential internet plan</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold">
                  $89.99<span className="text-sm font-normal text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>100 Mbps Download</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>20 Mbps Upload</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Unlimited Data</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Priority Support</span>
                  </li>
                </ul>
                <Button className="w-full">Edit Plan</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Business Pro</CardTitle>
                <CardDescription>Professional business internet plan</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold">
                  $199.99<span className="text-sm font-normal text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>500 Mbps Download</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>100 Mbps Upload</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Unlimited Data</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>24/7 Premium Support</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Static IP Address</span>
                  </li>
                </ul>
                <Button className="w-full">Edit Plan</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
