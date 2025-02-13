"use client"

import { createClient } from "@/lib/supabase/client"
import { useEffect, useState } from "react"

export function TestSupabase() {
  const [data, setData] = useState<any[]>([])
  const supabase = createClient()

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('your_table_name')
        .select('*')
        .limit(1)

      if (error) console.error('Supabase fetch error:', error)
      if (data) setData(data)
    }

    fetchData()
  }, [supabase])

  return (
    <div>
      <h2>Supabase Connection Test</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
} 