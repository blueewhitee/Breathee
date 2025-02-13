export type Breathing = {
  id: string
  created_at: string
  user_id: string
  duration: number
  type: 'box' | 'deep' | 'alternate'
  notes?: string
}

export type Profile = {
  id: string
  user_id: string
  username: string
  avatar_url?: string
  created_at: string
}

export type UserStats = {
  id: string
  user_id: string
  total_sessions: number
  total_duration: number
  streak_days: number
  last_session: string
}