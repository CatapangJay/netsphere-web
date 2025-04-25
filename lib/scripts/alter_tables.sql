-- Migration: Create companies table and update customers table

-- Ensure uuid extension is available
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create companies table
CREATE TABLE IF NOT EXISTS companies (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Alter customers table: drop address, add company_id, set up foreign key
ALTER TABLE public.customers
  DROP COLUMN IF EXISTS address,
  ADD COLUMN IF NOT EXISTS company_id UUID;

ALTER TABLE public.customers
  ADD CONSTRAINT customers_company_id_fkey FOREIGN KEY (company_id)
    REFERENCES public.companies(id)
    ON DELETE SET NULL;
