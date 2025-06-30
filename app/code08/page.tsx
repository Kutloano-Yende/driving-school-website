import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Code08Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header (Assuming it's part of a layout component, if not, it should be added or imported) */}
      {/* For now, let's add a simple back navigation, assuming header/footer are in app/layout.tsx */}

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/#services" className="text-blue-600 hover:text-blue-800">
            &larr; Back to Services
          </Link>
        </div>

        <Card className="border-2 border-blue-100 max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Car className="w-10 h-10 text-white" />
            </div>
            <CardTitle className="text-blue-600 text-3xl">CODE 08</CardTitle>
            <CardDescription className="text-xl">Light Motor Vehicles</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-center text-gray-700 mb-6">
              This license allows you to drive cars and other light motor vehicles up to a certain weight.
              Our comprehensive training program covers everything you need to pass your test with confidence.
            </p>
            <h3 className="font-semibold text-lg text-gray-800 mb-3">What you'll learn:</h3>
            <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside mb-6">
              <li>Vehicle controls and operation</li>
              <li>Road signs and markings</li>
              <li>Defensive driving techniques</li>
              <li>Pre-trip inspections</li>
              <li>Parking maneuvers (alley docking, parallel parking)</li>
              <li>Yard and road test preparation</li>
              <li>Comprehensive theory training</li>
              <li>Practical driving lessons</li>
            </ul>
            <div className="mt-6 text-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/booking?code=08">Book Code 08 Lessons</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Placeholder for more detailed information */}
        <section className="py-12 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Further Details</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Our Code 08 training is tailored for beginners and those looking to refresh their skills. We focus on creating
              a safe and comfortable learning environment. Our instructors are patient and will guide you through every
              step of the process, from understanding the vehicle's mechanics to mastering complex driving situations.
            </p>
            <p>
              We offer flexible scheduling options to fit your busy life, including weekend and evening lessons.
              Our modern fleet of dual-control vehicles ensures your safety while you learn.
            </p>
            {/* Add more specific details about Code 08 training here */}
          </div>
        </section>
      </main>

      {/* Footer (Assuming it's part of a layout component) */}
    </div>
  );
}
