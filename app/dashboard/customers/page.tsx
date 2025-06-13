"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, UserPlus } from "lucide-react";
import { usePageLoading } from "@/hooks/use-page-loading";
import { 
  PageHeader, 
  SearchAndActions, 
  type PageConfig,
} from "@/lib/page-utils";
import { PageSkeleton } from "@/components/ui/page-skeleton";

type CustomerStatus = 'active' | 'suspended' | 'terminated';

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: CustomerStatus;
  plan: string;
  joined: string;
}



// Mock fetch function - replace with your actual API call
const fetchCustomers = async (): Promise<Customer[]> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Return mock data - replace with actual API call
  return [
    {
      id: "CUST-001",
      name: "John Smith",
      email: "john.smith@example.com",
      phone: "+1 (555) 123-4567",
      status: "active",
      plan: "Business Pro",
      joined: "Jan 15, 2023",
    },
    {
      id: "CUST-002",
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      phone: "+1 (555) 987-6543",
      status: "active",
      plan: "Residential Plus",
      joined: "Feb 3, 2023",
    },
    {
      id: "CUST-003",
      name: "Michael Brown",
      email: "m.brown@example.com",
      phone: "+1 (555) 456-7890",
      status: "suspended",
      plan: "Business Basic",
      joined: "Mar 22, 2023",
    },
    {
      id: "CUST-004",
      name: "Emily Davis",
      email: "emily.d@example.com",
      phone: "+1 (555) 234-5678",
      status: "active",
      plan: "Residential Basic",
      joined: "Apr 10, 2023"
    },
    {
      id: "CUST-005",
      name: "Robert Wilson",
      email: "r.wilson@example.com",
      phone: "+1 (555) 876-5432",
      status: "terminated",
      plan: "Business Pro",
      joined: "May 5, 2023"
    },
    {
      id: "CUST-006",
      name: "Lisa Anderson",
      email: "lisa.a@example.com",
      phone: "+1 (555) 765-4321",
      status: "active",
      plan: "Residential Plus",
      joined: "Jun 18, 2023"
    }
  ];
};

// Loading skeleton for the table rows
function TableRowSkeleton() {
  return (
    <TableRow>
      <TableCell><Skeleton className="h-4 w-[150px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[200px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[150px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[80px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[120px]" /></TableCell>
      <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
      <TableCell className="text-right">
        <Skeleton className="h-8 w-8 rounded-md" />
      </TableCell>
    </TableRow>
  );
}

export default function CustomersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: customers = [], isLoading, error } = usePageLoading<Customer[]>(fetchCustomers);

  // Filter customers based on search query
  const filteredCustomers = customers?.filter(customer => 
    customer?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer?.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer?.phone?.includes(searchQuery)
  ) || [];

  const pageConfig: PageConfig = {
    title: 'Customers',
    description: 'Manage your customer accounts and subscriptions.',
    searchPlaceholder: 'Search customers...',
    primaryActionText: 'Add Customer',
    showExport: true,
    showFilter: true
  };

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)] text-center p-4">
        <h2 className="text-2xl font-bold text-destructive mb-2">Error loading customers</h2>
        <p className="text-muted-foreground mb-4">{error.message}</p>
        <Button onClick={() => window.location.reload()}>Retry</Button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex flex-col gap-6">
        <PageSkeleton 
          {...pageConfig}
          hasSearch
          hasActions
          actionButtons={2}
          tableRows={5}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title={pageConfig.title}
        description={pageConfig.description}
        isLoading={false}
      />

      <SearchAndActions
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isLoading={false}
        config={{
          searchPlaceholder: pageConfig.searchPlaceholder,
          primaryActionText: pageConfig.primaryActionText,
          showExport: pageConfig.showExport,
          showFilter: pageConfig.showFilter,
          onPrimaryAction: () => {
            // Handle add customer action
            console.log('Add customer clicked');
          }
        }}
      />

      <Card>
        <CardHeader className="p-4 sm:p-6">
          <CardTitle>Customer List</CardTitle>
          <CardDescription>Showing {filteredCustomers.length} {filteredCustomers.length === 1 ? 'customer' : 'customers'}</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Plan</TableHead>
                  <TableHead>Joined</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCustomers.length > 0 ? (
                  // Show actual data
                  filteredCustomers.map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell className="font-medium">{customer.name}</TableCell>
                      <TableCell>{customer.email}</TableCell>
                      <TableCell>{customer.phone}</TableCell>
                      <TableCell>
                        <Badge variant={customer.status === 'active' ? 'default' : 'destructive'}>
                          {customer.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{customer.plan}</TableCell>
                      <TableCell>{customer.joined}</TableCell>
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
                            <DropdownMenuItem>Edit Customer</DropdownMenuItem>
                            <DropdownMenuItem>Manage Services</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">
                              {customer.status === 'active' ? 'Suspend' : 'Activate'} Account
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  // Show no results message
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                      No customers found{searchQuery ? ` matching "${searchQuery}"` : ''}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
