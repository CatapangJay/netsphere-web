import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Pencil, Trash2 } from "lucide-react"
import { Plan } from "@/lib/types"

interface PlanTableProps {
  plans: Plan[]
  type: 'internet' | 'coverage'
}

export function PlanTable({ plans, type }: PlanTableProps) {
  const handleEdit = (plan: Plan) => {
    // TODO: Implement edit functionality
    console.log('Edit plan:', plan)
  }

  const handleDelete = (planId: string) => {
    // TODO: Implement delete functionality
    if (confirm('Are you sure you want to delete this plan?')) {
      console.log('Delete plan:', planId)
    }
  }

  if (plans.length === 0) {
    return (
      <div className="rounded-md border py-8 text-center">
        <p className="text-muted-foreground">No {type} plans found</p>
      </div>
    )
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Speed</TableHead>
            <TableHead>Data Limit</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {plans.map((plan) => (
            <TableRow key={plan.id}>
              <TableCell className="font-medium">{plan.name}</TableCell>
              <TableCell>{plan.speed}</TableCell>
              <TableCell>{plan.dataLimit}</TableCell>
              <TableCell>₱{plan.price.toLocaleString()}</TableCell>
              <TableCell>
                <Badge variant={plan.isActive ? 'default' : 'secondary'}>
                  {plan.isActive ? 'Active' : 'Inactive'}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleEdit(plan)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(plan.id)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
