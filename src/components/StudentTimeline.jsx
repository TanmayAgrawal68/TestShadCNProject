'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, GraduationCapIcon } from "lucide-react"

const students = [
  {
    name: "Alice Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    college: "Stanford University",
    degree: "BS in Computer Science",
    graduationDate: "May 2022",
    certificate: "/placeholder.svg?height=150&width=250",
  },
  {
    name: "Bob Smith",
    avatar: "/placeholder.svg?height=40&width=40",
    college: "MIT",
    degree: "MEng in AI",
    graduationDate: "Dec 2023",
    certificate: "/placeholder.svg?height=150&width=250",
  },
  {
    name: "Carol Davis",
    avatar: "/placeholder.svg?height=40&width=40",
    college: "Harvard University",
    degree: "Ph.D. in Quantum Physics",
    graduationDate: "Jun 2024",
    certificate: "/placeholder.svg?height=150&width=250",
  },
]

export function StudentTimeline() {
  return (
    (<div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Student Timeline</h1>
      <div className="relative">
        {students.map((student, index) => (
          <div key={index} className="mb-8 flex">
            <div className="flex flex-col items-center mr-4">
              <div
                className={`w-px bg-gray-300 ${index === 0 ? 'h-1/2 top-1/2' : index === students.length - 1 ? 'h-1/2' : 'h-full'} absolute left-4 ${index === 0 ? 'top-0' : '-top-4'}`}></div>
              <Avatar className="w-8 h-8 z-10">
                <AvatarImage src={student.avatar} alt={student.name} />
                <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </div>
            <Card className="w-full max-h-[500px] overflow-hidden">
              <CardHeader className="py-4">
                <div className="flex items-center gap-4">
                  <div>
                    <CardTitle className="text-lg">{student.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{student.college}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="py-2">
                <div className="mb-2 flex items-center">
                  <GraduationCapIcon className="mr-2 h-4 w-4" />
                  <span className="font-semibold text-sm">{student.degree}</span>
                </div>
                <div className="mb-4 flex items-center text-xs text-muted-foreground">
                  <CalendarIcon className="mr-2 h-3 w-3" />
                  <span>{student.graduationDate}</span>
                </div>
                <div className="aspect-video relative h-[150px]">
                  <img
                    src={student.certificate}
                    alt={`${student.name}'s certificate`}
                    className="object-cover rounded-md w-full h-full" />
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>)
  );
}