import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Code10Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header (Assuming it's part of a layout component) */}

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/#services" className="text-red-600 hover:text-red-800">
            &larr; Back to Services
          </Link>
        </div>

        <Card className="border-2 border-red-100 max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-10 h-10 text-white" />
            </div>
            <CardTitle className="text-red-500 text-3xl">CODE 10</CardTitle>
            <CardDescription className="text-xl">Medium Trucks</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-center text-gray-700 mb-6">
              The Code 10 license allows you to operate medium-sized trucks and buses. This is ideal for those
              seeking a career in transport or logistics.
            </p>
            <h3 className="font-semibold text-lg text-gray-800 mb-3">What you'll learn:</h3>
            <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside mb-6">
              <li>Operating medium commercial vehicles (up to 16,000kg GVM)</li>
              <li>Vehicle inspections and maintenance</li>
              <li>Advanced maneuvering for larger vehicles</li>
              <li>Load securing and management</li>
              <li>Safety protocols for commercial driving</li>
              <li>Yard and road test preparation</li>
              <li>Professional certification requirements</li>
            </ul>
            <div className="mt-6 text-center">
              <Button size="lg" className="bg-red-500 hover:bg-red-600">
                <Link href="/booking?code=10">Book Code 10 Lessons</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Placeholder for more detailed information */}
        <section className="py-12 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Further Details</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Our Code 10 training program is designed to equip you with the skills and knowledge needed to
              confidently operate medium commercial vehicles. We cover all aspects of the curriculum, ensuring
              you are well-prepared for both the theoretical and practical examinations.
            </p>
            <p>
              We provide training on vehicles that match the testing standards. Our instructors have extensive
              experience in commercial vehicle training and will guide you through every aspect of handling
              these larger vehicles safely and efficiently.
            </p>
            {/* Add more specific details about Code 10 training here */}
          </div>
        </section>
      </main>

      {/* Footer (Assuming it's part of a layout component) */}
    </div>
  );
}
