import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MapPin, Clock, Star, Users, Award, Shield, Car, Truck, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-blue-600">BUXXIDO'S</h1>
                <p className="text-sm text-gray-600">DRIVING SCHOOL</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="#home" className="text-gray-700 hover:text-blue-600">
                Home
              </Link>
              <Link href="#services" className="text-gray-700 hover:text-blue-600">
                Services
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-blue-600">
                About
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600">
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-2">
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-blue-600 to-red-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Drive Safe
                <br />
                Drive Smart
                <br />
                <span className="text-yellow-300">Drive with Us</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Professional driving instruction for all license codes. Get your license with confidence at Buxxido's
                Driving School.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Book Lessons Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  View Courses
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Driving School Vehicles"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="bg-blue-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="font-semibold">072 759 2065 / 083 750 0772</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-red-500" />
                <span>1074 Bluesum Street, Ebony Park, Midrand</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-green-600" />
              <span>Mon-Sat: 7AM-6PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Professional driving instruction for all license categories</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-blue-600">CODE 08</CardTitle>
                <CardDescription>Light Motor Vehicles</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Cars and light delivery vehicles</li>
                  <li>• Comprehensive theory training</li>
                  <li>• Practical driving lessons</li>
                  <li>• Test preparation</li>
                </ul>
                <Link href="/code08" legacyBehavior passHref>
                  <Button asChild className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                    <a>Learn More</a>
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-100 hover:border-red-300 transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-red-500">CODE 10</CardTitle>
                <CardDescription>Medium Trucks</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Trucks up to 16,000kg</li>
                  <li>• Commercial vehicle training</li>
                  <li>• Safety protocols</li>
                  <li>• Professional certification</li>
                </ul>
                <Link href="/code10" legacyBehavior passHref>
                  <Button asChild className="w-full mt-4 bg-red-500 hover:bg-red-600">
                    <a>Learn More</a>
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-100 hover:border-green-300 transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-green-600">CODE 14</CardTitle>
                <CardDescription>Heavy Trucks</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Heavy trucks and articulated vehicles</li>
                  <li>• Advanced maneuvering</li>
                  <li>• Load management</li>
                  <li>• Professional driver training</li>
                </ul>
                <Link href="/code14" legacyBehavior passHref>
                  <Button asChild className="w-full mt-4 bg-green-600 hover:bg-green-700">
                    <a>Learn More</a>
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Additional Services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Defensive Driving</h3>
              <p className="text-sm text-gray-600">Advanced safety techniques</p>
            </div>
            <div className="text-center p-6 bg-red-50 rounded-lg">
              <Award className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">License Renewal</h3>
              <p className="text-sm text-gray-600">Quick renewal services</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Corporate Training</h3>
              <p className="text-sm text-gray-600">Fleet driver training</p>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-lg">
              <Clock className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Flexible Hours</h3>
              <p className="text-sm text-gray-600">Evening & weekend slots</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Buxxido's?</h2>
            <p className="text-xl text-gray-600">Experience the difference with professional instruction</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Certified Instructors</h3>
              </div>
              <p className="text-gray-600">
                All our instructors are professionally certified and experienced in teaching all license codes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                  <Car className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Modern Fleet</h3>
              </div>
              <p className="text-gray-600">
                Well-maintained vehicles equipped with dual controls for safe and effective learning.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">High Pass Rate</h3>
              </div>
              <p className="text-gray-600">
                95% of our students pass their driving test on the first attempt with our proven methods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Excellent instruction! Passed my Code 10 on the first try. The instructors are patient and
                  professional."
                </p>
                <div className="font-semibold">- Thabo M.</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Great driving school! Flexible timing and very affordable. Highly recommend for anyone wanting to get
                  their license."
                </p>
                <div className="font-semibold">- Sarah K.</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Professional service from start to finish. The Code 14 training was comprehensive and
                  well-structured."
                </p>
                <div className="font-semibold">- John D.</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-blue-600 to-red-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Learning?</h2>
            <p className="text-xl text-blue-100">Contact us today to book your first lesson</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6" />
                  <div>
                    <p className="font-semibold">Call or WhatsApp</p>
                    <p>072 759 2065 / 083 750 0772</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6" />
                  <div>
                    <p className="font-semibold">Visit Us</p>
                    <p>
                      1074 Bluesum Street
                      <br />
                      Ebony Park, Midrand, 1685
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6" />
                  <div>
                    <p className="font-semibold">Operating Hours</p>
                    <p>
                      Monday - Saturday: 7:00 AM - 6:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-6">Quick Booking</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white"
                />
                <select className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white">
                  <option value="">Select License Code</option>
                  <option value="code08">Code 08 - Light Motor Vehicle</option>
                  <option value="code10">Code 10 - Medium Truck</option>
                  <option value="code14">Code 14 - Heavy Truck</option>
                </select>
                <textarea
                  placeholder="Additional Message"
                  rows={3}
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white resize-none"
                ></textarea>
                <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">Send Message</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Car className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-blue-400">BUXXIDO'S</h3>
                  <p className="text-sm text-gray-400">DRIVING SCHOOL</p>
                </div>
              </div>
              <p className="text-gray-400">
                Professional driving instruction for all license codes. Drive safe, drive smart, drive with us.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#home" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Code 08 - Light Motor Vehicles</li>
                <li>Code 10 - Medium Trucks</li>
                <li>Code 14 - Heavy Trucks</li>
                <li>Defensive Driving</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Buxxido's Driving School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
