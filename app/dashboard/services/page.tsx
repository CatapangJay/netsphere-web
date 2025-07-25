"use client"

import { useState } from "react"
import { Plus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlanTable } from "@/components/services/plan-table"
import { PlanForm } from "@/components/services/plan-form"
import { Plan } from "@/lib/types"

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("internet")

  // Sample data - replace with actual data fetching
  const internetPlans: Plan[] = [
    {
      id: "1",
      name: "Basic Internet",
      type: "internet",
      speed: "25 Mbps",
      price: 999,
      dataLimit: "Unlimited",
      category: "Residential",
      showInRegister: true,
      remark: "Best for light browsing",
      imageUrl: "https://via.placeholder.com/100",
      isActive: true,
    },
    {
      id: "2",
      name: "Premium Internet",
      type: "internet",
      speed: "100 Mbps",
      price: 1999,
      dataLimit: "Unlimited",
      category: "Business",
      showInRegister: true,
      remark: "Ideal for streaming and gaming",
      imageUrl: "https://via.placeholder.com/100",
      isActive: true,
    },
  ]

  const coveragePlans: Plan[] = [
    {
      id: "c1",
      name: "Basic Coverage",
      type: "coverage",
      speed: "5 Mbps",
      price: 499,
      dataLimit: "100 GB",
      category: "Residential",
      showInRegister: true,
      remark: "Basic coverage for rural areas",
      imageUrl: "https://via.placeholder.com/100",
      isActive: true,
    },
  ]

  const filteredPlans = (activeTab === "internet" ? internetPlans : coveragePlans).filter(
    (plan) =>
      plan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plan.speed.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="flex-1 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Services</h1>
          <p className="text-muted-foreground">
            Manage your internet and coverage plans
          </p>
        </div>
        <Button onClick={() => setIsFormOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Plan
        </Button>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search plans..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="internet" onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="internet">Internet Plans</TabsTrigger>
            <TabsTrigger value="coverage">Coverage Plans</TabsTrigger>
          </TabsList>
          <TabsContent value="internet" className="mt-4">
            <PlanTable plans={filteredPlans} type="internet" />
          </TabsContent>
          <TabsContent value="coverage" className="mt-4">
            <PlanTable plans={filteredPlans} type="coverage" />
          </TabsContent>
        </Tabs>
      </div>

      <PlanForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        type={activeTab as "internet" | "coverage"}
      />
    </div>
  )
}
