# ISP Management Portal Blueprint

## 1. Project Breakdown

**App Name:** NetSphere ISP Suite  
**Platform:** Web Application (Responsive)  
**Summary:** NetSphere is a comprehensive ISP management platform that combines billing automation, network device integration (MikroTik), customer management, and service provisioning. The platform aims to provide ISPs with a unified solution to manage their entire operation, from subscriber onboarding to network monitoring and financial reporting.

**Primary Use Case:**  
Small to medium ISPs needing an all-in-one solution to manage their subscribers, network infrastructure, and billing operations without requiring multiple disparate systems.

**Authentication Requirements:**  
- Role-based access control (Admin, Technician, Billing, Customer Support)  
- Email/password auth with Supabase Auth  
- 2FA for admin accounts  
- Session management with JWT  
- API key management for MikroTik integrations  

## 2. Tech Stack Overview

**Frontend Framework:**  
- React 18 with TypeScript
- Next.js 14 (App Router)
- Server Components for static parts
- Client Components for interactive elements

**UI Library:**  
- Tailwind CSS v3.3  
- ShadCN UI component library  
- Radix UI primitives for accessibility  
- React Hook Form + Zod for forms  

**Backend Services:**  
- Supabase PostgreSQL database  
- Supabase Auth for authentication  
- Supabase Storage for documents  
- Supabase Realtime for live updates  
- Edge Functions for API routes  

**Deployment:**  
- Vercel with CI/CD pipelines  
- Vercel Postgres for production database  
- Vercel Cron Jobs for scheduled tasks  

## 3. Core Features

**Billing System:**  
- Automated invoicing with customizable templates  
- Recurring billing with proration  
- Payment gateway integration (Stripe, PayPal)  
- Late fee calculations  
- Tax management  
- Discount/promo code system  
- Financial reporting dashboard  

**MikroTik Integration:**  
- API connection management  
- Bandwidth monitoring  
- Hotspot user management  
- PPPoE account sync  
- Queue tree management  
- Real-time traffic graphs  
- Automated provisioning  

**Customer Management:**  
- Customer profiles with service history  
- Service plan management  
- Ticket system with SLA tracking  
- Document storage (contracts, IDs)  
- Communication log  
- Self-service portal  

**Network Operations:**  
- Network topology visualization  
- Device status monitoring  
- Automated alerts (uptime/downtime)  
- Bandwidth usage analytics  
- IP address management  
- Speed test integration  

**Premium Features:**  
- AI-powered network anomaly detection  
- Predictive capacity planning  
- Custom API endpoints  
- White-label branding  
- Advanced reporting (PowerBI-like)  
- Mobile technician app integration  

## 4. Pricing Plans
### Shared Server Plans
**Basic**

Monthly: ₱300 | Yearly: ₱5,000

Features: 50/100 Customers, 1 Mikrotik, Built-in Android App, Free domain (.com & .net)

Includes: Payment Gateway, Mikrotik Integration, SMS, Telegram, and Whatsapp Integration

**Starter**

Monthly: ₱500 | Yearly: ₱7,000

Features: 150/300 Customers, 2 Mikrotik, Built-in Android App, Free domain (.com & .net)

Includes: Payment Gateway, Mikrotik Integration, SMS, Telegram, and Whatsapp Integration

**Enterprise**

Monthly: ₱850 | Yearly: ₱8,000

Features: 500 Customers, 3 Mikrotik, Built-in Apps for Android, iOS, and Windows, Free domain (.com & .net)

Includes: Payment Gateway, Mikrotik Integration, SMS, Telegram, and Whatsapp Integration

**Silver**

Monthly: ₱1,200 | Yearly: ₱9,000

Features: 800 Customers, 4 Mikrotik, Built-in Apps for Android, iOS, and Windows, Free domain (.com & .net)

Includes: Payment Gateway, Mikrotik Integration, SMS, Telegram, and Whatsapp Integration

### Private Server Plans
**Gold**

Monthly: ₱1,500 | Yearly: ₱10,000

Features: 1,000 Customers, 5 Mikrotik, Built-in Apps for Android, iOS, and Windows, Free domain (.com & .net)

Includes: Payment Gateway, Mikrotik Integration, SMS, Telegram, and Whatsapp Integration

**Platinum**

Monthly: ₱2,000 | Yearly: ₱12,000

Features: 1,500 Customers, 6 Mikrotik, Built-in Apps for Android, iOS, and Windows, Free domain (.com & .net), Free Email Server (1 Account)

Includes: Payment Gateway, Mikrotik Integration, SMS, Telegram, and Whatsapp Integration

**Premium**

Monthly: ₱2,500 | Yearly: ₱15,500

Features: 2,000 Customers, 7 Mikrotik, Built-in Apps for Android, iOS, and Windows, Free domain (.com & .net), Free Email Server (1 Account)

Includes: Payment Gateway, Mikrotik Integration, SMS, Telegram, and Whatsapp Integration

**Cloud Server**

Monthly: ₱3,500 | Yearly: ₱22,000

Features: 3,000 Customers, 10 Mikrotik, Built-in Apps for Android, iOS, and Windows, Free domain (.com, .net, .ph), Free Email Server

Includes: Payment Gateway, Mikrotik Integration, SMS, Telegram, and Whatsapp Integration

**Business Pro**

Monthly: ₱5,500 | Yearly: ₱25,000

Features: 5,500 Customers, 15 Mikrotik, Built-in Apps for Android, iOS, and Windows, Free domain (.com, .net, .ph), Free Email Server

Includes: Payment Gateway, Mikrotik Integration, SMS, Telegram, and Whatsapp Integration

**Executive**

Monthly: ₱8,500 | Yearly: ₱30,000

Features: 8,000 Customers, 25 Mikrotik, Built-in Apps for Android, iOS, and Windows, Free domain (.com, .net, .ph), Free Email Server

Includes: Payment Gateway, Mikrotik Integration, SMS, Telegram, and Whatsapp Integration

**Executive +**

Monthly: ₱10,500 | Yearly: ₱35,000

Features: 10,500 Customers, 35 Mikrotik, Built-in Apps for Android, iOS, and Windows, Free domain (.com, .net, .ph), Free Email Server

Includes: Payment Gateway, Mikrotik Integration, SMS, Telegram, and Whatsapp Integration

**Executive Pro**

Monthly: ₱15,000 | Yearly: ₱40,000

Features: 15,500 Customers, 45 Mikrotik, Built-in Apps for Android, iOS, and Windows, Free domain (.com, .net, .ph), Free Email Server

Includes: Payment Gateway, Mikrotik Integration, SMS, Telegram, and Whatsapp Integration

## 5. User Flow

**Admin Onboarding:**  
1. Sign up with business details  
2. Configure base currency/tax settings  
3. Connect MikroTik devices (API setup)  
4. Define service plans and pricing  
5. Import existing customers (CSV)  

**Customer Lifecycle:**  
1. Sales rep creates lead → converts to customer  
2. System auto-provisions network access  
3. Monthly billing cycle begins  
4. Customer receives invoice via email/portal  
5. Payment processing (auto or manual)  
6. Service suspension for non-payment  
7. Reactivation flow  

**Technician Workflow:**  
1. Receives assigned tickets  
2. Checks customer network status  
3. Makes configuration changes via UI  
4. Logs work completed  
5. System updates customer records  

## 6. Design & UI/UX Guidelines

**Visual Style:**  
- Dark mode primary (light mode optional)  
- ISP-themed color palette (blues, greens)  
- Network topology-inspired elements  
- Data-dense but organized interfaces  

**Key UI Patterns:**  
- Dashboard-first design  
- Contextual action panels  
- Bulk operation support  
- Keyboard shortcuts for power users  
- Progressive disclosure for complex features  

**Data Visualization:**  
- Live bandwidth graphs (D3.js)  
- Geographic network maps  
- Usage heatmaps  
- Financial trend charts  

**Accessibility:**  
- WCAG 2.1 AA compliance  
- Screen reader support  
- Reduced motion options  
- Color contrast checking  

## 7. Technical Implementation

**Frontend Architecture:**  
- App Router with route groups  
- Parallel routes for dashboard layout  
- Intercepting routes for modals  
- Server Actions for data mutations  

**Supabase Integration:**  
```typescript
// Example MikroTik device connection
const { data, error } = await supabase
  .from('network_devices')
  .upsert({
    ip_address: '192.168.88.1',
    api_port: 8728,
    device_type: 'mikrotik',
    credentials: await encryptData(apiCredentials)
  })
  .select()
```

**Real-time Features:**  
```typescript
// Subscribe to network alerts
const channel = supabase
  .channel('network-events')
  .on(
    'postgres_changes',
    { event: 'INSERT', schema: 'public', table: 'alerts' },
    (payload) => showToast(payload.new)
  )
  .subscribe()
```

**MikroTik API Proxy:**  
```typescript
// Next.js Route Handler
export async function POST(req: Request) {
  const { deviceId, command } = await req.json()
  
  const { data: device } = await supabase
    .from('network_devices')
    .select('*')
    .eq('id', deviceId)
    .single()

  const response = await mikrotikAPI(device, command)
  return NextResponse.json(response)
}
```

## 8. Development Setup

**Requirements:**  
- Node.js 18+  
- PostgreSQL 15+ (local for dev)  
- Supabase CLI  

**Setup Instructions:**  
1. Clone repository  
2. `npm install`  
3. `cp .env.example .env.local`  
4. Start Supabase: `npx supabase start`  
5. Run migrations: `npx supabase db push`  
6. Seed test data: `npm run db:seed`  
7. Start dev server: `npm run dev`  

**Vercel Deployment:**  
1. Connect Git repository  
2. Set environment variables:  
   - `NEXT_PUBLIC_SUPABASE_URL`  
   - `SUPABASE_SERVICE_ROLE_KEY`  
   - `ENCRYPTION_SECRET`  
3. Enable Edge Functions  
4. Configure cron jobs for billing  

**Testing Tools:**  
- Playwright for E2E tests  
- Jest for unit tests  
- Storybook for UI components  
- Postman for API testing  

---

## 📋 Implementation Task Checklists (Copy to GitHub)

### Billing System
- [ ] Design database schema for invoices, payments, discounts, and taxes
- [ ] Implement automated invoice generation with customizable templates
- [ ] Develop recurring billing logic (with proration)
- [ ] Integrate payment gateways (Stripe, PayPal)
- [ ] Implement late fee calculation logic
- [ ] Add tax management features
- [ ] Support discount/promo code application
- [ ] Build financial reporting dashboard
- [ ] Write unit and integration tests for billing flows

### MikroTik Integration
- [ ] Set up API connection management for MikroTik devices
- [ ] Implement bandwidth monitoring (polling or real-time)
- [ ] Add hotspot user management UI and backend
- [ ] Sync PPPoE accounts with MikroTik
- [ ] Implement queue tree management
- [ ] Render real-time traffic graphs
- [ ] Automate provisioning of new devices
- [ ] Write integration tests for MikroTik API flows

### Customer Management
- [ ] Create customer profile pages with service history
- [ ] Implement service plan management UI and backend
- [ ] Build ticket system with SLA tracking
- [ ] Add document storage (contracts, IDs, etc.)
- [ ] Integrate communication log per customer
- [ ] Develop self-service customer portal
- [ ] Write tests for customer management features

### Network Operations
- [ ] Visualize network topology in the UI
- [ ] Implement device status monitoring (live)
- [ ] Set up automated uptime/downtime alerts
- [ ] Add bandwidth usage analytics dashboard
- [ ] Implement IP address management
- [ ] Integrate speed test functionality
- [ ] Write tests for network operations features

### Premium Features
- [ ] Develop AI-powered network anomaly detection
- [ ] Add predictive capacity planning tools
- [ ] Support creation of custom API endpoints
- [ ] Implement white-label branding options
- [ ] Build advanced reporting (PowerBI-like)
- [ ] Integrate mobile technician app
- [ ] Write tests for premium features