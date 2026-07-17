-- Contact & partnership inquiry submissions from website and partner portal.
create table if not exists public.contact_inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  company text not null,
  role text,
  country text,
  email text not null,
  interest text not null,
  message text not null,
  source text not null default 'website',
  created_at timestamptz not null default now()
);

create index if not exists contact_inquiries_created_at_idx on public.contact_inquiries (created_at desc);
create index if not exists contact_inquiries_email_idx on public.contact_inquiries (email);

alter table public.contact_inquiries enable row level security;

-- Server-side inserts only (service role bypasses RLS).
create policy "Service role can insert contact inquiries"
  on public.contact_inquiries
  for insert
  to service_role
  with check (true);
