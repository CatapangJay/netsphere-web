'use client';

import type React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BarChart3, Globe, Server, Users, Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface PricingPlan {
  name: string
  description: string
  price: {
    monthly: number
    yearly: number
  }
  features: string[]
}

const sharedPlans: PricingPlan[] = [
  {
    name: "Basic",
    description: "Perfect for small ISPs starting out",
    price: { monthly: 300, yearly: 5000 },
    features: [
      "50/100 Customers",
      "1 Mikrotik",
      "Built-in Android App",
      "Free domain (.com & .net)",
      "Payment Gateway",
      "Mikrotik Integration",
      "SMS Integration",
      "Telegram Integration",
      "Whatsapp Integration"
    ]
  },
  {
    name: "Starter",
    description: "Great for growing ISPs",
    price: { monthly: 500, yearly: 7000 },
    features: [
      "150/300 Customers",
      "2 Mikrotik",
      "Built-in Android App",
      "Free domain (.com & .net)",
      "Payment Gateway",
      "Mikrotik Integration",
      "SMS Integration",
      "Telegram Integration",
      "Whatsapp Integration"
    ]
  },
  {
    name: "Enterprise",
    description: "For established ISP businesses",
    price: { monthly: 850, yearly: 8000 },
    features: [
      "500 Customers",
      "3 Mikrotik",
      "Built-in Apps (Android, iOS, Windows)",
      "Free domain (.com & .net)",
      "Payment Gateway",
      "Mikrotik Integration",
      "SMS Integration",
      "Telegram Integration",
      "Whatsapp Integration"
    ]
  },
  {
    name: "Silver",
    description: "Advanced features for larger ISPs",
    price: { monthly: 1200, yearly: 9000 },
    features: [
      "800 Customers",
      "4 Mikrotik",
      "Built-in Apps (Android, iOS, Windows)",
      "Free domain (.com & .net)",
      "Payment Gateway",
      "Mikrotik Integration",
      "SMS Integration",
      "Telegram Integration",
      "Whatsapp Integration"
    ]
  }
]

const privatePlans: PricingPlan[] = [
  {
    name: "Gold",
    description: "Private server with enhanced capabilities",
    price: { monthly: 1500, yearly: 10000 },
    features: [
      "1,000 Customers",
      "5 Mikrotik",
      "Built-in Apps (Android, iOS, Windows)",
      "Free domain (.com & .net)",
      "Payment Gateway",
      "Mikrotik Integration",
      "SMS Integration",
      "Telegram Integration",
      "Whatsapp Integration"
    ]
  },
  {
    name: "Executive +",
    description: "Premium private server solution",
    price: { monthly: 10500, yearly: 35000 },
    features: [
      "10,500 Customers",
      "35 Mikrotik",
      "Built-in Apps (Android, iOS, Windows)",
      "Free domains (.com, .net, .ph)",
      "Free Email Server",
      "Payment Gateway",
      "Mikrotik Integration",
      "SMS Integration",
      "Telegram Integration",
      "Whatsapp Integration"
    ]
  },
  {
    name: "Executive Pro",
    description: "Ultimate ISP management solution",
    price: { monthly: 15000, yearly: 40000 },
    features: [
      "15,500 Customers",
      "45 Mikrotik",
      "Built-in Apps (Android, iOS, Windows)",
      "Free domains (.com, .net, .ph)",
      "Free Email Server",
      "Payment Gateway",
      "Mikrotik Integration",
      "SMS Integration",
      "Telegram Integration",
      "Whatsapp Integration"
    ]
  }
]

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container max-w-7xl mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Globe className="h-6 w-6 text-primary" />
            <span>NetSphere ISP Suite</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <button
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/auth/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/auth/register/oxaps">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30 w-full">
          <div className="container max-w-7xl mx-auto flex flex-col items-center text-center gap-8 px-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Manage Your ISP Business <br className="hidden md:inline" />
              <span className="text-primary">All in One Platform</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-[800px]">
              NetSphere combines billing automation, network device integration, customer management, and service
              provisioning in a unified solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link href="/auth/register">
                <Button size="lg" className="gap-2">
                  Start Free Trial <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="#demo">
                <Button size="lg" variant="outline">
                  Request Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 w-full">
          <div className="container max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Comprehensive ISP Management</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<BarChart3 className="h-10 w-10 text-primary" />}
                title="Billing Automation"
                description="Automated invoicing, recurring billing, payment gateway integration, and financial reporting."
              />
              <FeatureCard
                icon={<Server className="h-10 w-10 text-primary" />}
                title="MikroTik Integration"
                description="API connection management, bandwidth monitoring, hotspot user management, and automated provisioning."
              />
              <FeatureCard
                icon={<Users className="h-10 w-10 text-primary" />}
                title="Customer Management"
                description="Customer profiles, service plan management, ticket system, and self-service portal."
              />
              {/* Additional feature cards would go here */}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 w-full bg-muted/30">
          <div className="container max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Pricing Plans</h2>
            <p className="text-muted-foreground text-lg text-center mb-12">
              Choose the perfect plan for your ISP business
            </p>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-center">Shared Server Plans</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {sharedPlans.map((plan) => (
                  <Card key={plan.name} className="flex flex-col">
                    <CardHeader>
                      <CardTitle>{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="mb-6">
                        <div className="text-3xl font-bold">₱{plan.price.monthly}</div>
                        <div className="text-muted-foreground">per month</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          or ₱{plan.price.yearly} yearly
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-green-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href={`/auth/register?plan=${plan.name.toLowerCase()}`}>
                        <Button className="w-full">Get Started</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">Private Server Plans</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {privatePlans.map((plan) => (
                  <Card key={plan.name} className="flex flex-col">
                    <CardHeader>
                      <CardTitle>{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="mb-6">
                        <div className="text-3xl font-bold">₱{plan.price.monthly}</div>
                        <div className="text-muted-foreground">per month</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          or ₱{plan.price.yearly} yearly
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-green-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href={`/auth/register?plan=${plan.name.toLowerCase()}`}>
                        <Button className="w-full">Get Started</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 w-full">
          <div className="container max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">About NetSphere</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-muted-foreground mb-6">
                NetSphere is a comprehensive ISP management platform that combines billing automation, network device integration, 
                customer management, and service provisioning. Our platform aims to provide ISPs with a unified solution to manage 
                their entire operation, from subscriber onboarding to network monitoring and financial reporting.
              </p>
              <p className="text-lg text-muted-foreground">
                Built with modern technologies and designed for scalability, NetSphere helps small to medium ISPs streamline their 
                operations and grow their business efficiently.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-8 bg-muted/30 w-full">
        <div className="container max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4">
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" />
            <span className="font-semibold">NetSphere ISP Suite</span>
          </div>
          <p className="text-sm text-muted-foreground"> {new Date().getFullYear()} NetSphere. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
