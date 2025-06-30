import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Code14Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header (Assuming it's part of a layout component) */}

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/#services" className="text-green-600 hover:text-green-800">
            &larr; Back to Services
          </Link>
        </div>

        <Card className="border-2 border-green-100 max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-10 h-10 text-white" /> {/* Using Truck icon, can be differentiated if a more specific one is available */}
            </div>
            <CardTitle className="text-green-600 text-3xl">CODE 14</CardTitle>
            <CardDescription className="text-xl">Heavy Trucks & Articulated Vehicles</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-center text-gray-700 mb-6">
              The Code 14 license is for heavy-duty trucks, including articulated vehicles (horse-and-trailer).
              This is the highest class of heavy vehicle license and opens doors to specialized transport careers.
            </p>
            <h3 className="font-semibold text-lg text-gray-800 mb-3">What you'll learn:</h3>
            <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside mb-6">
              <li>Operating heavy trucks and articulated vehicles (GVM > 16,000kg)</li>
              <li>Coupling and uncoupling trailers</li>
              <li>Advanced maneuvering for long vehicles</li>
              <li>Air brake systems and operation</li>
              <li>Load distribution and management for heavy cargo</li>
              <li>Long-distance driving considerations</li>
              <li>Professional driver training and ethics</li>
              <li>Comprehensive yard and road test preparation</li>
            </ul>
            <div className="mt-6 text-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <Link href="/booking?code=14">Book Code 14 Lessons</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Placeholder for more detailed information */}
        <section className="py-12 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Further Details</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Our Code 14 program provides intensive training for handling the largest vehicles on the road.
              We focus on safety, precision, and the responsibilities that come with operating heavy articulated trucks.
              Our instructors are experts in heavy vehicle operation and will prepare you thoroughly for the demanding tests.
            </p>
            <p>
              Training includes practical experience with coupling and uncoupling trailers, reversing with a trailer,
              and navigating challenging road conditions. We ensure you are proficient in all aspects required for your Code 14 license.
            </p>
            {/* Add more specific details about Code 14 training here */}
          </div>
        </section>
      </main>

      {/* Footer (Assuming it's part of a layout component) */}
    </div>
  );
}
