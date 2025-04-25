export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      customers: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          name: string
          email: string
          phone: string
          address: string
          status: "active" | "suspended" | "terminated"
          notes: string | null
          user_id: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          name: string
          email: string
          phone: string
          address: string
          status?: "active" | "suspended" | "terminated"
          notes?: string | null
          user_id?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          name?: string
          email?: string
          phone?: string
          address?: string
          status?: "active" | "suspended" | "terminated"
          notes?: string | null
          user_id?: string | null
        }
      },
      companies: {
        Row: {
          id: string
          name: string
          address: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          address: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          address?: string
          created_at?: string
          updated_at?: string
        }
      },
      service_plans: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          name: string
          description: string
          price: number
          bandwidth_up: number
          bandwidth_down: number
          is_active: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          name: string
          description: string
          price: number
          bandwidth_up: number
          bandwidth_down: number
          is_active?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          name?: string
          description?: string
          price?: number
          bandwidth_up?: number
          bandwidth_down?: number
          is_active?: boolean
        }
      },
      subscriptions: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          customer_id: string
          service_plan_id: string
          start_date: string
          end_date: string | null
          status: "active" | "suspended" | "terminated"
          ip_address: string | null
          mac_address: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          customer_id: string
          service_plan_id: string
          start_date: string
          end_date?: string | null
          status?: "active" | "suspended" | "terminated"
          ip_address?: string | null
          mac_address?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          customer_id?: string
          service_plan_id?: string
          start_date?: string
          end_date?: string | null
          status?: "active" | "suspended" | "terminated"
          ip_address?: string | null
          mac_address?: string | null
        }
      },
      invoices: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          customer_id: string
          subscription_id: string
          amount: number
          status: "draft" | "sent" | "paid" | "overdue" | "cancelled" | "pending"
          due_date: string
          paid_date: string | null
          invoice_number: string
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          customer_id: string
          subscription_id: string
          amount: number
          status?: "draft" | "sent" | "paid" | "overdue" | "cancelled"
          due_date: string
          paid_date?: string | null
          invoice_number: string
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          customer_id?: string
          subscription_id?: string
          amount?: number
          status?: "draft" | "sent" | "paid" | "overdue" | "cancelled"
          due_date?: string
          paid_date?: string | null
          invoice_number?: string
        }
      },
      network_devices: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          name: string
          ip_address: string
          api_port: number
          device_type: "mikrotik" | "other"
          credentials: string
          status: "online" | "offline" | "unknown"
          last_checked: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          name: string
          ip_address: string
          api_port: number
          device_type: "mikrotik" | "other"
          credentials: string
          status?: "online" | "offline" | "unknown"
          last_checked?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          name?: string
          ip_address?: string
          api_port?: number
          device_type?: "mikrotik" | "other"
          credentials?: string
          status?: "online" | "offline" | "unknown"
          last_checked?: string | null
        }
      },
      tickets: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          customer_id: string
          subject: string
          description: string
          status: "open" | "in_progress" | "resolved" | "closed"
          priority: "low" | "medium" | "high" | "critical"
          assigned_to: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          customer_id: string
          subject: string
          description: string
          status?: "open" | "in_progress" | "resolved" | "closed"
          priority?: "low" | "medium" | "high" | "critical"
          assigned_to?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          customer_id?: string
          subject?: string
          description?: string
          status?: "open" | "in_progress" | "resolved" | "closed"
          priority?: "low" | "medium" | "high" | "critical"
          assigned_to?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
