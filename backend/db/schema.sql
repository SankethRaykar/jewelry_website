-- 1. Create Tables
CREATE TABLE public.profiles (
  id uuid REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  role text DEFAULT 'customer',
  full_name text,
  email text,
  addresses jsonb DEFAULT '[]'::jsonb,
  wishlist jsonb DEFAULT '[]'::jsonb,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE public.categories (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  image_url text,
  parent_id uuid REFERENCES public.categories(id),
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE public.products (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  mrp numeric NOT NULL,
  sale_price numeric NOT NULL,
  discount_percent numeric,
  category_id uuid REFERENCES public.categories(id),
  variants jsonb DEFAULT '[]'::jsonb,
  stock integer DEFAULT 0,
  is_active boolean DEFAULT true,
  is_featured boolean DEFAULT false,
  images text[],
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE public.coupons (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  code text UNIQUE NOT NULL,
  type text NOT NULL, -- 'flat', 'percent', 'free_shipping'
  value numeric NOT NULL,
  min_order_value numeric DEFAULT 0,
  usage_limit integer,
  expiry_date timestamp with time zone,
  is_active boolean DEFAULT true,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE public.orders (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES public.profiles(id) NOT NULL,
  items jsonb NOT NULL,
  total_amount numeric NOT NULL,
  status text DEFAULT 'pending',
  coupon_applied text,
  payment_status text DEFAULT 'pending',
  shipping_address jsonb NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE public.banners (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  image_url text NOT NULL,
  title text,
  button_text text,
  link text,
  is_active boolean DEFAULT true,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Trigger to auto-create profile on auth.users insert
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- 2. Create Storage Bucket
insert into storage.buckets (id, name, public)
values ('blinglux_assets', 'blinglux_assets', true)
on conflict (id) do nothing;

-- 3. Set up RLS Policies
-- Enable RLS on all tables
alter table public.profiles enable row level security;
alter table public.categories enable row level security;
alter table public.products enable row level security;
alter table public.coupons enable row level security;
alter table public.orders enable row level security;
alter table public.banners enable row level security;

-- Profiles: Users can read/update their own profile
create policy "Users can view own profile" on public.profiles for select using (auth.uid() = id);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);

-- Categories: Public read, Admin write 
create policy "Categories are publicly viewable" on public.categories for select using (true);
create policy "Admins can manage categories" on public.categories for all using (
  exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
);

-- Products: Public read, Admin write
create policy "Products are publicly viewable" on public.products for select using (is_active = true);
create policy "Admins can manage products" on public.products for all using (
  exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
);

-- Coupons: Admin only (Backend handles application)
create policy "Admins can manage coupons" on public.coupons for all using (
  exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
);

-- Orders: Users can view their own, Admins can view all
create policy "Users can view own orders" on public.orders for select using (auth.uid() = user_id);
create policy "Admins can view all orders" on public.orders for select using (
  exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
);

-- Banners: Public read, Admin write
create policy "Banners are publicly viewable" on public.banners for select using (is_active = true);
create policy "Admins can manage banners" on public.banners for all using (
  exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
);

-- Storage bucket policies (Public read, authenticated insert)
create policy "Public Access" on storage.objects for select using (bucket_id = 'blinglux_assets');
create policy "Admin Uploads" on storage.objects for insert with check (
  bucket_id = 'blinglux_assets' and
  exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
);
