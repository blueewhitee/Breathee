-- Enable RLS
alter default privileges revoke execute on functions from public;

-- Profiles table
create table public.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  user_id uuid references auth.users on delete cascade not null,
  username text unique not null,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  
  constraint username_length check (char_length(username) >= 3)
);

-- Breathing sessions table
create table public.breathing_sessions (
  id uuid default uuid_generate_v4() primary key not null,
  user_id uuid references auth.users on delete cascade not null,
  duration integer not null,
  type text not null,
  notes text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  
  constraint type_check check (type in ('box', 'deep', 'alternate'))
);

-- User stats table
create table public.user_stats (
  id uuid default uuid_generate_v4() primary key not null,
  user_id uuid references auth.users on delete cascade not null unique,
  total_sessions integer default 0 not null,
  total_duration integer default 0 not null,
  streak_days integer default 0 not null,
  last_session timestamp with time zone
);

-- RLS Policies
alter table public.profiles enable row level security;
alter table public.breathing_sessions enable row level security;
alter table public.user_stats enable row level security;

create policy "Users can read own profile"
  on public.profiles for select
  using ( auth.uid() = user_id );

create policy "Users can insert own profile"
  on public.profiles for insert
  with check ( auth.uid() = user_id );

create policy "Users can read own breathing sessions"
  on public.breathing_sessions for select
  using ( auth.uid() = user_id );

create policy "Users can insert own breathing sessions"
  on public.breathing_sessions for insert
  with check ( auth.uid() = user_id );

create policy "Users can read own stats"
  on public.user_stats for select
  using ( auth.uid() = user_id );