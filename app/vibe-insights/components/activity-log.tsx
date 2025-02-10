"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const activityData = [
  {
    id: 1,
    title: "Google Search",
    url: "https://www.google.com",
    timeSpent: "00:05:30",
    timestamp: "2024-02-10 14:30:00",
  },
  {
    id: 2,
    title: "YouTube Video",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    timeSpent: "00:10:15",
    timestamp: "2024-02-10 15:00:00",
  },
  {
    id: 3,
    title: "Stack Overflow",
    url: "https://stackoverflow.com/questions/12345",
    timeSpent: "00:15:45",
    timestamp: "2024-02-10 16:30:00",
  },
  // Add more dummy data here...
]

export function ActivityLog() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const totalPages = Math.ceil(activityData.length / itemsPerPage)

  const paginatedData = activityData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Page Title</TableHead>
            <TableHead>URL</TableHead>
            <TableHead>Time Spent</TableHead>
            <TableHead>Timestamp</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((item) => (
            <TableRow key={item.id} className="cursor-pointer hover:bg-gray-100">
              <TableCell className="font-medium">{item.title}</TableCell>
              <TableCell className="text-blue-600 hover:underline">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.url.length > 30 ? item.url.substring(0, 30) + "..." : item.url}
                </a>
              </TableCell>
              <TableCell>{item.timeSpent}</TableCell>
              <TableCell>{item.timestamp}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination className="mt-4">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            />
          </PaginationItem>
          {[...Array(totalPages)].map((_, i) => (
            <PaginationItem key={i}>
              <PaginationLink onClick={() => setCurrentPage(i + 1)} isActive={currentPage === i + 1}>
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

