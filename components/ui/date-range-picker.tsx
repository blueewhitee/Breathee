import { useState } from "react"

interface DateRangePickerProps {
  from: Date
  to: Date
  onSelect: (range: { from: Date; to: Date }) => void
}

export function DateRangePicker({ from, to, onSelect }: DateRangePickerProps) {
  const [startDate, setStartDate] = useState(from)
  const [endDate, setEndDate] = useState(to)

  const handleStartDateChange = (date: Date) => {
    setStartDate(date)
    onSelect({ from: date, to: endDate })
  }

  const handleEndDateChange = (date: Date) => {
    setEndDate(date)
    onSelect({ from: startDate, to: date })
  }

  return (
    <div className="flex items-center">
      <input
        type="date"
        value={startDate.toISOString().slice(0, 10)}
        onChange={(e) => handleStartDateChange(new Date(e.target.value))}
      />
      <span className="mx-2">to</span>
      <input
        type="date"
        value={endDate.toISOString().slice(0, 10)}
        onChange={(e) => handleEndDateChange(new Date(e.target.value))}
      />
    </div>
  )
}

