import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { v4 as uuidv4 } from "uuid"
import { UseFormReturn } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Plan, PlanFormData } from "@/lib/types"

// Define the form schema with proper types
type PlanFormValues = {
  id?: string;
  name: string;
  type: "internet" | "coverage";
  speed: string;
  price: number;
  dataLimit: string;
  description?: string;
  isActive: boolean;
  features: string[];
};

// Create the form schema with proper typing
const formSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  type: z.enum(["internet", "coverage"]),
  speed: z.string().min(1, {
    message: "Speed is required.",
  }),
  price: z.preprocess(
    (val) => (typeof val === 'string' ? parseFloat(val) : val),
    z.number().min(0, {
      message: "Price must be a positive number.",
    })
  ),
  dataLimit: z.string().min(1, {
    message: "Data limit is required.",
  }),
  description: z.string().optional(),
  isActive: z.boolean().default(true),
  features: z.array(z.string()).default([])
}) as z.ZodType<PlanFormValues>;

type FormValues = PlanFormValues;

interface PlanFormProps {
  isOpen: boolean
  onClose: () => void
  type: "internet" | "coverage"
  plan?: Plan
}

export function PlanForm({ isOpen, onClose, type, plan }: PlanFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [featureInput, setFeatureInput] = useState("")
  
  type FormValues = z.infer<typeof formSchema>;
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: plan?.id,
      name: plan?.name || "",
      type: (plan?.type || type) as "internet" | "coverage",
      speed: plan?.speed || "",
      price: plan?.price || 0,
      dataLimit: plan?.dataLimit || "",
      description: plan?.description,
      isActive: plan?.isActive ?? true,
      features: plan?.features || [],
    },
    mode: 'onChange',
  })

  const features = form.watch("features") || []

  useEffect(() => {
    if (plan) {
      form.reset({
        ...plan,
        features: plan.features || [],
      })
    } else {
      form.reset({
        id: "",
        name: "",
        type,
        speed: "",
        price: 0,
        dataLimit: "",
        description: "",
        isActive: true,
        features: [],
      })
    }
  }, [plan, type, form])

  const addFeature = () => {
    if (featureInput.trim()) {
      form.setValue("features", [...(features || []), featureInput.trim()])
      setFeatureInput("")
    }
  }

  const removeFeature = (index: number) => {
    const newFeatures = [...(features || [])]
    newFeatures.splice(index, 1)
    form.setValue("features", newFeatures)
  }

  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    try {
      setIsSubmitting(true)
      
      // Prepare the plan data
      const planData: Plan = {
        id: values.id || uuidv4(),
        name: values.name,
        type: values.type,
        speed: values.speed,
        price: Number(values.price),
        dataLimit: values.dataLimit,
        description: values.description,
        isActive: values.isActive,
        features: values.features || [],
        updatedAt: new Date().toISOString(),
      }

      if (!values.id) {
        planData.createdAt = new Date().toISOString()
      }

      // TODO: Replace with actual API call
      console.log('Saving plan:', planData)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Close the form and reset
      onClose()
      form.reset()
    } catch (error) {
      console.error('Error saving plan:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{plan ? 'Edit' : 'Add New'} {type === 'internet' ? 'Internet' : 'Coverage'} Plan</DialogTitle>
          <DialogDescription>
            {plan ? 'Update the plan details below.' : 'Fill in the details below to create a new plan.'}
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Plan Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Premium Internet" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="speed"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Speed</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 100 Mbps" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price (₱)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="e.g., 1999"
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="dataLimit"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Data Limit</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Unlimited or 500 GB" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="isActive"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">Active</FormLabel>
                      <FormDescription>
                        {field.value ? 'This plan is currently active' : 'This plan is currently inactive'}
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter a brief description of the plan..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="col-span-2 space-y-2">
                <FormLabel>Features</FormLabel>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Add a feature (e.g., 24/7 support)"
                    value={featureInput}
                    onChange={(e) => setFeatureInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addFeature())}
                  />
                  <Button type="button" onClick={addFeature}>
                    Add
                  </Button>
                </div>
                
                {features && features.length > 0 && (
                  <div className="mt-2 space-y-2">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center justify-between rounded-md border px-3 py-2">
                        <span>{feature}</span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 text-destructive"
                          onClick={() => removeFeature(index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Saving...' : 'Save Plan'}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
