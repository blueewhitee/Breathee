"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowUpDown } from "lucide-react"

const urlData = [
  {
    id: 1,
    url: "https://www.example.com",
    title: "Example Website",
    timeSpent: "00:15:30",
    timestamp: "2024-02-10 14:30:00",
    contentType: "Text",
  },
  {
    id: 2,
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    title: "YouTube Video",
    timeSpent: "00:10:15",
    timestamp: "2024-02-10 15:00:00",
    contentType: "Video",
  },
  {
    id: 3,
    url: "https://www.github.com",
    title: "GitHub",
    timeSpent: "01:05:45",
    timestamp: "2024-02-10 16:30:00",
    contentType: "Text",
  },
  // Add more dummy data here...
]

export function UrlTimeAnalysis() {
  const [data, setData] = useState(urlData)
  const [searchTerm, setSearchTerm] = useState("")

  const handleSort = (column: keyof (typeof urlData)[0]) => {
    const sorted = [...data].sort((a, b) => {
      if (a[column] < b[column]) return -1
      if (a[column] > b[column]) return 1
      return 0
    })
    setData(sorted)
  }

  const filteredData = data.filter(
    (item) =>
      item.url.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <Input
        placeholder="Search URLs or titles..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <Button variant="ghost" onClick={() => handleSort("title")}>
                Page Title <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" onClick={() => handleSort("url")}>
                URL <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" onClick={() => handleSort("timeSpent")}>
                Time Spent <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" onClick={() => handleSort("timestamp")}>
                Visit Timestamp <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" onClick={() => handleSort("contentType")}>
                Content Type <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.title}</TableCell>
              <TableCell className="text-blue-600 hover:underline">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.url.length > 30 ? item.url.substring(0, 30) + "..." : item.url}
                </a>
              </TableCell>
              <TableCell>{item.timeSpent}</TableCell>
              <TableCell>{item.timestamp}</TableCell>
              <TableCell>{item.contentType}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

