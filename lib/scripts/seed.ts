import 'dotenv/config';
import { createServerSupabaseClient } from '../supabase';

async function seed() {
  const supabase = createServerSupabaseClient();

  console.log('Seeding customers...');
  const customersData = [
    { name: 'Alice Johnson', email: 'alice@example.com', phone: '123-456-7890', address: '123 Main St', status: 'active' },
    { name: 'Bob Smith', email: 'bob@example.com', phone: '987-654-3210', address: '456 Elm St', status: 'active' }
  ];
  const { data: customers, error: custError } = await supabase.from('customers').insert(customersData).select();
  if (custError) throw custError;

  console.log('Seeding service plans...');
  const plansData = [
    { name: 'Basic Plan 1', description: '10Mbps/10Mbps', price: 20, bandwidth_up: 10, bandwidth_down: 10, is_active: true },
    { name: 'Premium Plan', description: '100Mbps/100Mbps', price: 80, bandwidth_up: 100, bandwidth_down: 100, is_active: true }
  ];
  const { data: plans, error: planError } = await supabase.from('service_plans').insert(plansData).select();
  if (planError) throw planError;

  console.log('Seeding subscriptions...');
  const subscriptionsData = customers.flatMap((cust, idx) => [
    { customer_id: cust.id, service_plan_id: plans[idx % plans.length].id, start_date: new Date().toISOString(), status: 'active' }
  ]);
  const { data: subscriptions, error: subError } = await supabase.from('subscriptions').insert(subscriptionsData).select();
  if (subError) throw subError;

  console.log('Seeding invoices...');
  const invoicesData = subscriptions.map((sub, idx) => ({
    customer_id: sub.customer_id,
    subscription_id: sub.id,
    amount: idx === 0 ? 20 : 80,
    due_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    invoice_number: `INV-${idx + 1}`
  }));
  const { data: invoices, error: invError } = await supabase.from('invoices').insert(invoicesData).select();
  if (invError) throw invError;

  console.log('Seeding network devices...');
  const devicesData = [
    { name: 'Router 1', ip_address: '192.168.1.1', api_port: 8728, device_type: 'mikrotik', credentials: 'dXNlcjpwYXNz', status: 'online' },
    { name: 'Switch 1', ip_address: '192.168.1.2', api_port: 8728, device_type: 'other', credentials: 'dXNlcjpwYXNz', status: 'offline' }
  ];
  const { data: devices, error: devError } = await supabase.from('network_devices').insert(devicesData).select();
  if (devError) throw devError;

  console.log('Seeding tickets...');
  const ticketsData = customers.map((cust, idx) => ({
    customer_id: cust.id,
    subject: `Sample ticket ${idx + 1}`,
    description: 'This is a test support ticket',
    status: 'open',
    priority: 'medium'
  }));
  const { data: tickets, error: tickError } = await supabase.from('tickets').insert(ticketsData).select();
  if (tickError) throw tickError;

  console.log('Seeding complete');
}

seed().catch(err => { console.error('Seed error:', err); process.exit(1); });
