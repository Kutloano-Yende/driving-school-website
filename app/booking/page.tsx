"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Clock, Car, Truck, Phone, MapPin } from "lucide-react"
import { format } from "date-fns"
import Link from "next/link"

export default function BookingPage() {
  const [date, setDate] = useState<Date>()
  const [selectedService, setSelectedService] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    licenseCode: "",
    experience: "",
    message: "",
  })

  const services = [
    { id: "code08", name: "Code 08 - Light Motor Vehicle", price: "R1,200", icon: Car },
    { id: "code10", name: "Code 10 - Medium Truck", price: "R2,500", icon: Truck },
    { id: "code14", name: "Code 14 - Heavy Truck", price: "R3,500", icon: Truck },
  ]

  const timeSlots = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-blue-600">BUXXIDO'S</h1>
                <p className="text-sm text-gray-600">DRIVING SCHOOL</p>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600">
                Home
              </Link>
              <Link href="/booking" className="text-blue-600 font-semibold">
                Book Now
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Book Your Driving Lessons</h1>
            <p className="text-xl text-gray-600">
              Choose your service and schedule your lessons with our professional instructors
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Lesson Booking Form</CardTitle>
                  <CardDescription>Fill in your details to book your driving lessons</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="072 759 2065"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Service Selection */}
                  <div>
                    <Label>License Code *</Label>
                    <Select
                      value={formData.licenseCode}
                      onValueChange={(value) => setFormData({ ...formData, licenseCode: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select license code" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="code08">Code 08 - Light Motor Vehicle</SelectItem>
                        <SelectItem value="code10">Code 10 - Medium Truck</SelectItem>
                        <SelectItem value="code14">Code 14 - Heavy Truck</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Driving Experience</Label>
                    <Select
                      value={formData.experience}
                      onValueChange={(value) => setFormData({ ...formData, experience: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Complete Beginner</SelectItem>
                        <SelectItem value="some">Some Experience</SelectItem>
                        <SelectItem value="experienced">Experienced (Need Test Prep)</SelectItem>
                        <SelectItem value="refresher">Refresher Course</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Date and Time Selection */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label>Preferred Date *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start text-left font-normal">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div>
                      <Label>Preferred Time</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Additional Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Any specific requirements or questions?"
                      rows={3}
                    />
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                    Book Lessons Now
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Service Pricing */}
              <Card>
                <CardHeader>
                  <CardTitle>Our Services</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {services.map((service) => {
                    const IconComponent = service.icon
                    return (
                      <div key={service.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <IconComponent className="w-5 h-5 text-blue-600" />
                          <div>
                            <p className="font-semibold text-sm">{service.name}</p>
                            <p className="text-xs text-gray-600">Starting from {service.price}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-semibold">Call or WhatsApp</p>
                      <p className="text-sm text-gray-600">072 759 2065</p>
                      <p className="text-sm text-gray-600">083 750 0772</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-red-500" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-sm text-gray-600">1074 Bluesum Street</p>
                      <p className="text-sm text-gray-600">Ebony Park, Midrand</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-semibold">Operating Hours</p>
                      <p className="text-sm text-gray-600">Mon-Sat: 7AM-6PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Tips */}
              <Card>
                <CardHeader>
                  <CardTitle>Before Your Lesson</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2 text-gray-600">
                    <li>• Bring your learner's license</li>
                    <li>• Wear comfortable shoes</li>
                    <li>• Arrive 10 minutes early</li>
                    <li>• Bring payment for lessons</li>
                    <li>• Stay calm and focused</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
