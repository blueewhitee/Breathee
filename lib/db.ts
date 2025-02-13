import { createClient } from '@/lib/supabase/client'
import type { Breathing, Profile, UserStats } from '@/types/supabase'

export async function createProfile(profile: Omit<Profile, 'id' | 'created_at'>) {
  const supabase = createClient()
  return await supabase
    .from('profiles')
    .insert([profile])
    .select()
    .single()
}

export async function createBreathingSession(session: Omit<Breathing, 'id' | 'created_at'>) {
  const supabase = createClient()
  return await supabase
    .from('breathing_sessions')
    .insert([session])
    .select()
    .single()
}

export async function getUserStats(userId: string) {
  const supabase = createClient()
  return await supabase
    .from('user_stats')
    .select('*')
    .eq('user_id', userId)
    .single()
}