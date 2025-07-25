export interface Plan {
  id: string
  name: string
  type: 'internet' | 'coverage'
  speed: string
  price: number
  dataLimit: string
  isActive: boolean
  category: string
  showInRegister: boolean
  remark?: string
  imageUrl?: string
  description?: string
  features?: string[]
  createdAt?: string
  updatedAt?: string
}

export interface PlanFormData extends Omit<Plan, 'id' | 'createdAt' | 'updatedAt'> {
  id?: string
}
