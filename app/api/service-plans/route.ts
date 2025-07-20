import { NextResponse } from 'next/server'
import { z } from 'zod'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const servicePlanSchema = z.object({
  name: z.string().min(2),
  price: z.number().min(0),
  bandwidth: z.number().min(0),
  type: z.enum(['Wired', 'Wireless']),
  category: z.string(),
  status: z.enum(['Active', 'Inactive']),
  displayStatus: z.enum(['Active', 'Inactive']),
  description: z.array(z.string()),
  imageUrl: z.string().optional(),
})

export async function GET() {
  try {
    const servicePlans = await prisma.servicePlan.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
    return NextResponse.json({ servicePlans })
  } catch (error) {
    console.error('Failed to fetch service plans:', error)
    return NextResponse.json({ error: 'Failed to fetch service plans' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const json = await request.json()
    const validatedData = servicePlanSchema.parse(json)
    
    const plan = await prisma.servicePlan.create({
      data: validatedData
    })
    
    return NextResponse.json({ plan })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 })
    }
    console.error('Failed to create service plan:', error)
    return NextResponse.json({ error: 'Failed to create service plan' }, { status: 500 })
  }
}
