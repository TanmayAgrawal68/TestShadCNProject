import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  Calendar, 
  Settings, 
  BarChart as BarChartIcon
} from 'lucide-react'

const projectData = [
  { name: 'Planning', value: 20 },
  { name: 'Development', value: 45 },
  { name: 'Testing', value: 25 },
  { name: 'Deployment', value: 10 },
]

const taskCompletionData = [
  { name: 'Week 1', completed: 20, total: 50 },
  { name: 'Week 2', completed: 35, total: 50 },
  { name: 'Week 3', completed: 45, total: 50 },
  { name: 'Week 4', completed: 30, total: 50 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export function Dashboard() {
  return (
    (<div className="flex h-screen bg-gray-100">
      {/* Side Panel */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-800">Project Hub</h2>
        </div>
        <nav className="mt-6">
          {[
            { icon: <LayoutDashboard size={20} />, name: 'Dashboard' },
            { icon: <FileText size={20} />, name: 'Projects' },
            { icon: <Users size={20} />, name: 'Team' },
            { icon: <Calendar size={20} />, name: 'Schedule' },
            { icon: <BarChartIcon size={20} />, name: 'Reports' },
            { icon: <Settings size={20} />, name: 'Settings' },
          ].map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              className="w-full justify-start px-4 py-2 text-left">
              {item.icon}
              <span className="ml-4">{item.name}</span>
            </Button>
          ))}
        </nav>
      </div>
      {/* Main Content */}
      <div className="flex-1 overflow-auto p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Project Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* Project Members Card */}
          <Card>
            <CardHeader>
              <CardTitle>Project Members</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2">
                {['JD', 'AS', 'TK', 'MR'].map((initials) => (
                  <Avatar key={initials}>
                    <AvatarFallback>{initials}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Project Data Card */}
          <Card>
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Tasks Completed:</span>
                  <span className="font-bold">24/50</span>
                </div>
                <div className="flex justify-between">
                  <span>Project Timeline:</span>
                  <span className="font-bold">4 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span>Budget Utilized:</span>
                  <span className="font-bold">65%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions Card */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full">Create Task</Button>
              <Button className="w-full" variant="outline">Schedule Meeting</Button>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Project Status Pie Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Project Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={projectData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value">
                      {projectData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Task Completion Bar Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Task Completion</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={taskCompletionData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="completed" fill="#8884d8" />
                    <Bar dataKey="total" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>)
  );
}