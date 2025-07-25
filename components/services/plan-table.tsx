import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, X, Pencil, Trash2 } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Plan } from "@/lib/types"
import Image from "next/image"

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
            <TableHead>Price</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Show in Register</TableHead>
            <TableHead>Remark</TableHead>
            <TableHead>Image</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {plans.map((plan) => (
            <TableRow key={plan.id}>
              <TableCell className="font-medium">{plan.name}</TableCell>
              <TableCell>₱{plan.price.toLocaleString()}</TableCell>
              <TableCell>{plan.category}</TableCell>
              <TableCell>
                <Badge variant={plan.isActive ? 'default' : 'secondary'}>
                  {plan.isActive ? 'Active' : 'Inactive'}
                </Badge>
              </TableCell>
              <TableCell>
                {plan.showInRegister ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <X className="h-4 w-4 text-red-500" />
                )}
              </TableCell>
              <TableCell className="max-w-[200px] truncate">{plan.remark || '-'}</TableCell>
              <TableCell>
                {plan.imageUrl ? (
                  <div className="relative h-10 w-10">
                    <Image
                      src={plan.imageUrl}
                      alt={plan.name}
                      fill
                      className="rounded-md object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">No image</span>
                  </div>
                )}
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
