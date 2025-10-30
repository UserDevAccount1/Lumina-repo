import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white mt-16 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left section */}
        <div className="space-y-4">
          <Image
            src="/logo.png"
            alt="Lumina Logo"
            width={130}
            height={40}
            className="object-contain"
          />
          <p className="text-gray-600 text-sm leading-relaxed">
            We provide top-quality outsourced support to businesses of all sizes worldwide,
            delivering expert solutions that drive efficiency and growth.
          </p>
          <p className="text-gray-500 text-sm">
            a <span className="font-semibold">C9group</span> company
          </p>
        </div>

        {/* Businesses & Talents side by side on mobile */}
        <div className="flex gap-8 col-span-1 md:col-span-2">
          {/* For Businesses */}
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800 mb-3">For Businesses</h3>
            <ul className="space-y-2">
              {["Link Here", "Link Here", "Link Here", "Link Here", "Link Here"].map(
                (text, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="flex items-center text-gray-600 hover:text-pink-600 text-sm"
                    >
                      <ChevronRight className="w-4 h-4 mr-1" /> {text}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* For Talents */}
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800 mb-3">For Talents</h3>
            <ul className="space-y-2">
              {["Link Here", "Link Here", "Link Here", "Link Here", "Link Here"].map(
                (text, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="flex items-center text-gray-600 hover:text-pink-600 text-sm"
                    >
                      <ChevronRight className="w-4 h-4 mr-1" /> {text}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Resources</h3>
          <ul className="space-y-2">
            {["Link Here", "Link Here", "Link Here", "Link Here", "Link Here"].map(
              (text, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="flex items-center text-gray-600 hover:text-pink-600 text-sm"
                  >
                    <ChevronRight className="w-4 h-4 mr-1" /> {text}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-gray-200 mt-4">
        <div className="pt-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© 2025 C9 Teams. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link href="#" className="hover:text-pink-600">
              Terms & Conditions
            </Link>
            <Link href="#" className="hover:text-pink-600">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
