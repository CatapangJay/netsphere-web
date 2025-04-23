'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const pricingPlans = [
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
];

const privatePlans = [
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
];

export default function PricingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start py-10">
      <div className="container max-w-7xl px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Pricing Plans</h1>
          <p className="text-muted-foreground text-lg">
            Choose the perfect plan for your ISP business
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Shared Server Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan) => (
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
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Private Server Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
